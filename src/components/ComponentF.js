// import React from 'react'
// import { UserContext, ChanelContext } from '../App'

// const ComponentF = () => {
//   return (
//     <div>
//         <UserContext.Consumer>
//             {
//                 user => {
//                     return (
//                         <ChanelContext.Consumer>
//                             {
//                                 chanel => {
//                                     return <div>User context value {user}, chanel context value {chanel}</div>
//                                 }
//                             }
//                         </ChanelContext.Consumer>
//                     )
//                 }
//             }
//         </UserContext.Consumer>
//     </div>
//   )
// }

// export default ComponentF

import React, { useContext } from 'react'
import { CountContext } from '../App'

const ComponentF = () => {
  const countContext = useContext(CountContext)

  return (
    <div>
      Component F - {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentF