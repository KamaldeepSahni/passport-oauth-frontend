import React from 'react';
import googleImage from '../../assets/googleImage.png';
import githubImage from '../../assets/githubImage.png';
import facebookImage from '../../assets/facebookImage.png';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const googleLogin = () => {
    window.open(
      'https://o-auth-backend-0910.herokuapp.com/auth/google',
      '_self'
    );
  };

  const githubLogin = () => {
    window.open(
      'https://o-auth-backend-0910.herokuapp.com/auth/github',
      '_self'
    );
  };

  const facebookLogin = () => {
    window.open(
      'https://o-auth-backend-0910.herokuapp.com/auth/facebook',
      '_self'
    );
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <div className={styles.googleContainer} onClick={googleLogin}>
          <img src={googleImage} alt="Google Logo" />
          <p>Login with Google</p>
        </div>
        <div
          className={`${styles.googleContainer} ${styles.githubContainer}`}
          onClick={githubLogin}
        >
          <img src={githubImage} alt="Github Logo" />
          <p>Login with Github</p>
        </div>
        <div
          className={`${styles.googleContainer} ${styles.facebookContainer}`}
          onClick={facebookLogin}
        >
          <img src={facebookImage} alt="Facebook Logo" />
          <p>Login with Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
