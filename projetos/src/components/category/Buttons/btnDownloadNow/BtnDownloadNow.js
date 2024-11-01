import styles from './BtnDownloadNow.module.css'

function BtnDownloadNow() {
    return (
        <button className={styles.button}>
            <span className={styles.button_lg}>
                <span className={styles.button_sl}></span>
                <span className={styles.button_text}>Download Now</span>
            </span>
        </button>
    )
}

export default BtnDownloadNow