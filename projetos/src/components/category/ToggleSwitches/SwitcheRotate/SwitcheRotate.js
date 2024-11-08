import styles from './SwitcheRotate.module.css'

function SwitcheRotate() {
    return (
        <label className={styles.switch}>
            <input type="checkbox" />
                <span className={styles.slider}></span>
        </label>
    )

}

export default SwitcheRotate