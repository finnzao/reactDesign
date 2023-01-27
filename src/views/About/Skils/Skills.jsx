import ItemToggle from "../../../components/layout/ItemToggle/ItemToogle.jsx"
import styles from "./Skills.module.css"
function Skills() {
    return (
        <>
            <div className={styles.skills}>
                <ItemToggle title="Certificado" text="CURSO WEB MORDENO (COD3R)" />
                <ItemToggle title="Experiêcia" text="Freelancer" />
            </div>
        </>

    )

}

export default Skills