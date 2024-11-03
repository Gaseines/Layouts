import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeCheckFlip({ estado }) {
    return (
        <>
            {(estado === 'htmlCheckFlip' || estado === 'html')  && (

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
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"checkmark"</span> <span className={styles.a}>{`></div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span className={styles.a}>{`</label>`}</span>
                    </p>
                </div>



            )}{estado === 'cssCheckFlip' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>8 <BiCaretDown /></span>
                        <span className={styles.a}>.container input</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span className={styles.c}>opacity</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span className={styles.c}>cursor</span>:
                        <span className={styles.aa}> pointer</span>;
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>14</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>15 <BiCaretDown /></span>
                        <span className={styles.a}>.container</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        <span className={styles.c}>cursor</span>:
                        <span className={styles.aa}> pointer</span>;
                    </p>
                    <p>
                        <span className={styles.number}>19</span>
                        <span className={styles.c}>font-size</span>:
                        <span className={styles.l}> 20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span className={styles.c}>user-select</span>:
                        <span className={styles.aa}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>22 <BiCaretDown /></span>
                        <span className={styles.a}>.checkmark</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>24</span>
                        <span className={styles.c}>top</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>25</span>
                        <span className={styles.c}>left</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 2.3em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>27</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 2.3em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span className={styles.c}>background-color</span>:
                        <span className={styles.l}> #ccc</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        <span className={styles.c}>border-radius</span>:
                        <span className={styles.l}> 50%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>30</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> .4s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>31</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>32 <BiCaretDown /></span>
                        <span className={styles.a}>.checkmark:hover</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>33</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> inset 17px 17px 16px #b3b3b3, inset -17px -17px 16px #ffffff</span>;
                    </p>
                    <p>
                        <span className={styles.number}>34</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>35 <BiCaretDown /></span>
                        <span className={styles.a}>.container input:checked ~ .checkmark</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>36</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.aa}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>37</span>
                        <span className={styles.c}>background-color</span>:
                        <span className={styles.l}> purple</span>;
                    </p>
                    <p>
                        <span className={styles.number}>38</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.l}> rotateX(360deg)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>39</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>40 <BiCaretDown /></span>
                        <span className={styles.a}>.container input:checked ~ .checkmark:hover</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>41</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> 3px 3px 3px rgba(0,0,0,0.2)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>42</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>43 <BiCaretDown /></span>
                        <span className={styles.a}>.checkmark:after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>44</span>
                        <span className={styles.c}>content</span>:
                        <span className={styles.aa}> ""</span>;
                    </p>
                    <p>
                        <span className={styles.number}>45</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>46</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>47</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>48 <BiCaretDown /></span>
                        <span className={styles.a}>.container input:checked ~ .checkmark:after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>49</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>50</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>51 <BiCaretDown /></span>
                        <span className={styles.a}>.container .checkmark:after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>52</span>
                        <span className={styles.c}>left</span>:
                        <span className={styles.l}> 0.96em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>53</span>
                        <span className={styles.c}>top</span>:
                        <span className={styles.l}> 0.7em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>54</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 0.25em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>55</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 0.5em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>56</span>
                        <span className={styles.c}>border</span>:
                        <span className={styles.l}> solid white</span>;
                    </p>
                    <p>
                        <span className={styles.number}>57</span>
                        <span className={styles.c}>border-width</span>:
                        <span className={styles.l}> 0 0.15em 0.15em 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>58</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> 0.1em 0.1em 0em 0 rgba(0,0,0,0.3)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>59</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.l}> rotate(45deg)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>60</span>
                        {`}`}
                    </p>
                </div>




            )}{estado === 'jsCheckFlip' && (
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

export default CodeCheckFlip