import styles from './LoginPage.module.scss';
import { useRef } from 'react';

const LoginPage = () => {
  const emailRef = useRef();
  return (
    <form className={styles.loginForm}>
      <label className={styles.loginFormLabel}>
        E-mail
        <input
          ref={emailRef}
          className={styles.loginFormInput}
          type="text"
          name="email"
        />
      </label>
      <label className={styles.loginFormLabel}>
        Password
        <input
          className={styles.loginFormInput}
          type="password"
          name="password"
        />
      </label>
      <button
        type="submit"
        onClick={(ev) => {
          ev.preventDefault();
        
        }}
        className={styles.loginFormButton}
      >
        {' '}
        Log in
      </button>
    </form>
  );
};

export default LoginPage;
