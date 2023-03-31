import React, { useContext } from 'react'
import { ChanelContext, UserContext } from '../App'
import ComponentF from './ComponentF'

const ComponentE = () => {
  const user = useContext(UserContext)
  const chanel = useContext(ChanelContext)

  return (
    <div>
      {user} - {chanel}
    </div>
  )
}

export default ComponentE