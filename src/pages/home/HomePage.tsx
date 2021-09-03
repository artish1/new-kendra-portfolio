import { useLayoutEffect, useRef } from "react";
import Header from "./header/Header";
import styles from "./HomePage.module.scss";
import useAnimateTimeline from "../../hooks/useAnimate";
import CaseStudy from "./casestudy/CaseStudy";
import casestudies from "./casestudies";

const HomePage: React.FC = () => {
  const casesRef = useRef<HTMLDivElement | null>(null);
  const { classNames, nextStep } = useAnimateTimeline([
    styles.scaleDown,
    styles.moveUp,
  ]);

  const currentClass = classNames.split(" ").pop();

  useLayoutEffect(() => {
    const height = casesRef.current!.clientHeight + 600;
    if (casesRef.current) {
      const viemedCaseRef = casesRef.current
        .getElementsByClassName(styles.viemedCase)
        .item(0)!;
      const viemedImage = viemedCaseRef.getElementsByTagName("img").item(0)!;

      if (currentClass === styles.scaleDown) {
        casesRef.current.style.transform = `translateY(${height}px)`;
        viemedImage.style.transform = `translateY(-${
          height - 55
        }px) translateX(270px) scale(1.45)`;
        setTimeout(() => {
          viemedImage.classList.add(styles.transitionable);
          viemedImage.style.transform = `translateY(-${
            height + 70
          }px) translateX(270px) scale(1.45)`;
        }, 0);
      }

      if (currentClass === styles.moveUp) {
        casesRef.current.classList.add(styles.transitionable);
        casesRef.current.style.transform = `translateY(-300px)`;
        viemedImage.style.transform = `translateY(0) translateX(0) scale(1)`;
      }
    }
  }, [casesRef, currentClass]);

  return (
    <div
      className={[styles.pageContainer, classNames].join(" ")}
      onTransitionEnd={nextStep}>
      <Header />
      {/* <img className={styles.vieMed} src={vieMedImg} alt="Viemed preview" /> */}
      <div className={[styles.caseStudies].join(" ")} ref={casesRef}>
        {casestudies.map((cs, i) => (
          <CaseStudy {...cs} key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
