import { Link } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'

import styles from './Code.module.css'

import Item from './Item'


function Code({ linkHtml, linkCss, linkJs, children }) {
    const clickRefHtml = useRef(null)
    const clickRefCss = useRef(null)
    const clickRefJs = useRef(null)
    const [clickHtml, setClickHtml] = useState(false)
    const [clickCss, setClickCss] = useState(false)
    const [clickJs, setClickJs] = useState(false)

    const [estado, setEstado] = useState('html')

    const handleClick = (event) => {
        if (event === 'html') {
            setClickHtml(true)
            setClickCss(false)
            setClickJs(false)


            setEstado(linkHtml)

        } if (event === 'css') {
            setClickHtml(false)
            setClickCss(true)
            setClickJs(false)


            setEstado(linkCss)

        } if (event === 'js') {
            setClickHtml(false)
            setClickCss(false)
            setClickJs(true)

            setEstado(linkJs)

        }
    }

    useEffect(() => {
        if (clickRefHtml.current) {
            clickRefHtml.current.addEventListener('click', () => handleClick('html'));
        }
        if (clickRefCss.current) {
            clickRefCss.current.addEventListener('click', () => handleClick('css'));
        }
        if (clickRefJs.current) {
            clickRefJs.current.addEventListener('click', () => handleClick('js'));
        }

        // Cleanup para remover os event listeners quando o componente for desmontado
        return () => {
            if (clickRefHtml.current) {
                clickRefHtml.current.removeEventListener('click', () => handleClick('html'));
            }
            if (clickRefCss.current) {
                clickRefCss.current.removeEventListener('click', () => handleClick('css'));
            }
            if (clickRefJs.current) {
                clickRefJs.current.removeEventListener('click', () => handleClick('js'));
            }
        };
    }, []);

    

    return (
        <Item >
            <div className={styles.container_code}>
                <div className={styles.header_code}>
                    <span className={`${styles.span1} ${styles.span}`}></span>
                    <span className={`${styles.span2} ${styles.span}`}></span>
                    <span className={`${styles.span3} ${styles.span}`}></span>
                </div>
                <div className={styles.code}>
                    <nav className={styles.menu_code}>
                        <ul>
                            <li ref={clickRefHtml} className={clickHtml ? styles.click : ''}>HTML</li>
                            <li ref={clickRefCss} className={clickCss ? styles.click : ''}>CSS</li>
                            <li ref={clickRefJs} className={clickJs ? styles.click : ''}>JS</li>
                        </ul>
                    </nav>
                    <div className={styles.escrita}>
                        {children && React.cloneElement(children, { estado })}
                    </div>
                </div>
            </div>
        </Item>
    )
}

export default Code