import { PreferredTechnologies, Title } from "@/app/components";
import { Technology } from "../interfaces";
import styles from "./Skills.module.scss";

const SkillsPage = async () => {
  const { text, technologies } = await getSkills();

  return (
    <div>
      <Title className={styles.pop_outin} title="Preferred skills" />
      <div className={styles.container}>
        <p className={styles.description}>{text || ""}</p>
        <div className={styles.tech_container}>
          <PreferredTechnologies technologies={technologies || []} />
        </div>
      </div>
    </div>
  );
};

const getSkills = async (): Promise<{
  text: string;
  technologies: Technology[];
}> => {
  const res = await fetch("http://localhost:3000/api/skills");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default SkillsPage;
