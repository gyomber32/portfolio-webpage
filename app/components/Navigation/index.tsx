"use client";

import { NavItem } from "@/app/interfaces";
import { Item } from "./Item";
import React, { FunctionComponent } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";

type Props = {
  navItems: NavItem[];
};

export const Navigation: FunctionComponent<Props> = ({ navItems }) => {
  const path = usePathname();

  return (
    <nav className={styles.container}>
      {navItems.map(({ href, title }) => (
        <Item key={href} isDisabled={path === href} title={title} href={href} />
      ))}
    </nav>
  );
};
