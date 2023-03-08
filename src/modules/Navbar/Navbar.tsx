import { NavLink } from 'react-router-dom';

import { navElements } from './nav-elements';

const Navbar = () => {
  const elements = navElements.map(
    ({ id, to, title }: { id: string | number; to: string; title: string }) => (
      <li key={id}>
        <NavLink to={to}>{title}</NavLink>
      </li>
    ),
  );

  return (
    <nav>
      <ul>{elements}</ul>
    </nav>
  );
};

export default Navbar;
