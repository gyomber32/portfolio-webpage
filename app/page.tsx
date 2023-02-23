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
                  alt="JavaScript"
                  width={40}
                  height={40}
                  priority
                />
                <Image
                  className={styles.typescript}
                  src="/typescript.svg"
                  alt="TypeScript"
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
      <h1 className={styles.always}>
        <span>Always be</span>
        <div className={styles.message}>
          <div className={styles.word1}>thinking</div>
          <div className={styles.word2}>creating</div>
          <div className={styles.word3}>code</div>
        </div>
      </h1>
      {/* <h1 className={styles.quote}>
          <span>There</span>
          <span>are</span>
          <span>no</span>
          <span>limits</span>
          <span>to</span>
          <span>what</span>
          <span>you</span>
          <span>can</span>
          <span>accomplish,</span>
          <span>except</span>
          <span>the</span>
          <span>limits</span>
          <span>you</span>
          <span>place</span>
          <span>on</span>
          <span>your</span>
          <span>own</span>
          <span>thinking.</span>
        </h1> */}
    </main>
  );
}
