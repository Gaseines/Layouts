import styles from './BtnMenu1.module.css'

function BtnMenu1() {
    return (
        <div>
            <button className={styles.btn}>
                <span className={styles.icon}>
                    <svg viewBox="0 0 175 80" width="40" height="40">
                        <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                        <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                        <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                    </svg>
                </span>
                <span className={styles.text}>MENU</span>
            </button>
        </div>
    )
}

export default BtnMenu1