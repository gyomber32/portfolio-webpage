import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div></div>
      <div>
        <p>Attila Gyömbér © 2023</p>
      </div>
      <div>
        <small>Powered by &nbsp;</small>
        <Image
          className={styles.image}
          src="/next.svg"
          alt="Next.js Logo"
          width={100}
          height={20}
        />
      </div>
    </footer>
  );
};
