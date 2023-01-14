import { Link } from './Header.styled';
import styled from './Header.module.scss';

const Header = () => {
  return (
    <header className={styled.header}>
      <nav className={styled.headerNav}>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
