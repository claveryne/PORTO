"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3200);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastMessage && (
        <div 
          role="status"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-foreground text-background text-sm font-medium rounded-sm shadow-xl border border-accent/40 animate-in fade-in slide-in-from-bottom-3 duration-300 transition-all max-w-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="flex-1">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-background/60 hover:text-background transition-colors ml-2 text-xs uppercase tracking-wider"
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
