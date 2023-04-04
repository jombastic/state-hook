import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        // focust the input element
        inputRef.current.focus()
    }, [])
    

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default FocusInput