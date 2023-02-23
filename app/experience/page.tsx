import { Suspense } from "react";
import { Title, Workplace } from "../components";
import { Workplace as WorkplaceType } from "../interfaces";
import styles from "./Experience.module.scss";

const ExperiencePage = async () => {
  const data = await getWorkplaces();

  const compare = (a: WorkplaceType, b: WorkplaceType) => {
    return new Date(b.from).getTime() - new Date(a.from).getTime();
  };

  return (
    <div className={styles.container}>
      <Title className={styles.title} title="Experience" />
      <div className={styles.work}>
        <Suspense fallback={<div>Loading...</div>}>
          {data.sort(compare).map((workplace, index) => (
            <Workplace
              className={
                index % 2 === 0
                  ? styles["workplace_right"]
                  : styles["workplace_left"]
              }
              key={`${workplace}${index}`}
              side={index % 2 === 0 ? "right" : "left"}
              {...workplace}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

const getWorkplaces = async (): Promise<WorkplaceType[]> => {
  const res = await fetch("http://localhost:3000/api/experience");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default ExperiencePage;
