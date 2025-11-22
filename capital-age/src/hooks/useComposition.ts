import { useEffect, useRef, useState } from "react"

/**
 * Hook to handle composition events for IME (Input Method Editor) input
 * Useful for handling Chinese, Japanese, Korean, and other languages that use composition
 */
export function useComposition() {
  const [isComposing, setIsComposing] = useState(false)
  const compositionRef = useRef(false)

  const onCompositionStart = () => {
    compositionRef.current = true
    setIsComposing(true)
  }

  const onCompositionEnd = () => {
    compositionRef.current = false
    setIsComposing(false)
  }

  return {
    isComposing,
    compositionProps: {
      onCompositionStart,
      onCompositionEnd,
    },
  }
}
