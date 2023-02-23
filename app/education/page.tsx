import { Certificate, Title } from "../components";
import styles from "./Education.module.scss";

const EducationPage = async () => {
  const { text } = await getEducation();
  return (
    <div className={styles.container}>
      <Title className={styles.title} title="Education" />
      <div className={styles.content}>
        <Certificate />
        <p className={styles.text}>{text || ""}</p>
      </div>
    </div>
  );
};

const getEducation = async (): Promise<any> => {
  const res = await fetch("http://localhost:3000/api/education");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default EducationPage;
