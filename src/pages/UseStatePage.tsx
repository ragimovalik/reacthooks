import { useState } from 'react';

import Layout from '../shared/Layout';

import s from './UseStatePage.module.css';

function countInitial() {
  console.log('run function');
  return 4;
}

const UseStatePage = () => {
  const [count, setCount] = useState(() => countInitial()); // calling once.
  //  const [count, setCount] = useState(countInitial()); // calling everytime when component rerendered.

  const decrement = () => {
    return setCount(prev => prev - 1);
  };

  const increment = () => {
    return setCount(prev => prev + 1);
  };

  return (
    <Layout>
      <h2>useState Page</h2>
      <div className={s.flex}>
        <button type='button' onClick={decrement}>
          -
        </button>
        <span>{count}</span>
        <button type='button' onClick={increment}>
          +
        </button>
      </div>
      <hr />
    </Layout>
  );
};

export default UseStatePage;
