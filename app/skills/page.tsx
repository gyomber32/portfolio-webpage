"use client";
import React, { ReactElement, useEffect } from "react";
import { PreferredTechnologies } from "@/components";
import { useTypewriterEffect } from "../../hooks";
import styles from "./Skills.module.scss";

const SkillsPage = (): ReactElement => {
  const text =
    "When you have landed on my page, you could see the rotating JavaScript / TypeScript logo. Yes, they are my favorite languages and every framework, library or package which they were built around them. However, I was never afraid to jump into new technologies, especially if they are widely used or brand new and promising.";
  const typewriterEffect = useTypewriterEffect(text, "desc");

  useEffect(() => {
    typewriterEffect();
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Preferred skills</p>
      <p id="desc" className={styles.description}></p>
      <PreferredTechnologies />
    </div>
  );
};

export default SkillsPage;
