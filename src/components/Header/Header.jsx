import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const headerItems = [
  { to: '/', title: 'Home' },
  {
    to: '/movies',
    title: 'Movies',
    state: { isSearchOpen: true },
  },
  ];

const Header = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        {headerItems.map(({ title, to, state }) => (
          <li key={title} className={style.navItem}>
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
