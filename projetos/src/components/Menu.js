import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

import styles from './Menu.module.css'

function Menu(){
    return(
        <div className={styles.container_menu}>
            <nav className={styles.menu}>
                <ul>
                    <Link className={styles.item_menu} to={'/%btn%'}><li>Buttons</li></Link>
                    <li>Carousels</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu