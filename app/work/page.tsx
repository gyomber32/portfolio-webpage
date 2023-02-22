import { Suspense } from "react";
import { Title, Workplace } from "../components";
import { Workplace as WorkplaceType } from "../interfaces";
import styles from "./Work.module.scss";

const WorkPage = async () => {
  const data = await getWorkplaces();

  const compare = (a: WorkplaceType, b: WorkplaceType) => {
    return new Date(b.from).getTime() - new Date(a.from).getTime();
  };

  return (
    <div className={styles.container}>
      <Title title="Work" />
      <div className={styles.work}>
        <Suspense fallback={<div>Loading...</div>}>
          {data.sort(compare).map((workplace, index) => (
            <Workplace
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
  const res = await fetch("http://localhost:3000/api/work");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default WorkPage;
