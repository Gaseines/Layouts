import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeSwitcheRotate({ estado }) {
    return (
        <>
            {(estado === 'htmlSwitcheRotate' || estado === 'html') && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1</span>
                        <span className={styles.a}>{`<label `}<span className={styles.aa}>class</span> = <span className={styles.v}>"switch"</span> {`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<input `}<span className={styles.aa}>type</span> = <span className={styles.v}>"checkbox"</span> {`/>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<span `}<span className={styles.aa}>class</span> = <span className={styles.v}>"slider"</span> {`></span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span className={styles.a}>{`</label>`}</span>
                    </p>
                </div>




            )}{estado === 'cssSwitcheRotate' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1</span>
                        <span className={styles.a}>{`.switch `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>font-size</span>:
                        <span className={styles.aa}> 17px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>position</span>:
                        <span className={styles.aa}> relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>display</span>:
                        <span className={styles.aa}> inline-block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>width</span>:
                        <span className={styles.l}> 3.5em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>height</span>:
                        <span className={styles.l}> 2em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>8</span>
                        <span className={styles.a}>{`.switch input `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>opacity</span>:
                        <span className={styles.aa}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>width</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>height</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        <span className={styles.a}>{`.slider `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>14</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>position</span>:
                        <span className={styles.aa}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>cursor</span>:
                        <span className={styles.aa}> pointer</span>;
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>top</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>left</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>right</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>19</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>bottom</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>background-color</span>:
                        <span className={styles.l}> rgb(182, 182, 182)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>transition</span>:
                        <span className={styles.aa}> .4s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>22</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>border-radius</span>:
                        <span className={styles.l}> 10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>24</span>
                        <span className={styles.a}>{`.slider:before `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>25</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>position</span>:
                        <span className={styles.aa}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>content</span>:
                        <span className={styles.aa}> ""</span>;
                    </p>
                    <p>
                        <span className={styles.number}>27</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>height</span>:
                        <span className={styles.l}> 1.4em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>width</span>:
                        <span className={styles.l}> 1.4em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>border-radius</span>:
                        <span className={styles.l}> 8px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>30</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>left</span>:
                        <span className={styles.l}> 0.3em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>31</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>bottom</span>:
                        <span className={styles.l}> 0.3em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>32</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>transform</span>:
                        <span className={styles.aa}> rotate(270deg)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>33</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>background-color</span>:
                        <span className={styles.l}> rgb(255, 255, 255)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>34</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>transition</span>:
                        <span className={styles.aa}> .4s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>35</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>36</span>
                        <span className={styles.a}>{`.switch input:checked + .slider `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>37</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>background-color</span>:
                        <span className={styles.l}> #21cc4c</span>;
                    </p>
                    <p>
                        <span className={styles.number}>38</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>39</span>
                        <span className={styles.a}>{`.switch input:focus + .slider `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>40</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> 0 0 1px #2196F3</span>;
                    </p>
                    <p>
                        <span className={styles.number}>41</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>42</span>
                        <span className={styles.a}>{`.switch input:checked + .slider:before `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>43</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>transform</span>:
                        <span className={styles.aa}> translateX(1.5em)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>44</span>
                        {`}`}
                    </p>
                </div>



            )}{estado === 'jsSwitcheRotate' && (
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

export default CodeSwitcheRotate