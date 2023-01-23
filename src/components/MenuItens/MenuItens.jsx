import React from "react";
import styles from "./MenuItens.module.css"
function contactAuthor() {
    return (
        <div className={styles.contactAuthor}>
            <div className={styles.itemContact}><a href="./"></a>HOME</div>
            <div className={styles.itemContact}><a href="./"></a>ORÇAMENTO</div>
            <div className={styles.itemContact}><a href="./"></a>REDES</div>
        </div>
    )
}

export default contactAuthor;