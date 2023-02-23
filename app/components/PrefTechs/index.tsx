import React, { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./PrefTechs.module.scss";
import { Technology } from "@/app/interfaces";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  technologies: Technology[];
};

export const PreferredTechnologies: FunctionComponent<Props> = ({
  technologies,
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.technologies}>
        {technologies.map(({ name, src, alt, href }) => (
          <div key={name} className={styles.grid_item}>
            <Link className={styles.link} href={href}>
              <Image
                className={classNames(
                  (name === "Express" || name === "NextJS") && styles.image
                )}
                src={src}
                alt={alt}
                width={70}
                height={70}
              />
              <p className={styles.name}>{name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
