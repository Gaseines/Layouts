import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeBtnFolha({ estado }) {


    return (
        <>
            {estado === 'htmlMenu1' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretRight /></span>
                        <span className={styles.a}>{`<button `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"btn"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span className={styles.a}>{`<span `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"icon"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span className={styles.a}>{`<svg `}<span className={styles.aa}>viewBox</span></span> = <span className={styles.v}>"0 0 175 80"</span> <span className={styles.aa}>width</span> = <span className={styles.v}>"40"</span> <span className={styles.aa}>height</span> = <span className={styles.v}>"40"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span className={styles.a}>{`<rect `}<span className={styles.aa}>width</span></span> = <span className={styles.v}>"80"</span> <span className={styles.aa}>height</span> = <span className={styles.v}>"15"</span> <span className={styles.aa}>fill</span> = <span className={styles.v}>"#f0f0f0"</span> <span className={styles.aa}>rx</span> = <span className={styles.v}>"10"</span> <span className={styles.a}>{`></rect>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span className={styles.a}>{`<rect `}<span className={styles.aa}>y</span></span> = <span className={styles.v}>"30"</span> <span className={styles.aa}>width</span> = <span className={styles.v}>"80"</span> <span className={styles.aa}>height</span> = <span className={styles.v}>"15"</span> <span className={styles.aa}>fill</span> = <span className={styles.v}>"#f0f0f0"</span> <span className={styles.aa}>rx</span> = <span className={styles.v}>"10"</span> <span className={styles.a}>{`></rect>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span className={styles.a}>{`<rect `}<span className={styles.aa}>y</span></span> = <span className={styles.v}>"60"</span> <span className={styles.aa}>width</span> = <span className={styles.v}>"80"</span> <span className={styles.aa}>height</span> = <span className={styles.v}>"15"</span> <span className={styles.aa}>fill</span> = <span className={styles.v}>"#f0f0f0"</span> <span className={styles.aa}>rx</span> = <span className={styles.v}>"10"</span> <span className={styles.a}>{`></rect>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        <span className={styles.a}>{`</svg>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>8</span>
                        <span className={styles.a}>{`</span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span className={styles.a}>{`<span `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"text"</span> <span className={styles.a}>{`>`}</span>MENU<span className={styles.a}>{`</span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span className={styles.a}>{`</button>`}</span>
                    </p>
                </div>

            )}{estado === 'cssMenu1' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>8 <BiCaretDown /></span>
                        <span className={styles.a}>.btn</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 150px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 50px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span className={styles.c}>border-radius</span>:
                        <span className={styles.l}> 5px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span className={styles.c}>border</span>:
                        <span className={styles.aa}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> all 0.5s ease-in-out</span>;
                    </p>
                    <p>
                        <span className={styles.number}>14</span>
                        <span className={styles.c}>font-size</span>:
                        <span className={styles.l}> 20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span className={styles.c}>font-family</span>:
                        <span className={styles.aa}> Verdana, Geneva, Tahoma, sans-serif</span>;
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span className={styles.c}>font-weight</span>:
                        <span className={styles.l}> 600</span>;
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> flex</span>;
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        <span className={styles.c}>align-items</span>:
                        <span className={styles.aa}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>19</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.l}> #040f16</span>;
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span className={styles.c}>color</span>:
                        <span className={styles.aa}> #f5f5f5</span>;
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>22 <BiCaretDown /></span>
                        <span className={styles.a}>.btn:hover</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> 0 0 20px 0px #2e2e2e3a</span>;
                    </p>
                    <p>
                        <span className={styles.number}>24</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>25 <BiCaretDown /></span>
                        <span className={styles.a}>.btn .icon</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>27</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 40px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 70px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> flex</span>;
                    </p>
                    <p>
                        <span className={styles.number}>30</span>
                        <span className={styles.c}>justify-content</span>:
                        <span className={styles.aa}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>31</span>
                        <span className={styles.c}>align-items</span>:
                        <span className={styles.aa}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>32</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> all 0.5s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>33</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>34 <BiCaretDown /></span>
                        <span className={styles.a}>.btn .text</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>35</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.l}> translateX(55px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>36</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>37 <BiCaretDown /></span>
                        <span className={styles.a}>.btn:hover .icon</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>38</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 175px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>39</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>40 <BiCaretDown /></span>
                        <span className={styles.a}>.btn:hover .text</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>41</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> all 0.5s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>42</span>
                        <span className={styles.c}>opacity</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>43</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>44 <BiCaretDown /></span>
                        <span className={styles.a}>.btn:focus</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>45</span>
                        <span className={styles.c}>outline</span>:
                        <span className={styles.aa}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>46</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>47 <BiCaretDown /></span>
                        <span className={styles.a}>.btn:active .icon</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>48</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.l}> scale(0.85)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>49</span>
                        {`}`}
                    </p>
                </div>



            )}{estado === 'jsMenu1' && (
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