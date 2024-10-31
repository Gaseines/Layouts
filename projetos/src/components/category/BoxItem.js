import styles from './BoxItem.module.css'
import { DiCode } from "react-icons/di";

function BoxItem({children, idRef, setActiveCode}){
    return(
        <div id={idRef} className={styles.container_BoxItem}>
            {children}
            <button className={styles.btn_box} onClick={() => setActiveCode(idRef)}><DiCode size={20} /> Get Code</button>
        </div>
    )
}

export default BoxItem