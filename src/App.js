import { createContext, useReducer } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassMouse from './components/ClassMouse';
import ClassTimer from './components/ClassTimer';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import Counter from './components/Counter';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';
import DataFetching from './components/DataFetching';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import FocusInput from './components/FocusInput';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import HookTimer from './components/HookTimer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import ParentComponent from './components/ParentComponent';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterPoNeZnamKojPat from './components/CounterPoNeZnamKojPat';
import CounterTwoPoNeZnamKojPat from './components/CounterTwoPoNeZnamKojPat';
import UserForm from './components/UserForm';

export const UserContext = createContext();
export const ChanelContext = createContext()

export const CountContext = createContext()

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

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

      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* <div>Count - {count}</div>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}

      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      
      {/* <ParentComponent /> */}

      {/* <Counter /> */}

      {/* <FocusInput /> */}

      {/* <ClassTimer />
      <HookTimer /> */}

      {/* <DocTitleOne />
      <DocTitleTwo /> */}

      {/* <CounterPoNeZnamKojPat />
      <CounterTwoPoNeZnamKojPat /> */}

      <UserForm />
    </div>
  );
}

export default App;
