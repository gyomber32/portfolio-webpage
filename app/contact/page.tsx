import { ContactItem, Title } from "@/app/components";
import React, { ReactElement } from "react";
import { contacts } from "@/app/constants";
import styles from "./Contact.module.scss";
import Image from "next/image";
import classNames from "classnames";

const ContactPage = (): ReactElement => {
  return (
    <div className={styles.container}>
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
            href="mailto: gyomberattila@gmail.com"
            iconSrc="/email_icon.svg"
          />
        </div>
      </div>
      You can download my CV, I'm updating it time to time. If you are a
      developer check out my Github page.
    </div>
  );
};

export default ContactPage;
