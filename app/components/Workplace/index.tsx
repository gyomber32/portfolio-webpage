import React, { FunctionComponent } from "react";
import Image from "next/image";
import { Workplace as WorkplaceType } from "@/app/interfaces";
import styles from "./Workplace.module.scss";
import classNames from "classnames";
import Link from "next/link";

type Props = WorkplaceType & {
  side: "left" | "right";
  className?: string;
};

export const Workplace: FunctionComponent<Props> = ({
  side,
  className,
  name,
  from,
  to,
  location,
  logo,
  website,
  projects,
}): JSX.Element => {
  return (
    <div
      className={classNames(
        styles.container,
        styles[`container_${side}`],
        className
      )}
    >
      <div className={classNames(styles.date, styles[`date_${side}`])}>
        <div className={styles.item}>{from}</div>
        <div> - </div>
        <div className={styles.item}>{to}</div>
      </div>
      <div className={classNames(styles.header, styles[`header_${side}`])}>
        <Link
          className={classNames(styles.link, styles[`link_${side}`])}
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classNames(styles.logo, styles[`logo_${side}`])}>
            {logo && <Image src={logo} alt="" width={60} height={40} />}
          </div>
          <div>
            <div className={classNames(styles.name, styles[`name_${side}`])}>
              {name}
            </div>
          </div>
        </Link>
      </div>
      <div className={classNames(styles.location, styles[`location_${side}`])}>
        {location}
      </div>
      {projects.map(({ description, role, technologies }, index) => (
        <ul
          key={`${description[0]}${index}`}
          className={classNames(styles.projects, styles[`projects_${side}`])}
        >
          <li className={classNames(styles.project, styles[`project_${side}`])}>
            <p className={styles.description}>
              <b>Project: </b>
              {description}
            </p>
            <div className={styles.role}>
              <b>Role:</b> {role}
            </div>
            <ul className={styles.technologies}>
              <p>
                <b>Technologies:</b>
              </p>
              {technologies.map((tech, index) => (
                <li key={`${tech[0]}${index}`} className={styles.tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
};
