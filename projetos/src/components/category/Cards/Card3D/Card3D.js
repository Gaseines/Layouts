import styles from './Card3D.module.css'

function Card3D() {
    return (
        <div className={styles.parent}>
            <div className={styles.card}>
                <div className={styles.content_box}>
                    <span className={styles.card_title}>Cartão 3D</span>
                    <p className={styles.card_content}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <span className={styles.see_more}>Ver Mais</span>
                </div>
                <div className={styles.date_box}>
                    <span className={styles.month}>Novembro</span>
                    <span className={styles.date}>29</span>
                </div>
            </div>
        </div>
    )
}

export default Card3D