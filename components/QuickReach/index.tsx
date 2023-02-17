"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { ContactItem } from "../ContactItem";
import styles from "./QuickReach.module.scss";
import { quickReach } from "@/constants";

export const QuickReach = (): JSX.Element | null => {
  const path = usePathname();
  console.log(path);
  if (path === "/contact") {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        {quickReach.map((item) => (
          <ContactItem key={item.href} {...item} />
        ))}
      </div>
      <p className={styles.text}>Reach out to me!</p>
    </div>
  );
};
