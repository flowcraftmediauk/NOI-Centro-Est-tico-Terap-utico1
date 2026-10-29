import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClinicData, ClinicService, ClinicLocation, IntakeQuestion } from '../types/clinic';
import { initialClinicData, defaultIntakeQuestions } from '../data/initialClinicData';

interface ClinicContextType {
  data: ClinicData;
  questions: IntakeQuestion[];
  currentQuestion: IntakeQuestion | null;
  currentQuestionIndex: number;
  updateData: (updates: Partial<ClinicData>) => void;
  updateService: (id: string, updates: Partial<ClinicService>) => void;
  updateLocation: (index: number, updates: Partial<ClinicLocation>) => void;
  answerQuestion: (questionId: string, answer: string) => void;
  skipQuestion: (questionId: string) => void;
  resetDefaults: () => void;
  exportConfigJson: () => string;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

const STORAGE_KEY = 'noi_clinic_demo_data_v2';
const QUESTIONS_STORAGE_KEY = 'noi_clinic_questions_v2';

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ClinicData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Sanitize legacy /src/assets paths if found
        if (parsed.services) {
          parsed.services = parsed.services.map((s: ClinicService, idx: number) => {
            if (s.image && s.image.includes('/src/assets/images')) {
              return { ...s, image: initialClinicData.services[idx]?.image || '/images/services_stones.jpg' };
            }
            return s;
          });
        }
        return parsed;
      }
    } catch {
      // ignore
    }
    return initialClinicData;
  });

  const [questions, setQuestions] = useState<IntakeQuestion[]>(() => {
    try {
      const saved = localStorage.getItem(QUESTIONS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return defaultIntakeQuestions;
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [data]);

  useEffect(() => {
    try {
      localStorage.setItem(QUESTIONS_STORAGE_KEY, JSON.stringify(questions));
    } catch {
      // ignore
    }
  }, [questions]);

  // Find the first unanswered question
  const currentQuestionIndex = questions.findIndex(q => q.status === 'pending');
  const currentQuestion = currentQuestionIndex !== -1 ? questions[currentQuestionIndex] : null;

  const updateData = (updates: Partial<ClinicData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const updateService = (id: string, updates: Partial<ClinicService>) => {
    setData(prev => ({
      ...prev,
      services: prev.services.map(s => (s.id === id ? { ...s, ...updates } : s))
    }));
  };

  const updateLocation = (index: number, updates: Partial<ClinicLocation>) => {
    setData(prev => {
      const newLocs = [...prev.locations];
      if (newLocs[index]) {
        newLocs[index] = { ...newLocs[index], ...updates };
      }
      return { ...prev, locations: newLocs };
    });
  };

  const answerQuestion = (questionId: string, answer: string) => {
    setQuestions(prev =>
      prev.map(q => (q.id === questionId ? { ...q, currentValue: answer, status: 'answered' } : q))
    );

    // Apply the answer to the relevant data field
    const q = questions.find(item => item.id === questionId);
    if (q) {
      if (q.field === 'heroHeadline') {
        updateData({ heroHeadline: answer });
      } else if (q.field === 'email') {
        updateData({ email: answer });
      } else if (q.field === 'openingHours') {
        updateData({ openingHours: answer });
      } else if (q.field === 'logoUrl') {
        updateData({ logoUrl: answer });
      } else if (q.field === 'locations') {
        // Simple heuristic parse if given text
        updateData({ customNotes: (data.customNotes || '') + `\nDirecciones: ${answer}` });
      }
    }
  };

  const skipQuestion = (questionId: string) => {
    setQuestions(prev =>
      prev.map(q => (q.id === questionId ? { ...q, status: 'skipped' } : q))
    );
  };

  const resetDefaults = () => {
    setData(initialClinicData);
    setQuestions(defaultIntakeQuestions);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(QUESTIONS_STORAGE_KEY);
  };

  const exportConfigJson = () => {
    return JSON.stringify(data, null, 2);
  };

  return (
    <ClinicContext.Provider
      value={{
        data,
        questions,
        currentQuestion,
        currentQuestionIndex,
        updateData,
        updateService,
        updateLocation,
        answerQuestion,
        skipQuestion,
        resetDefaults,
        exportConfigJson,
        isEditMode,
        setIsEditMode
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
};
