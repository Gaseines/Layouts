import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>&copy; <a href="https://gaseines.github.io/Portifolio" target='_blank'>Developer Gabriel Nunes</a>. Todos os direitos rezervados.</footer>
    )
}

export default Footer