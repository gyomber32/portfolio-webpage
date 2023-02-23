import { ContactItem, Title } from "@/app/components";
import React, { ReactElement } from "react";
import { contacts } from "@/app/constants";
import styles from "./Contact.module.scss";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

const ContactPage = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <Title className={styles.line_up} title="Contact" />
        <div className={styles.content_1}>
          <p className={styles.paragraph}>
            Get in touch with me via social media,
          </p>
          <ul className={styles.social_media}>
            {contacts.map((item) => (
              <div className={styles.grid_item} key={item.href}>
                <ContactItem {...item} />
              </div>
            ))}
          </ul>
        </div>
        <div className={classNames(styles.cont, styles.content_2)}>
          <p className={styles.paragraph}>send me a message through</p>
          <div className={styles.social_media}>
            <div className={styles.grid_item}>
              <ContactItem
                name="Skype"
                href="skype:gyomber32?chat"
                iconSrc="/skype_icon.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.content_3}>
          <p className={styles.paragraph}>or just drop me an email.</p>
          <div className={styles.email}>
            <div className={styles.bounce}>
              <p>Click here</p>
              <Image src="/right-arrow-red.svg" alt="" width={60} height={40} />
            </div>
            <ContactItem
              href="mailto:gyomberattila@gmail.com"
              iconSrc="/email_icon.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.code}>
        <div className={styles.code_1}>
          <p className={styles.paragraph}>If you are interested in coding,</p>
          <div className={styles.social_media}>
            <div className={styles.grid_item}>
              <ContactItem
                name="Github"
                href="https://github.com/gyomber32"
                iconSrc="/github_logo.svg"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </div>
        <div className={styles.code_2}>
          <p className={styles.paragraph}>or smiply download my CV.</p>
          <div className={styles.social_media}>
            <div className={styles.grid_item}>
              <Link
                className={styles.download}
                href="/CV_Attila_Gyomber.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Image
                  src="/pdf_download_logo.svg"
                  alt=""
                  width={30}
                  height={30}
                ></Image>
                <p>Download</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
