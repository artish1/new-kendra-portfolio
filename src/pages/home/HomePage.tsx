import * as React from "react";
import Header from "./header/Header";
import styles from "./HomePage.module.scss";
export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
    </div>
  );
};

export default HomePage;
