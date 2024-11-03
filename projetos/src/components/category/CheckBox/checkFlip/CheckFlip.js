import styles from './CheckFlip.module.css'

function CheckFlip() {
    return (
        <label className={styles.container}>
            <input type="checkbox"  />
                <div className={styles.checkmark}></div>
        </label>
    )
}

export default CheckFlip