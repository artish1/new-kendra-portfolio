import vieMedImg from "../../images/Viemed-1.png";
import styles from "./HomePage.module.scss";

const casestudies = [
  {
    title: "Digitizing patient check-in for respiratory therapists",
    imgSrc: vieMedImg,
    description:
      "A feature to improve the efficiency of respiratory therapists by digitizing how they schedule and conduct check-ins with their patients.",
    toRoute: "/viemed",
    containerClassNames: styles.viemedCase,
  },
  {
    title: "American Sign Language learning platform",
    imgSrc: vieMedImg,
    description:
      "A Duolingo type experience for learning American Sign Language on a mobile device.",
    toRoute: "/signlingo",
    containerClassNames: styles.signCase,
  },
  {
    title: "Recycling efficiency program",
    imgSrc: vieMedImg,
    description:
      "A program that uses photo recognition software to identify recyclables.",
    toRoute: "/recycle",
  },
];

export default casestudies;
