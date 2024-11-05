import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeTeste({ estado }) {


    return (
        <>
            {(estado === 'htmlFolha' || estado === 'html') && (
                <div className={styles.linha}>
                    
                </div>


            )}{estado === 'cssFolha' && (
                <div className={styles.linha}>
                    
                </div>

            )}{estado === 'jsFolha' && (
                <div className={styles.mensagem}>
                    <h1>
                        Esse projeto não utiliza JavaScript
                    </h1>
                    <div className={styles.logo_js}>
                        <IoLogoJavascript size={50} />
                    </div>
                </div>
            )}
        </>
    )
}

export default CodeTeste