import styles from './Container.module.css'

function ContainerButtons(props){
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default ContainerButtons