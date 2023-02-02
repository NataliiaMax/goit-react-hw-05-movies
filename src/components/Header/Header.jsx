import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from 'pages/Home/Home';

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
              className={({ isActive }) => isActive ? `${style.active}` : `${style.inActive}`}
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

HomePage.propTypes = {
  headerItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      state: PropTypes.bool.isRequired,
    })
  ),
};

export default Header;
