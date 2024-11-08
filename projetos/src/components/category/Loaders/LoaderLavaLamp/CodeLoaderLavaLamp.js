import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeLoaderLavaLamp({ estado }) {
    return (
        <>
            {(estado === 'htmlLoaderLavaLamp' || estado === 'html') && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1</span>
                        <span className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"lava_lamp"</span>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"bubble"</span>{`></div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"bubble1"</span>{`></div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"bubble2"</span>{`></div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"bubble3"</span>{`></div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        {`</div>`}
                    </p>
                </div>




            )}{estado === 'cssLoaderLavaLamp' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretDown /></span>
                        <span className={styles.a}>@keyframes drop</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span className={styles.a}>0%</span> <span>{`{`}</span>
                        <span className={styles.c}>transform</span>: <span className={styles.aa}>translateY(0px)</span>;
                        <span>{`}`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span className={styles.a}>50%</span> <span>{`{`}</span>
                        <span className={styles.c}>transform</span>: <span className={styles.aa}>translateY(80px)</span>;
                        <span>{`}`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span className={styles.a}>100%</span> <span>{`{`}</span>
                        <span className={styles.c}>transform</span>: <span className={styles.aa}>translateY(0px)</span>;
                        <span>{`}`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>6</span>
                        <span className={styles.a}>.lava_lamp</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        <span className={styles.c}>position</span>: <span className={styles.aa}>relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>8</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>50px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span className={styles.c}>height</span>: <span className={styles.l}>100px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span className={styles.c}>background</span>: <span className={styles.l}>#000</span>;
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span className={styles.c}>border-radius</span>: <span className={styles.l}>25px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span className={styles.c}>overflow</span>: <span className={styles.aa}>hidden</span>;
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>14</span>
                        <span className={styles.a}>.bubble</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span className={styles.c}>position</span>: <span className={styles.aa}>absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span className={styles.c}>top</span>: <span className={styles.l}>0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        <span className={styles.c}>height</span>: <span className={styles.l}>20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>19</span>
                        <span className={styles.c}>background</span>: <span className={styles.aa}>linear-gradient(to bottom, #e64980, #ff8787)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span className={styles.c}>border-radius</span>: <span className={styles.l}>50%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        <span className={styles.c}>left</span>: <span className={styles.l}>15px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>22</span>
                        <span className={styles.c}>animation</span>: <span className={styles.l}>drop 5s ease-in-out infinite</span>;
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>24</span>
                        <span className={styles.a}>.bubble1</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>25</span>
                        <span className={styles.c}>position</span>: <span className={styles.aa}>absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        <span className={styles.c}>top</span>: <span className={styles.l}>0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>27</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span className={styles.c}>height</span>: <span className={styles.l}>20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        <span className={styles.c}>background</span>: <span className={styles.aa}>linear-gradient(to bottom, #82c91e, #3bc9db)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>30</span>
                        <span className={styles.c}>border-radius</span>: <span className={styles.l}>50%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>31</span>
                        <span className={styles.c}>left</span>: <span className={styles.l}>1px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>32</span>
                        <span className={styles.c}>animation</span>: <span className={styles.l}>drop 3s ease-in-out infinite</span>;
                    </p>
                    <p>
                        <span className={styles.number}>33</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>34</span>
                        <span className={styles.a}>.bubble2</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>35</span>
                        <span className={styles.c}>position</span>: <span className={styles.aa}>absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>36</span>
                        <span className={styles.c}>top</span>: <span className={styles.l}>0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>37</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>38</span>
                        <span className={styles.c}>height</span>: <span className={styles.l}>20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>39</span>
                        <span className={styles.c}>background</span>: <span className={styles.aa}>linear-gradient(to bottom, #7950f2, #f783ac)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>40</span>
                        <span className={styles.c}>border-radius</span>: <span className={styles.l}>50%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>41</span>
                        <span className={styles.c}>left</span>: <span className={styles.l}>30px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>42</span>
                        <span className={styles.c}>animation</span>: <span className={styles.l}>drop 4s ease-in-out infinite</span>;
                    </p>
                    <p>
                        <span className={styles.number}>43</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>44</span>
                        <span className={styles.a}>.bubble3</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>45</span>
                        <span className={styles.c}>position</span>: <span className={styles.aa}>absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>46</span>
                        <span className={styles.c}>top</span>: <span className={styles.l}>0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>47</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>48</span>
                        <span className={styles.c}>height</span>: <span className={styles.l}>20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>49</span>
                        <span className={styles.c}>background</span>: <span className={styles.aa}>linear-gradient(to bottom, #4481eb, #04befe)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>50</span>
                        <span className={styles.c}>border-radius</span>: <span className={styles.l}>50%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>51</span>
                        <span className={styles.c}>left</span>: <span className={styles.l}>20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>52</span>
                        <span className={styles.c}>animation</span>: <span className={styles.l}>drop 6s ease-in-out infinite</span>;
                    </p>
                    <p>
                        <span className={styles.number}>53</span>
                        {`}`}
                    </p>
                </div>



            )}{estado === 'jsLoaderLavaLamp' && (
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

export default CodeLoaderLavaLamp