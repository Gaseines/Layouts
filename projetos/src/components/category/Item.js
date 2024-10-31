import styles from './Item.module.css'

function Item({children, titulo}){
    return(
        <div className={styles.container_item}>
            <h1 className={styles.titulo}>{titulo}</h1>
            {children}
        </div>
    )
}

export default Item