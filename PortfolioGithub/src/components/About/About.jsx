import React from "react";

import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return (<section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}> 
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img className={styles.itemImage} src={getImageUrl("about/school.png")} alt="cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3>Education</h3>
                        <p>I graduated from KOÇ University Computer Engineering within the top 20% of my class</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img className={styles.itemImage} src={getImageUrl("about/smartphone-01.png")} alt="cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3>Mobile Development</h3>
                        <p>I'm a mobile developer with experience on Flutter and SwiftUI on multiple projects</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img  className={styles.itemImage}src={getImageUrl("about/dribbble.png")} alt="server" />
                    <div className={styles.aboutItemText}>
                        <h3>Game Development</h3>
                        <p>I enjoy creating fun casual/hyper-casual mobile games with Unity and C#</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img className={styles.itemImage} src={getImageUrl("about/calculate-2.png")} alt="cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>AI and Data Science</h3>
                        <p>I try to follow the latest andvancements on AI and experiment with python.</p>
                    </div>
                </li>
            </ul>
        </div>
        </section>);
}