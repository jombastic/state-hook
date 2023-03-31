import { createContext } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassMouse from './components/ClassMouse';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

export const UserContext = createContext();
export const ChanelContext = createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter />  */}
      {/* <DataFetching />  */}

      {/* <UserContext.Provider value={'Slavcho'}>
        <ChanelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChanelContext.Provider>
      </UserContext.Provider> */}

      <CounterOne />
    </div>
  );
}

export default App;
