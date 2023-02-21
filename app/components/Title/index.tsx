import React, { FunctionComponent } from "react";
import styles from "./Title.module.scss";
import classNames from "classnames";

type Props = {
  title: string;
  className?: string;
};

export const Title: FunctionComponent<Props> = ({
  title,
  className,
}): JSX.Element | null => {
  return <h1 className={classNames(styles.title, className)}>{title}</h1>;
};
