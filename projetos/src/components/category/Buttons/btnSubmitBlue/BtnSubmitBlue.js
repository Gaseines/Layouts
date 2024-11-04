import styles from './BtnSubmitBlue.module.css'

function BtnSubmitBlue() {
    return (
        <button className={styles.button}>
            <span className={styles.circle1}></span>
            <span className={styles.circle2}></span>
            <span className={styles.circle3}></span>
            <span className={styles.circle4}></span>
            <span className={styles.circle5}></span>
            <span className={styles.text}>Submit</span>
        </button>
    )
}

export default BtnSubmitBlue