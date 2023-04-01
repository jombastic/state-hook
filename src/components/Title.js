import React, { memo } from 'react'

const Title = () => {
    console.log('Rendering Title')
    return (
        <h2>useCalbackHook</h2>
    )
}

export default memo(Title)