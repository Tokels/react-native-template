import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import ToastManager, { Toast } from 'toastify-react-native';

type Toast = {
  error: string;
  success: string;
};

export const toastInit: Toast = {
  error: '',
  success: '',
};

type ToastProps = {
  setToast: Dispatch<SetStateAction<Toast>>;
};

const ToastContext = createContext<Partial<ToastProps>>({});

export function useToast() {
  return useContext(ToastContext);
}

export const ToastProvider = ({ children }: { children: ReactElement }) => {
  const [toast, setToast] = useState(toastInit);

  useEffect(() => {
    try {
      if (toast.error) {
        Toast.error(toast.error, '');
      }
      if (toast.success) {
        Toast.success(toast.success, '');
      }
    } finally {
      setToast(toastInit);
    }
  }, [toast]);

  return (
    <ToastContext.Provider
      value={{
        setToast,
      }}
    >
      <ToastManager />
      {children}
    </ToastContext.Provider>
  );
};
