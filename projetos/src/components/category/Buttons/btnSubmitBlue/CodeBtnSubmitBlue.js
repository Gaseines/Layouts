import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeBtnSubmitBlue({ estado }) {


    return (
        <>
            {(estado === 'htmlSubmitBlue' || estado === 'html') && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretRight /></span>
                        <span className={styles.a}>{`<button>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span style={{ marginLeft: "30px" }} className={styles.a}>{`<span `}<span className={styles.aa}>class</span> = <span className={styles.v}>"circle1"</span>{`>`}</span><span className={styles.a}>{`</span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span style={{ marginLeft: "30px" }} className={styles.a}>{`<span `}<span className={styles.aa}>class</span> = <span className={styles.v}>"circle2"</span>{`>`}</span><span className={styles.a}>{`</span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span style={{ marginLeft: "30px" }} className={styles.a}>{`<span `}<span className={styles.aa}>class</span> = <span className={styles.v}>"circle3"</span>{`>`}</span><span className={styles.a}>{`</span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span style={{ marginLeft: "30px" }} className={styles.a}>{`<span `}<span className={styles.aa}>class</span> = <span className={styles.v}>"circle4"</span>{`>`}</span><span className={styles.a}>{`</span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span style={{ marginLeft: "30px" }} className={styles.a}>{`<span `}<span className={styles.aa}>class</span> = <span className={styles.v}>"circle5"</span>{`>`}</span><span className={styles.a}>{`</span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        <span style={{ marginLeft: "30px" }} className={styles.a}>{`<span `}<span className={styles.aa}>class</span> = <span className={styles.v}>"text"</span>{`>`}</span>Submit<span className={styles.a}>{`</span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>8</span>
                        <span className={styles.a}>{`</button>`}</span>
                    </p>
                </div>


            )}{estado === 'cssSubmitBlue' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretDown /></span>
                        <span className={styles.a}>button</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span className={styles.c}>font-family</span>: <span className={styles.aa}>Arial, Helvetica, sans-serif</span>;
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span className={styles.c}>font-weight</span>: <span className={styles.aa}>bold</span>;
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span className={styles.c}>color</span>: <span className={styles.aa}>white</span>;
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span className={styles.c}>background-color</span>: <span className={styles.l}>#171717</span>;
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span className={styles.c}>padding</span>: <span className={styles.l}>1em 2em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        <span className={styles.c}>border</span>: <span className={styles.aa}>none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>8</span>
                        <span className={styles.c}>border-radius</span>: <span className={styles.l}>.6rem</span>;
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span className={styles.c}>position</span>: <span className={styles.aa}>relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span className={styles.c}>cursor</span>: <span className={styles.aa}>pointer</span>;
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span className={styles.c}>overflow</span>: <span className={styles.aa}>hidden</span>;
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>13 <BiCaretDown /></span>
                        <span className={styles.a}>button span:not(:nth-child(6))</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>14</span>
                        <span className={styles.c}>position</span>: <span className={styles.aa}>absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span className={styles.c}>left</span>: <span className={styles.l}>50%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span className={styles.c}>top</span>: <span className={styles.l}>50%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        <span className={styles.c}>transform</span>: <span className={styles.l}>translate(-50%, -50%)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        <span className={styles.c}>height</span>: <span className={styles.l}>30px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>19</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>30px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span className={styles.c}>background-color</span>: <span className={styles.l}>#0c66ed</span>;
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        <span className={styles.c}>border-radius</span>: <span className={styles.l}>50%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>22</span>
                        <span className={styles.c}>transition</span>: <span className={styles.l}>.6s ease</span>;
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>24 <BiCaretDown /></span>
                        <span className={styles.a}>button span:nth-child(6)</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>25</span>
                        <span className={styles.c}>position</span>: <span className={styles.aa}>relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>27 <BiCaretDown /></span>
                        <span className={styles.a}>button span:nth-child(1)</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span className={styles.c}>transform</span>: <span className={styles.l}>translate(-3.3em, -4em)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>30 <BiCaretDown /></span>
                        <span className={styles.a}>button span:nth-child(2)</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>31</span>
                        <span className={styles.c}>transform</span>: <span className={styles.l}>translate(-6em, 1.3em)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>32</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>33 <BiCaretDown /></span>
                        <span className={styles.a}>button span:nth-child(3)</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>34</span>
                        <span className={styles.c}>transform</span>: <span className={styles.l}>translate(-.2em, 1.8em)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>35</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>36 <BiCaretDown /></span>
                        <span className={styles.a}>button span:nth-child(4)</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>37</span>
                        <span className={styles.c}>transform</span>: <span className={styles.l}>translate(3.5em, 1.4em)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>38</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>39 <BiCaretDown /></span>
                        <span className={styles.a}>button span:nth-child(5)</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>40</span>
                        <span className={styles.c}>transform</span>: <span className={styles.l}>translate(3.5em, -3.8em)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>41</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>42 <BiCaretDown /></span>
                        <span className={styles.a}>button:hover span:not(:nth-child(6))</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>43</span>
                        <span className={styles.c}>transform</span>: <span className={styles.l}>translate(-50%, -50%) scale(4)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>44</span>
                        <span className={styles.c}>transition</span>: <span className={styles.l}>1.5s ease</span>;
                    </p>
                    <p>
                        <span className={styles.number}>45</span>
                        {`}`}
                    </p>
                </div>




            )}{estado === 'jsSubmitBlue' && (
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

export default CodeBtnSubmitBlue