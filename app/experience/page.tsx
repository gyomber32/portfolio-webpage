import React, { ReactElement } from "react";
import { Title } from "../components";
import styles from "./Experience.module.scss";

const ExperiencePage = (): ReactElement => {
  return (
    <div>
      <Title className={styles.title} title="Experience" />
    </div>
  );
};

export default ExperiencePage;
