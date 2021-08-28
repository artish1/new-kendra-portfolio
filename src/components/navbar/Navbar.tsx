import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h3>Kendra McKernan</h3>
      <ul className={styles.links}>
        <Link to="/resume">Resume</Link>
        <a href="https://www.google.com">Linkedin</a>
      </ul>
    </nav>
  );
};

export default Navbar;
