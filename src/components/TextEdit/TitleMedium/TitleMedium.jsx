import React from "react";
import styles from "./TitleMedium.module.css"
function titllelarge(props) {
    let text = props.text
    return (
        <div className={styles.title}><h2>{props.text}</h2></div>
    )
}

export default titllelarge;