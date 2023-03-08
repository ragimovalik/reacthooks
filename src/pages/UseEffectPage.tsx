import { useState, useEffect } from 'react';

import Layout from '../shared/Layout';

import s from './UseEffectPage.module.css';

const UseEffectPage = () => {
  const [resourceType, setResourceType] = useState('users');
  //   const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //       .then(response => response.json())
  //       .then(json => setItems(json));
  //   }, [resourceType]);

  return (
    <Layout>
      <h2>useEffect Page</h2>
      <section>
        <div className={s.buttons}>
          <button onClick={() => setResourceType('posts')} type='button'>
            Posts
          </button>
          <button onClick={() => setResourceType('users')} type='button'>
            Users
          </button>
          <button onClick={() => setResourceType('comments')} type='button'>
            Comments
          </button>
        </div>
        <p>{resourceType}</p>
        <hr />
        <div>
          <p>
            Window width: <span>{windowWidth}</span>
          </p>

          {/* <p>
            {items.slice(0, 10).map(item => {
              return <pre>{JSON.stringify(item)}</pre>;
            })}
          </p> */}
        </div>
      </section>
    </Layout>
  );
};

export default UseEffectPage;
