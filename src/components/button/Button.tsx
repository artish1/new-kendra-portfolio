import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

export interface ButtonProps {
  to: string;
}

const Button: React.FC<ButtonProps> = ({ to, children }) => {
  return (
    <Link className={styles.btn} to={to}>
      {children}
    </Link>
  );
};

export default Button;
