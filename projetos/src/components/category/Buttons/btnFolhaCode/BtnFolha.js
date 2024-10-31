import Item from '../../Item'
import styles from './BtnFolha.module.css'

function BtnFolha(){
    return (
        <Item titulo={'Leaf Button'}>
            <button className={styles.btn}><b>Click!</b></button>
        </Item>
    )
}

export default BtnFolha