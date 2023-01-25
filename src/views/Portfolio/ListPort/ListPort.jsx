import ItemPortfolio from "../../../components/layout/ItemPortfolio/itemPortfolio";
import styles from "./ListPort.module.css";
function ListPort() {
    return (
        <div className={styles.listPort}>
            <ItemPortfolio title="CRUD NodeJS" img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" text="Projeito feito com a linguagem Js ,e gostei muito dele " />

            <ItemPortfolio text="AAAAA" />
            <ItemPortfolio text="AAAAA" />
        </div>
    )
}

export default ListPort;