import { useEffect, useRef, useState } from 'react'

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        interValRef.current && window.clearInterval(interValRef.current)
    }
    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])

    const startTimer = () => {
        interValRef.current = window.setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
    }

    const resetTimer = () => {
        setTimer(0);
        stopTimer()
    }
    return (
        <div>
            HookTimer - {timer} -
            <button onClick={() => stopTimer()}>Stop Timer</button>
            <button onClick={() => startTimer()}>start Timer</button>
            <button onClick={() => resetTimer()}>Reset Timer</button>
        </div>
    )
}