import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const headerItems = [
  { to: '/', title: 'Home' },
  {
    to: '/movies',
    title: 'Movies(with open search)',
    state: { isSearchOpen: true },
  },
  {
    to: '/movies',
    title: 'Movies (without open search)',
    state: { isSearchOpen: false },
  },
];

const Header = () => {
  return (
    <nav className={style.nav}>
      <ul>
        {headerItems.map(({ title, to, state }) => (
          <li key={title}>
            <NavLink
              className={({ isActive }) => (isActive ? style.nav_active : null)}
              to={to}
              state={state}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
