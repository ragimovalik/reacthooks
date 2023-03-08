import { useRef, useEffect, useState, ChangeEventHandler } from 'react';
import Layout from '../shared/Layout';

interface InitialValues {
  name: string;
  email: string;
  age?: number;
}

const initialValues: InitialValues = { name: '', email: '', age: 0 };

const UseRefPage = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [isShow, setIsShow] = useState(true);
  const [prevCount, setPrevCount] = useState(0);

  const countRef = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevCountRef = useRef<number>(0);

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setFormValues(prev => {
      return { ...prev, [e?.target?.name]: e?.target?.value };
    });
  };

  const focusOnClick = () => inputRef?.current?.focus();

  useEffect(() => {
    prevCountRef.current = prevCount;
  }, [prevCount]);

  return (
    <Layout>
      <h2 style={{ textAlign: 'center' }}>useRef Page</h2>
      <section>
        <h4>Use it as DOM element reference </h4>
        <div>
          <input
            ref={inputRef}
            onChange={handleChange}
            type='text'
            name='name'
            value={formValues.name}
          />
          <input
            onChange={handleChange}
            type='text'
            name='email'
            value={formValues.email}
          />
          <input
            onChange={handleChange}
            type='number'
            name='age'
            value={formValues.age}
          />
        </div>
        <button type='button' onClick={focusOnClick}>
          Focus on Name
        </button>

        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </section>
      <section>
        <h4>Can be used for saving value (render count) through renders</h4>

        {isShow ? (
          <p>
            <mark>Some text to show</mark>
          </p>
        ) : (
          <p>
            <mark style={{ backgroundColor: 'coral' }}>Nothing to show</mark>
          </p>
        )}
        <button
          type='button'
          onClick={() => {
            setIsShow(prev => !prev);
            setPrevCount(countRef.current);
            countRef.current++;
          }}
        >
          Click me
        </button>

        <pre>
          {JSON.stringify(`Render Count: ${countRef.current}`, null, 2)}
        </pre>
        <p>
          useRef not causes component to rerender. Instead useState does. So if
          you try to count render via useEffect and save this count in state
          you'll get infinite loop.{' '}
        </p>

        <hr />
        <h4>Other example for saving value through renders</h4>

        <p>
          Previous value - render count: <span>{prevCount}</span>{' '}
        </p>
      </section>
    </Layout>
  );
};

export default UseRefPage;
