import { useState, useEffect } from 'react'

export function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return currentDate
}
