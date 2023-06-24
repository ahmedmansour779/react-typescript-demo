import { useEffect, useRef } from 'react'

export const DomRef = () => {

    // ? You can change null! to null and you should change inputRef.current.focus() to inputRef.current?.focus()

    const inputRef = useRef<HTMLInputElement>(null!)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}