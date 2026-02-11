import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import { FiCheckCircle, FiX } from 'react-icons/fi';

/** @type {React.Context<{showToast: (msg: string, duration?: number) => void}>} */
const ToastContext = createContext(null);

/**
 * Hook to show toast notifications.
 * @returns {{ showToast: (message: string, duration?: number) => void }}
 */
export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be inside ToastProvider');
  return ctx;
}

/**
 * Toast provider — wrap app with this.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, duration = 5000) => {
    setToast({ message, id: Date.now() });
    setTimeout(() => setToast(null), duration);
  }, []);

  const dismiss = useCallback(() => setToast(null), []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <ToastNotification message={toast.message} onDismiss={dismiss} key={toast.id} />}
    </ToastContext.Provider>
  );
}

function ToastNotification({ message, onDismiss }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-foreground text-white px-5 py-4 shadow-elevated',
        'transition-all duration-300',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      )}
    >
      <FiCheckCircle className="h-5 w-5 text-green-400 shrink-0" />
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onDismiss}
        className="ml-2 shrink-0 text-zinc-400 hover:text-white transition-colors"
        aria-label="Cerrar notificación"
      >
        <FiX className="h-4 w-4" />
      </button>
    </div>
  );
}
