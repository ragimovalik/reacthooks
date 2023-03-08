import { useState, useEffect, useMemo, useCallback } from 'react';
import Layout from '../shared/Layout';

import s from './UseMemoPage.module.css';

const UseMemoPage = () => {
  // useMemo code
  const [number, setNumber] = useState<number>(0);
  const [dark, setDark] = useState<boolean>(false);

  // useCallback code
  const [cbNumber, setCbNumber] = useState<number>(1);
  const [cbDark, setCbDark] = useState<boolean>(false);

  // useMemo Handling Code
  // Memoization - Data cache example
  const doubleNumber = useMemo(() => {
    return slowfunction(number);
  }, [number]);

  // Memoization - Referential Equality example
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  useEffect(() => {
    console.log('Theme Changed - in useEffect');
  }, [themeStyles]);

  // useCallback Handling Code
  const getItems = useCallback(() => {
    return [cbNumber, cbNumber + 1, cbNumber + 2];
  }, [cbNumber]);

  const theme = {
    backgroundColor: cbDark ? 'gray' : 'white',
    color: cbDark ? 'white' : 'black',
  };

  return (
    <Layout>
      <h2 className={s.title}>useMemo & useCallback Page</h2>
      <section className={s.box}>
        <h4>useMemo:</h4>
        <div className={s.input_wrap}>
          <input
            type='number'
            value={number}
            onChange={e => setNumber(parseInt(e.target.value))}
          />
          <button type='button' onClick={() => setDark(prevDark => !prevDark)}>
            Change Theme
          </button>
        </div>
        <div className={s.data_screen} style={themeStyles}>
          {doubleNumber}
        </div>
      </section>
      <br />
      <section className={s.box} style={theme}>
        <h4>useCallback:</h4>

        <div className={s.input_wrap}>
          <input
            type='number'
            value={cbNumber}
            onChange={e => setCbNumber(parseInt(e.target.value))}
          />
          <button
            type='button'
            onClick={() => setCbDark(prevDark => !prevDark)}
          >
            Change Theme
          </button>
        </div>
        <List getItems={getItems} />
      </section>
    </Layout>
  );
};

function slowfunction(num: number) {
  console.log('Calling Slow Function');

  for (let i = 0; i <= 100000000; i++) {
    if (i === 100000000) console.log('Cycle is done');
  }

  let res = num * 2;

  return res;
}

function List({ getItems }: { getItems: () => number[] }) {
  const [items, setItems] = useState<number[] | []>([]);

  useEffect(() => {
    setItems(getItems());
    console.log('Updating Items');
  }, [getItems]);

  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default UseMemoPage;
