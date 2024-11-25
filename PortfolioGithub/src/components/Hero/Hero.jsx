import React from "react";

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title} >Hi, I'm Altay</h1>
            <p className={styles.description}>
                I'm a software developer with interests in mobile applications and games and more. You can reach me about any projects or job opportunities!
            </p>
            <a href="mailto:altaykrts@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me"  className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>;
}