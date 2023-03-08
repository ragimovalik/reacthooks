import { NavLink } from 'react-router-dom';

import { navElements } from './nav-elements';

import s from './Navbar.module.css';

const Navbar = () => {
  const elements = navElements.map(
    ({ id, to, title }: { id: string | number; to: string; title: string }) => (
      <li key={id}>
        <NavLink to={to}>{title}</NavLink>
      </li>
    ),
  );

  return (
    <nav className={s.nav_box}>
      <ul className={s.menu}>{elements}</ul>
    </nav>
  );
};

export default Navbar;
