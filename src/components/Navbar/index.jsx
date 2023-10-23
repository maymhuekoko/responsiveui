import React from "react";
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";
import Avatar from '@mui/material/Avatar';

import styles from "./Navbar.module.css";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <CgMonday />
      </span>
      
      <ul className={styles.navItems}>
        {navigationData.map((item, index) => (
          <li
            className={classNames([
              styles.navItem,
              currentRoute === item && styles.selectedNavItem,
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className={styles.actions}><Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /></button>
    </nav>
  );
};

export default Navbar;