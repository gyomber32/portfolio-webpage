import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ContactItem.module.scss";
import { ContactItem as ContactItemType } from "@/interfaces";

export const ContactItem: FunctionComponent<ContactItemType> = ({
  name,
  href,
  iconSrc,
  alt,
  target,
  rel,
}) => {
  return (
    <Link href={href} target={target} rel={rel} className={styles.container}>
      <Image src={iconSrc} alt={alt || ""} width={50} height={50}></Image>
      {name || ""}
    </Link>
  );
};
