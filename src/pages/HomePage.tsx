import { Link } from 'react-router-dom';
import Layout from '../shared/Layout';

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <Layout>
      <h2 className={s.title}>Home Page</h2>
      <div>
        <Link to='usestate'>useState Hook</Link>
        <br />
        <Link to='useref'>useRef Hook</Link>
      </div>
    </Layout>
  );
};

export default HomePage;
