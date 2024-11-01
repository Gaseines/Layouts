import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

import styles from './Menu.module.css'

function Menu() {
    return (
        <div className={styles.container_menu}>
            <nav className={styles.menu}>
                <button className={styles.animated_button}>
                    <svg viewBox="0 0 24 24" className={styles.arr_2} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                    <span className={styles.text}>Modern Button</span>
                    <span className={styles.circle}></span>
                    <svg viewBox="0 0 24 24" className={styles.arr_1} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                </button>
                <ul>
                    <Link className={styles.item_menu} to={'/%btn%'}><li>Buttons</li></Link>

                    <Link className={styles.item_menu} to={'/'}><li>CheckBoxes</li></Link>

                    <Link className={styles.item_menu} to={'/'}><li>Toggle switches</li></Link>

                    <Link className={styles.item_menu} to={'/'}><li>Cards</li></Link>

                    <Link className={styles.item_menu} to={'/'}><li>Loaders</li></Link>

                </ul>
            </nav>
        </div>
    )
}

export default Menu