import useAnimateTimeline from "../../../hooks/useAnimate";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const { classNames, nextStep } = useAnimateTimeline([
    styles.containerScaleDown,
    styles.containerMoveUp,
  ]);

  return (
    <div
      className={`${styles.container} ${classNames}`}
      onTransitionEnd={nextStep}>
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
