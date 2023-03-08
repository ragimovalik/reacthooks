import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UseContextPage from './pages/UseContextPage';
import UseEffectPage from './pages/UseEffectPage';
import UseMemoPage from './pages/UseMemoPage';
import UseReducerPage from './pages/UseReducerPage';
import UseRefPage from './pages/UseRefPage';
import UseStatePage from './pages/UseStatePage';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='useref' element={<UseRefPage />} />
        <Route path='usestate' element={<UseStatePage />} />
        <Route path='useeffect' element={<UseEffectPage />} />
        <Route path='usecontext' element={<UseContextPage />} />
        <Route path='usememo' element={<UseMemoPage />} />
        <Route path='usereducer' element={<UseReducerPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
