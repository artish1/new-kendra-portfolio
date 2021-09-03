import styles from "../HomePage.module.scss";

const Header: React.FC = () => {
  return (
    <div className={`${styles.container}`}>
      <h1 className={styles.title}>Hi, I'm Kendra.</h1>
      <p className={styles.subtitle}>
        I'm a UX/UI designer, sushi consumer and
        <br />
        consensual bird watcher.
      </p>
    </div>
  );
};

export default Header;
