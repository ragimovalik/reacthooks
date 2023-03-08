import { ReactNode } from 'react';

import s from './Layout.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={s.container}> {children} </div>;
};

export default Layout;
