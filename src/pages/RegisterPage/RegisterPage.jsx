import styles from './RegisterPage.module.scss';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';

const RegisterPage = () => {
  const usernameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmationInput = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (
      passwordInput.current.value === passwordConfirmationInput.current.value
    ) {
      dispatch(
        register({
          name: usernameInput.current.value,
          email: emailInput.current.value,
          password: passwordInput.current.value,
        })
      );
      // ev.target.reset();
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.registerForm}>
      <label className={styles.registerFormLabel}>
        Username
        <input
          ref={usernameInput}
          className={styles.registerFormInput}
          type="text"
          name="username"
        />
      </label>
      <label className={styles.registerFormLabel}>
        E-mail
        <input
          ref={emailInput}
          className={styles.registerFormInput}
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </label>
      <label className={styles.registerFormLabel}>
        Password
        <input
          ref={passwordInput}
          className={styles.registerFormInput}
          type="password"
          name="password"
        />
      </label>
      <label className={styles.registerFormLabel}>
        Confirm password
        <input
          ref={passwordConfirmationInput}
          className={styles.registerFormInput}
          type="password"
          name="confirm-password"
        />
      </label>
      <button type="submit" className={styles.registerFormButton}>
        Sign up
      </button>
    </form>
  );
};

export default RegisterPage;
