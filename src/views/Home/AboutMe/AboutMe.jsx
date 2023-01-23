import React from "react";
import TitleMedium from "../../../components/TextEdit/TitleMedium/TitleMedium";
import TextMedium from "../../../components/TextEdit/TextMedium/TextMedium";
import styles from "./AboutMe.module.css"
function AboutMe() {
    return (
        <section className={styles.aboutMe}>
            <div className={styles.aboutMeBox}>
                <TitleMedium text="Sobre"></TitleMedium>
                <TextMedium text="Deis de 2016 no ramo de revistas ,e sempre com os melhores feedbacks. Especialistas em projetos completos de revistas , ganhando o posto de melhor distribuidora do Cetro-Oeste"></TextMedium>
            </div>
        </section>
    )
}

export default AboutMe;