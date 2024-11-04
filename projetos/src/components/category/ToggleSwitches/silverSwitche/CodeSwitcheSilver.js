import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeSwitcheSilver({ estado }) {
    return (
        <>
            {(estado === 'htmlSwitcheSilver' || estado === 'html') && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretRight /></span>
                        <span className={styles.a}>{`<div `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"toggle-border"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<input `}<span className={styles.aa}>id</span></span> = <span className={styles.v}>"one"</span> <span className={styles.aa}>type</span> = <span className={styles.v}>"checkbox"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<label `}<span className={styles.aa}>for</span></span> = <span className={styles.v}>"one"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"handle"</span> <span className={styles.a}>{`></div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`</label>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span className={styles.a}>{`</div>`}</span>
                    </p>
                </div>

            )}{estado === 'cssSwitcheSilver' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>8 <BiCaretDown /></span>
                        <span className={styles.a}>.toggle-border</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span className={styles.c}>border</span>:
                        <span className={styles.aa}> 2px solid #f0ebeb</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span className={styles.c}>border-radius</span>:
                        <span className={styles.l}> 130px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span className={styles.c}>margin-bottom</span>:
                        <span className={styles.l}> 45px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span className={styles.c}>padding</span>:
                        <span className={styles.l}> 1px 2px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.l}> linear-gradient(to bottom right, white, rgba(220,220,220,.5)), white</span>;
                    </p>
                    <p>
                        <span className={styles.number}>14</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> 0 0 0 2px #fbfbfb</span>;
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span className={styles.c}>cursor</span>:
                        <span className={styles.aa}> pointer</span>;
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> flex</span>;
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        <span className={styles.c}>align-items</span>:
                        <span className={styles.aa}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>19 <BiCaretDown /></span>
                        <span className={styles.a}>.toggle-border:last-child</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span className={styles.c}>margin-bottom</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>22 <BiCaretDown /></span>
                        <span className={styles.a}>.toggle-border input[type="checkbox"]</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>24</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>25 <BiCaretDown /></span>
                        <span className={styles.a}>.toggle-border label</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>27</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> inline-block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 65px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>30</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.l}> #d13613</span>;
                    </p>
                    <p>
                        <span className={styles.number}>31</span>
                        <span className={styles.c}>border-radius</span>:
                        <span className={styles.l}> 80px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>32</span>
                        <span className={styles.c}>cursor</span>:
                        <span className={styles.aa}> pointer</span>;
                    </p>
                    <p>
                        <span className={styles.number}>33</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> inset 0 0 16px rgba(0,0,0,.3)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>34</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> background .5s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>35</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>36 <BiCaretDown /></span>
                        <span className={styles.a}>.toggle-border input[type="checkbox"]:checked + label</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>37</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.l}> #13d162</span>;
                    </p>
                    <p>
                        <span className={styles.number}>38</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>39 <BiCaretDown /></span>
                        <span className={styles.a}>.handle</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>40</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>41</span>
                        <span className={styles.c}>top</span>:
                        <span className={styles.l}> -8px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>42</span>
                        <span className={styles.c}>left</span>:
                        <span className={styles.l}> -10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>43</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 35px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>44</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 35px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>45</span>
                        <span className={styles.c}>border</span>:
                        <span className={styles.l}> 1px solid #e5e5e5</span>;
                    </p>
                    <p>
                        <span className={styles.number}>46</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.l}> repeating-radial-gradient(circle at 50% 50%, rgba(200,200,200,.2) 0%, rgba(200,200,200,.2) 2%, transparent 2%, transparent 3%, rgba(200,200,200,.2) 3%, transparent 3%), conic-gradient(white 0%, silver 10%, white 35%, silver 45%, white 60%, silver 70%, white 80%, silver 95%, white 100%)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>47</span>
                        <span className={styles.c}>border-radius</span>:
                        <span className={styles.l}> 50%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>48</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> 3px 5px 10px 0 rgba(0,0,0,.4)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>49</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> left .4s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>50</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>51 <BiCaretDown /></span>
                        <span className={styles.a}>.toggle-border input[type="checkbox"]:checked + label > .handle</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>52</span>
                        <span className={styles.c}>left</span>:
                        <span className={styles.l}> calc(100% - 35px + 10px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>53</span>
                        {`}`}
                    </p>
                </div>



            )}{estado === 'jsSwitcheSilver' && (
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

export default CodeSwitcheSilver