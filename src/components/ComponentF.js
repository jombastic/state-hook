import React from 'react'
import { UserContext, ChanelContext } from '../App'

const ComponentF = () => {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChanelContext.Consumer>
                            {
                                chanel => {
                                    return <div>User context value {user}, chanel context value {chanel}</div>
                                }
                            }
                        </ChanelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF