import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeBtnFolha({ estado }) {


    return (
        <>
            {estado === 'htmlFolha' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretRight /></span>
                        <span className={styles.a}>{`<button `}<span className={styles.aa}>class</span>
                        </span> = 
                        <span className={styles.v}>"btn"</span> <span className={styles.a}>{`<b> `}</span> Click! 
                        <span className={styles.a}>{`</b> </button>`}</span> </p>
                </div>

            )}{estado === 'cssFolha' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretDown /></span>
                        <span className={styles.a}>body</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> flex</span>;
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span className={styles.c}>justify-content</span>:
                        <span className={styles.aa}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span className={styles.c}>align-itens</span>:
                        <span className={styles.aa}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 100vw</span>;
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span className={styles.c}>heigth</span>:
                        <span className={styles.l}> 100vh</span>;
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>8 <BiCaretDown /></span>
                        <span className={styles.a}>.btn</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span className={styles.c}>padding</span>:
                        <span className={styles.l}> 0.7em 1.2em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span className={styles.c}>font-size</span>:
                        <span className={styles.l}> 1.2em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span className={styles.c}>text-decoration</span>:
                        <span className={styles.aa}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.l}> red</span>;
                    </p>
                    <p>
                        <span className={styles.number}>14</span>
                        <span className={styles.c}>color</span>:
                        <span className={styles.aa}> white</span>;
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span className={styles.c}>border</span>:
                        <span className={styles.l}> 1px solid #0000004d</span>;
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span className={styles.c}>border-radius</span>:
                        <span className={styles.l}> 5px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> 0.5em 0.5em 0.5em #0000004d</span>;
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        <span className={styles.c}>cursor</span>:
                        <span className={styles.aa}> pointer</span>;
                    </p>
                    <p>
                        <span className={styles.number}>19</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> 0.2s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>21 <BiCaretDown /></span>
                        <span className={styles.a}>button::before</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>22</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        <span className={styles.c}>content</span>:
                        <span className={styles.aa}> ''</span>;
                    </p>
                    <p>
                        <span className={styles.number}>24</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>25</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        <span className={styles.c}>top</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>27</span>
                        <span className={styles.c}>left</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.l}> linear-gradient(135deg, #212121 0%, #212121 50%, #96041f 50%, red 60%)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        <span className={styles.c}>border-radius</span>:
                        <span className={styles.l}> 5px 0px 5px 0px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>30</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> 0.2em 0.2em 0.2em #0000004d</span>;
                    </p>
                    <p>
                        <span className={styles.number}>31</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> 0.3s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>32</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>33 <BiCaretDown /></span>
                        <span className={styles.a}>button:hover::before</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>34</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 25px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>35</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 25px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>36</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>37 <BiCaretDown /></span>
                        <span className={styles.a}>button:active</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>38</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> 0.2em 0.2em 0.2em #0000004d</span>;
                    </p>
                    <p>
                        <span className={styles.number}>39</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.l}> translate(5px, 5px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>40</span>
                        {`}`}
                    </p>
                </div>


            )}{estado === 'jsFolha' && (
                <div className={styles.mensagem}>
                    <h1>
                        Esse projeto não utiliza JavaScript
                    </h1>
                    <div className={styles.logo_js}>
                        <IoLogoJavascript size={50} />
                    </div>
                </div>
            )}
        </>
    )
}

export default CodeBtnFolha