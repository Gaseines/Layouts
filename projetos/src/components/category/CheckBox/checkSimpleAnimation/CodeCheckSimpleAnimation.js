import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeCheckSimpleAnimation({ estado }) {
    return (
        <>
            {(estado === 'htmlCheckSimpleAnimation' || estado === 'html') && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretRight /></span>
                        <span className={styles.a}>{`<label `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"container"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<input `}<span className={styles.aa}>type</span></span> = <span className={styles.v}>"checkbox"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<svg `}<span className={styles.aa}>viewBox</span></span> = <span className={styles.v}>"0 0 64 64"</span> <span className={styles.aa}>height</span> = <span className={styles.v}>"2em"</span> <span className={styles.aa}>width</span> = <span className={styles.v}>"2em"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>{`<path `}<span className={styles.aa}>d</span></span> = <span className={styles.v}>"M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"</span> <span className={styles.aa}>pathLength</span> = <span className={styles.v}>"575.0541381835938"</span> <span className={styles.aa}>class</span> = <span className={styles.v}>"path"</span> <span className={styles.a}>{`></path>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`</svg>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span className={styles.a}>{`</label>`}</span>
                    </p>
                </div>




            )}{estado === 'cssCheckSimpleAnimation' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>8 <BiCaretDown /></span>
                        <span className={styles.a}>.container</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span className={styles.c}>cursor</span>:
                        <span className={styles.aa}> pointer</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>11 <BiCaretDown /></span>
                        <span className={styles.a}>.container input</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>14 <BiCaretDown /></span>
                        <span className={styles.a}>.container svg</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span className={styles.c}>overflow</span>:
                        <span className={styles.aa}> visible</span>;
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>17 <BiCaretDown /></span>
                        <span className={styles.a}>.path</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        <span className={styles.c}>fill</span>:
                        <span className={styles.aa}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>19</span>
                        <span className={styles.c}>stroke</span>:
                        <span className={styles.l}> black</span>;
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span className={styles.c}>stroke-width</span>:
                        <span className={styles.l}> 6</span>;
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        <span className={styles.c}>stroke-linecap</span>:
                        <span className={styles.l}> round</span>;
                    </p>
                    <p>
                        <span className={styles.number}>22</span>
                        <span className={styles.c}>stroke-linejoin</span>:
                        <span className={styles.l}> round</span>;
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease</span>;
                    </p>
                    <p>
                        <span className={styles.number}>24</span>
                        <span className={styles.c}>stroke-dasharray</span>:
                        <span className={styles.l}> 241 9999999</span>;
                    </p>
                    <p>
                        <span className={styles.number}>25</span>
                        <span className={styles.c}>stroke-dashoffset</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>27 <BiCaretDown /></span>
                        <span className={styles.a}>.container input:checked ~ svg .path</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span className={styles.c}>stroke-dasharray</span>:
                        <span className={styles.l}> 70.5096664428711 9999999</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        <span className={styles.c}>stroke-dashoffset</span>:
                        <span className={styles.l}> -262.2723388671875</span>;
                    </p>
                    <p>
                        <span className={styles.number}>30</span>
                        {`}`}
                    </p>
                </div>


            )}{estado === 'jsCheckSimpleAnimation' && (
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

export default CodeCheckSimpleAnimation