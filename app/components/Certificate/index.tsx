import Image from "next/image";
import React, { FunctionComponent } from "react";
import styles from "./Certificate.module.scss";

export const Certificate: FunctionComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Degree certificate</h1>
        <Image
          className={styles.logo}
          alt="The University of Szeged is one of Hungary's leading and internationally ranked higher education institutions."
          src="/university_of_szeged_logo_big.png"
          width={100}
          height={100}
        ></Image>
        <p>It is hereby certified that</p>
        <h2>Attila Gyömbér</h2>
        <p>
          (born Attila Gyömbér, on 12 March 1995 in Senta, Yugoslavia) having
          completed an approved bachelor's degree programme and fulfilled the
          academic requirements of the <b>University of Szeged</b> was duly
          admitted to the <b>Bachelor's Degree</b> in
        </p>
        <h2>Computer Science</h2>
        <p>and has qualified as a</p>
        <h2>Computer Scientist</h2>
        <p>The duration of programme of study was 6 semesters.</p>
        <p>
          Grade of degree: <b>Good</b>.
        </p>
        <p>Szeged, 1 February 2020</p>
      </div>
      <p className={styles.explanation}>
        * just a raw copy of my official degree
      </p>
    </>
  );
};
