import { NavLink } from 'react-router-dom';

import { routes } from '../../routes';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.navBar}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.active : css.navLink
              }
              to={routes.HOME}
            >
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.active : css.navLink
              }
              to={routes.MOVIES}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
