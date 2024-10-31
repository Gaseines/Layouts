import styles from './BtnVoltar.module.css'
import { MdKeyboardBackspace } from "react-icons/md";

function BtnVoltar({setTela}){
    return <button className={styles.voltar} onClick={() => setTela('Principal')}><MdKeyboardBackspace /> Back</button>
}

export default BtnVoltar