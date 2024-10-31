import styles from './Home.module.css'

import logo from '../images/logo_pessoal.png'

function Home(){
    return(
        <div className={styles.main}>
            <img className={styles.logo} src={logo} alt="Logo GSN" />
            <div className={styles.container_txt}>
                <h1>Styles</h1>
                <h1>HTML CSS</h1>
            </div>
        </div>
    )
}

export default Home