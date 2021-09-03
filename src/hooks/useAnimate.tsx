import { useEffect, useState } from "react";

export type Timeline = string[];

const useAnimateTimeline = (timeline: Timeline) => {
  const [step, setStep] = useState(0);
  const [classNames, setClassNames] = useState("");

  useEffect(() => {
    const currentAnimations = timeline.slice(0, step + 1);

    const classes = currentAnimations.reduce((prev, curr) => {
      return `${prev} ${curr}`;
    }, "");

    setClassNames(classes.trim());
  }, [step, timeline]);

  const nextStep = () => {
    if (step <= timeline.length - 1) {
      setStep((currStep) => currStep + 1);
    }
  };

  return { classNames, nextStep };
};

export default useAnimateTimeline;
