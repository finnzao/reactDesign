
import TitleLarge from "../../../components/TextEdit/TitleLarge/TitleLarge";
import styles from "./TitleHead.module.css";
import TextSmall from "../../../components/TextEdit/TextSmall/TextSmall";
const TitleHead = () => {
    return (
        <>
            <div className={styles.box}>
                <TitleLarge text="Sobre mim" />
                <TextSmall text="Habilidades e certificados" />
            </div>
        </>
    );
};

export default TitleHead;