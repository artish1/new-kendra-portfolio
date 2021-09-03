import Button from "../../../components/button/Button";
import styles from "../HomePage.module.scss";
export interface CaseStudyProps {
  imgSrc: string;
  title: string;
  description: string;
  toRoute: string;

  marginBottom?: string;
  containerClassNames?: string;
}

const CaseStudy: React.FC<CaseStudyProps> = (props) => {
  const { description, imgSrc, title, toRoute, containerClassNames } = props;
  return (
    <div className={[styles.caseStudy, containerClassNames || ""].join(" ")}>
      <img src={imgSrc} alt={`${title} case study preview`} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>

        <Button to={toRoute}>Read more</Button>
      </div>
    </div>
  );
};

export default CaseStudy;
