import { useReducer } from 'react';
import Loader from '../modules/Loader/Loader';
import Layout from '../shared/Layout';

import s from './UseReducerPage.module.css';

enum CountActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

interface CountAction {
  type: CountActionType;
  payload: number;
}

interface CountState {
  count: number;
}

function reducer(state: CountState, action: Partial<CountAction>) {
  const { type, payload = 1 } = action;

  switch (type) {
    case CountActionType.INCREMENT:
      return { count: state.count + payload };
    case CountActionType.DECREMENT:
      return { count: state.count - payload };
    default:
      return state;
  }
}

const UseReducerPage = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const decrement = () => {
    dispatch({ type: CountActionType.DECREMENT });
  };

  const increment = () => {
    dispatch({ type: CountActionType.INCREMENT });
  };

  return (
    <Layout>
      <h2>useReducer Page</h2>
      <div className={s.flex}>
        <button type='button' onClick={decrement}>
          -
        </button>
        <span>{state.count}</span>
        <button type='button' onClick={increment}>
          +
        </button>
      </div>
      <hr />
      <div>
        <h4>Loader and Error Handling Example</h4>
        <Loader />
      </div>
    </Layout>
  );
};

export default UseReducerPage;
