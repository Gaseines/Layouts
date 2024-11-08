import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

import styles from './Menu.module.css'
import { useEffect, useRef, useState } from 'react'

function Menu() {

    const btnMenuRef = useRef(null)
    const menuRef = useRef(null)
    const [menuActivated, setMenuActivated] = useState(true)

    const FMenu = () =>{
       setMenuActivated((prev) => !prev)
    }

    useEffect(() =>{
        if(menuRef.current){
            if(menuActivated && window.innerWidth < 900){
                menuRef.current.style.display = 'none'
                menuRef.current.style.opacity = 0
                menuRef.current.style.height = '0px'

                
            } else{
                menuRef.current.style.display = 'block'
                menuRef.current.style.opacity = 1
                menuRef.current.style.height = '100%'
            }
        }
        
    }, [menuActivated])

    return (
        <div className={styles.container_menu}>
            <nav className={styles.menu}>
                <button onClick={FMenu} className={styles.animated_button}>
                    <svg viewBox="0 0 24 24" className={styles.arr_2} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                    <span className={styles.text}>Menu</span>
                    <span className={styles.circle}></span>
                    <svg viewBox="0 0 24 24" className={styles.arr_1} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                </button>
                <div ref={menuRef} className={styles.container_itens}>
                    <ul >
                        <Link className={styles.item_menu} to={'/%btn%'}><li>Buttons</li></Link>
                        <Link className={styles.item_menu} to={'/%ch3ck_b0x%'}><li>CheckBoxes</li></Link>
                        <Link className={styles.item_menu} to={'/%toggl3_sw1tch35%'}><li>Toggle switches</li></Link>
                        <Link className={styles.item_menu} to={'/%c4rds%'}><li>Cards</li></Link>
                        <Link className={styles.item_menu} to={'/%l04d3r5%'}><li>Loaders</li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Menu