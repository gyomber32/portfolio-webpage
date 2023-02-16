import React, { FunctionComponent, PropsWithChildren } from "react";
import styles from "./Card.module.scss";

export const Card: FunctionComponent<PropsWithChildren> = ({children}) => {
  return <div className={styles.container}>{children}</div>;
};
