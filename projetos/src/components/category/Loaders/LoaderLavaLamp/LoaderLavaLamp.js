import styles from './LoaderLavaLamp.module.css'

function LoaderLavaLamp() {
    return (
        <div className={styles.lava_lamp}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble1}></div>
            <div className={styles.bubble2}></div>
            <div className={styles.bubble3}></div>
        </div>
    )
}

export default LoaderLavaLamp