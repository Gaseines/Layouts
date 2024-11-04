import styles from './SilverSwitche.module.css'

function SilverSwitche() {
    return (
        <div className={styles.toggle_border}>
            <input id="one" type="checkbox" />
                <label for="one">
                    <div className={styles.handle}></div>
                </label>
        </div>
    )
}

export default SilverSwitche