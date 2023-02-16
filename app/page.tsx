import Image from "next/image";
import styles from "./page.module.scss";

const technologies = [
  {
    name: "JavaScript",
    src: "/javascript.svg",
    alt: "",
    href: "",
  },
  {
    name: "TypeScript",
    src: "/typescript.svg",
    alt: "",
    href: "",
  },
  {
    name: "React",
    src: "/react.svg",
    alt: "",
    href: "",
  },
  {
    name: "NextJS",
    src: "/next.svg",
    alt: "",
    href: "",
  },
  {
    name: "Redux",
    src: "/redux.svg",
    alt: "",
    href: "",
  },
  {
    name: "NodeJS",
    src: "/nodejs.svg",
    alt: "",
    href: "",
  },
  {
    name: "Express",
    src: "/express.svg",
    alt: "",
    href: "",
  },
  {
    name: "MongoDB",
    src: "/mongodb.svg",
    alt: "",
    href: "",
  },
  {
    name: "PostgresSQL",
    src: "/postgresql.svg",
    alt: "",
    href: "",
  },
  {
    name: "GraphQL",
    src: "/graphql.svg",
    alt: "",
    href: "",
  },
];

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
        <div className={styles.title}>Preferred technologies</div>
        <div className={styles.technologies}>
          {technologies.map(({ name, src, alt, href }) => (
            <div key={name} className={styles.grid_item}>
              <Image
                className={styles.item}
                src={src}
                alt={alt}
                width={70}
                height={70}
              />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
