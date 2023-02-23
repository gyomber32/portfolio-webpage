import classNames from "classnames";
import { Certificate, Title } from "../components";
import styles from "./Education.module.scss";

const EducationPage = async () => {
  return (
    <div className={styles.container}>
      <Title className={styles.title} title="Education" />
      <div className={styles.content}>
        <Certificate />
        <p className={styles.text}>
          Don't confuse schooling with education. Education hasn't been started
          at the university and it hasn't finished after it. I would say I never
          eat the whole technology pie at once, just to keep up the hunger for
          later. I try to develop myself continuously, day by day and I always
          try to convince my teammates to try out new technologies, which is
          hard and uncomfortable, but inside our comfort zone, without sweat,
          technology ain't gonna improve. It only improves if a lot of people
          work very hard to make it better.
        </p>
      </div>
    </div>
  );
};

export default EducationPage;
