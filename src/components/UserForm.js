import React, { useState } from 'react'
import useInput from '../hooks/useInput'

const UserForm = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="first-name">First name</label>
                    <input 
                        id="first-name"
                        type="text" 
                        {...bindFirstName}  
                    />
                </div>
                <div>
                    <label htmlFor="last-name">Last name</label>
                    <input 
                        id="last-name"
                        type="text" 
                        {...bindLastName}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm