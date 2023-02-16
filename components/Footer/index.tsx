import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <small>Powered by &nbsp;</small>
      <Image
        className={styles.image}
        src="/next.svg"
        alt="Next.js Logo"
        width={100}
        height={20}
      />
    </footer>
  );
};
