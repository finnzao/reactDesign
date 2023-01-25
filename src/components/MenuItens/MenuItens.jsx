import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuItens.module.css"
function contactAuthor() {
    return (
        <div className={styles.contactAuthor}>
            <div className={styles.itemContact}><Link to="./"></Link>HOME</div>
            <div className={styles.itemContact}><Link to="./"></Link>ORÇAMENTO</div>
            <div className={styles.itemContact}><Link to="./"></Link>REDES</div>
        </div >
    )
}

export default contactAuthor;