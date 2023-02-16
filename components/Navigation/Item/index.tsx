import Link from "next/link";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./Item.module.scss";

type Props = {
  href: string;
  title: string;
  isDisabled: boolean;
};

export const Item: FunctionComponent<Props> = ({ href, title, isDisabled }) => {
  return (
    <div
      className={classNames(styles.container, `${isDisabled && styles.active}`)}
    >
      <Link href={href}>{title}</Link>
    </div>
  );
};
