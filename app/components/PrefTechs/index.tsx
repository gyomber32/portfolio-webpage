import React from "react";
import Image from "next/image";
import { technologies } from "@/app/constants";
import styles from "./PrefTechs.module.scss";
import { Card } from "../Card";

export const PreferredTechnologies = (): JSX.Element => {
  return (
    <div className={styles.tech_container}>
      <div className={styles.technologies}>
        {technologies.map(({ name, src, alt, href }) => (
          <Card key={name}>
            <div className={styles.grid_item}>
              <Image
                className={styles.item}
                src={src}
                alt={alt}
                width={70}
                height={70}
              />
              <p>{name}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
