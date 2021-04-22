import React, { useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { myContext } from '../../Context';
import styles from './Navbar.module.css';

const Navbar = () => {
  const userObject = useContext(myContext);

  const logout = () => {
    axios
      .get('https://o-auth-backend-0910.herokuapp.com/auth/logout', {
        withCredentials: true,
      })
      .then(res => {
        if (res.data === 'done') {
          window.location.href = '/';
        }
      });
  };

  return (
    <div className={styles.navbarWrapper}>
      <ul className={styles.navbar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {userObject ? (
          <li onClick={logout}>Logout</li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
