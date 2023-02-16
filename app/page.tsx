import { PreferredTechnologies } from "@/components";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.personal}>
        <div style={{ color: "white" }}>
          <div className={styles.greeting}>
            Hi there,
            <br /> I'm Attila Gyömbér
          </div>
          <div className={styles.question}>
            Have you mentioned{" "}
            <div className={styles.image}>
              <div className={styles.flipper}>
                <Image
                  className={styles.javascript}
                  src="/javascript.svg"
                  alt="Attila_Gyomber_profile_picture"
                  width={40}
                  height={40}
                  priority
                />
                <Image
                  className={styles.typescript}
                  src="/typescript.svg"
                  alt="Attila_Gyomber_profile_picture"
                  width={40}
                  height={40}
                  priority
                />
              </div>
            </div>
            ?
          </div>
        </div>
        <Image
          style={{ borderRadius: "50%" }}
          src="/profile_picture.jpg"
          alt="Attila_Gyomber_profile_picture"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className={styles.tech_container}>
        <PreferredTechnologies />
      </div>
    </main>
  );
}
