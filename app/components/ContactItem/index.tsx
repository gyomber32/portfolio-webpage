import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ContactItem.module.scss";
import { ContactItem as ContactItemType } from "@/app/interfaces";

export const ContactItem: FunctionComponent<ContactItemType> = ({
  name,
  href,
  iconSrc,
  alt,
  target,
  rel,
}) => {
  return (
    <Link className={styles.container} href={href} target={target} rel={rel}>
      <Image src={iconSrc} alt={alt || ""} width={50} height={50}></Image>
      <p className={styles.text}>{name || ""}</p>
    </Link>
  );
};
