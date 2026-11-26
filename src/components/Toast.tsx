import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

type ToastTone = "success" | "error"

type ToastItem = {
  id: number
  message: string
  tone: ToastTone
}

type ToastContextValue = (message: string, tone?: ToastTone) => void

const ToastContext = createContext<ToastContextValue>(() => {})

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const timeouts = useRef<number[]>([])

  const push = useCallback((message: string, tone: ToastTone = "success") => {
    const id = Date.now() + Math.random()
    setToasts((current) => [...current, { id, message, tone }])
    const timeout = window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id))
    }, 4200)
    timeouts.current.push(timeout)
  }, [])

  useEffect(() => {
    const pending = timeouts.current
    return () => {
      for (const timeout of pending) window.clearTimeout(timeout)
    }
  }, [])

  return (
    <ToastContext.Provider value={push}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 top-20 z-[70] flex flex-col items-center gap-2 px-4">
        {toasts.map((toast) => (
          <p
            key={toast.id}
            role="status"
            className={`pointer-events-auto max-w-md rounded-full px-4 py-2.5 text-center text-sm font-medium shadow-lg ${
              toast.tone === "error" ? "bg-red-800 text-white" : "bg-navy-900 text-white"
            }`}
          >
            {toast.message}
          </p>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
