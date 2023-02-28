import React, { ReactElement } from "react";
import Image from "next/image";
import { Title } from "../components";
import { aboutImages } from "../constants";
import styles from "./About.module.scss";
import classNames from "classnames";

const AboutPage = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Title title="About me..." />
      <div className={styles.content}>
        <div className={styles.coding}>
          <p className={styles.text}>
            I put the <b>About page</b> on last in the navigation, because lot
            of visitors are going to see me as a boring person. Beside coding,
            which is a big part of my everyday life,
          </p>
          <div className={styles.images}>
            {aboutImages["coding"].map(({ alt, src }, index) => (
              <Image
                key={alt}
                className={classNames(
                  styles.image,
                  styles[`image${index + 1}`]
                )}
                alt={alt}
                src={src}
                width={300}
                height={300}
              />
            ))}
          </div>
        </div>
        <div className={styles.environment}>
          <p className={styles.text}>
            I'm environmentalist... I know you think it is a cliché, today
            everyone is an environmentalist, but I actually selectively collect
            wate, I plant trees and I'm a regular donor to Greenpeace.
          </p>
          <div className={styles.images}>
            {aboutImages["environment"].map(({ alt, src }, index) => (
              <Image
                key={alt}
                className={classNames(
                  styles.image,
                  styles[`image${index + 1}`]
                )}
                alt={alt}
                src={src}
                width={300}
                height={300}
              />
            ))}
          </div>
        </div>
        <div className={styles.woodworking}>
          <p className={styles.text}>I like woodworking,</p>
          <div className={styles.images}>
            {aboutImages["woodworking"].map(({ alt, src }, index) => (
              <Image
                key={alt}
                className={classNames(
                  styles.image,
                  styles[`image${index + 1}`]
                )}
                alt={alt}
                src={src}
                width={300}
                height={300}
              />
            ))}
          </div>
        </div>
        <div className={styles.reading}>
          <p className={styles.text}>
            and when the sun goes down I like to read before I go to bed.
          </p>
          <div className={styles.images}>
            {aboutImages["reading"].map(({ alt, src }, index) => (
              <Image
                key={alt}
                className={classNames(
                  styles.image,
                  styles[`image${index + 1}`]
                )}
                alt={alt}
                src={src}
                width={300}
                height={300}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
