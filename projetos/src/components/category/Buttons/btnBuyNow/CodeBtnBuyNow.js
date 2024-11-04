import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeBtnBuyNow({ estado }) {
    return (
        <>
            {(estado === 'htmlBuyNow' || estado === 'html') && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretRight /></span>
                        <span className={styles.a}>{`<div `}<span className={styles.aa}>data-tooltip</span></span> = <span className={styles.v}>"Price:-$20"</span> <span className={styles.aa}>class</span> = <span className={styles.v}>"button"</span><span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"button-wrapper"</span><span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"text"</span><span className={styles.a}>{`>`}</span>Buy Now<span className={styles.a}>{`</div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>{`<span `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"icon"</span><span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>{`<svg `}<span className={styles.aa}>viewBox</span></span> = <span className={styles.v}>"0 0 16 16"</span> <span className={styles.aa}>class</span> = <span className={styles.v}>"bi bi-cart2"</span> <span className={styles.aa}>fill</span> = <span className={styles.v}>"currentColor"</span> <span className={styles.aa}>height</span> = <span className={styles.v}>"16"</span> <span className={styles.aa}>width</span> = <span className={styles.v}>"16"</span> <span className={styles.aa}>xmlns</span> = <span className={styles.v}>"http://www.w3.org/2000/svg"</span><span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span style={{ marginLeft: "105px" }} className={styles.a}>{`<path `}<span className={styles.aa}>d</span></span> = <span className={styles.v}>"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"</span><span className={styles.a}>{`></path>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>{`</svg>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>8</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>{`</span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`</div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span className={styles.a}>{`</div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span className={styles.a}>{`</div>`}</span>
                    </p>
                </div>


            )}{estado === 'cssBuyNow' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretDown /></span>
                        <span className={styles.a}>.button</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span className={styles.c}>--width</span>:<span className={styles.l}> 100px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span className={styles.c}>--height</span>:<span className={styles.l}> 35px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span className={styles.c}>--tooltip-height</span>:<span className={styles.l}> 35px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span className={styles.c}>--tooltip-width</span>:<span className={styles.l}> 90px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span className={styles.c}>--gap-between-tooltip-to-button</span>:<span className={styles.l}> 18px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        <span className={styles.c}>--button-color</span>:<span className={styles.l}> #222</span>;
                    </p>
                    <p>
                        <span className={styles.number}>8</span>
                        <span className={styles.c}>--tooltip-color</span>:<span className={styles.l}> #fff</span>;
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span className={styles.c}>width</span>:<span className={styles.l}> var(--width)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span className={styles.c}>height</span>:<span className={styles.l}> var(--height)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span className={styles.c}>background</span>:<span className={styles.l}> var(--button-color)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span className={styles.c}>position</span>:<span className={styles.l}> relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        <span className={styles.c}>text-align</span>:<span className={styles.l}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>14</span>
                        <span className={styles.c}>border-radius</span>:<span className={styles.l}> 0.45em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span className={styles.c}>font-family</span>:<span className={styles.l}> "Arial"</span>;
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span className={styles.c}>transition</span>:<span className={styles.l}> background 0.3s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>18 <BiCaretDown /></span>
                        <span className={styles.a}>.button::before</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>19</span>
                        <span className={styles.c}>position</span>:<span className={styles.l}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span className={styles.c}>content</span>:<span className={styles.l}> attr(data-tooltip)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        <span className={styles.c}>width</span>:<span className={styles.l}> var(--tooltip-width)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>22</span>
                        <span className={styles.c}>height</span>:<span className={styles.l}> var(--tooltip-height)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        <span className={styles.c}>background-color</span>:<span className={styles.l}> #555</span>;
                    </p>
                    <p>
                        <span className={styles.number}>24</span>
                        <span className={styles.c}>font-size</span>:<span className={styles.l}> 0.9rem</span>;
                    </p>
                    <p>
                        <span className={styles.number}>25</span>
                        <span className={styles.c}>color</span>:<span className={styles.l}> #fff</span>;
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        <span className={styles.c}>border-radius</span>:<span className={styles.l}> .25em</span>;
                    </p>
                    <p>
                        <span className={styles.number}>27</span>
                        <span className={styles.c}>line-height</span>:<span className={styles.l}> var(--tooltip-height)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span className={styles.c}>bottom</span>:<span className={styles.l}> calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        <span className={styles.c}>left</span>:<span className={styles.l}> calc(50% - var(--tooltip-width) / 2)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>30</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>31 <BiCaretDown /></span>
                        <span className={styles.a}>.button::after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>32</span>
                        <span className={styles.c}>position</span>:<span className={styles.l}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>33</span>
                        <span className={styles.c}>content</span>:<span className={styles.l}> ''</span>;
                    </p>
                    <p>
                        <span className={styles.number}>34</span>
                        <span className={styles.c}>width</span>:<span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>35</span>
                        <span className={styles.c}>height</span>:<span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>36</span>
                        <span className={styles.c}>border</span>:<span className={styles.l}> 10px solid transparent</span>;
                    </p>
                    <p>
                        <span className={styles.number}>37</span>
                        <span className={styles.c}>border-top-color</span>:<span className={styles.l}> #555</span>;
                    </p>
                    <p>
                        <span className={styles.number}>38</span>
                        <span className={styles.c}>left</span>:<span className={styles.l}> calc(50% - 10px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>39</span>
                        <span className={styles.c}>bottom</span>:<span className={styles.l}> calc(100% + var(--gap-between-tooltip-to-button) - 10px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>40</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>41 <BiCaretDown /></span>
                        <span className={styles.a}>.button::after, .button::before</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>42</span>
                        <span className={styles.c}>opacity</span>:<span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>43</span>
                        <span className={styles.c}>visibility</span>:<span className={styles.l}> hidden</span>;
                    </p>
                    <p>
                        <span className={styles.number}>44</span>
                        <span className={styles.c}>transition</span>:<span className={styles.l}> all 0.5s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>45</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>46 <BiCaretDown /></span>
                        <span className={styles.a}>.text</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>47</span>
                        <span className={styles.c}>display</span>:<span className={styles.l}> flex</span>;
                    </p>
                    <p>
                        <span className={styles.number}>48</span>
                        <span className={styles.c}>align-items</span>:<span className={styles.l}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>49</span>
                        <span className={styles.c}>justify-content</span>:<span className={styles.l}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>50</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>51 <BiCaretDown /></span>
                        <span className={styles.a}>.button-wrapper, .text, .icon</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>52</span>
                        <span className={styles.c}>overflow</span>:<span className={styles.l}> hidden</span>;
                    </p>
                    <p>
                        <span className={styles.number}>53</span>
                        <span className={styles.c}>position</span>:<span className={styles.l}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>54</span>
                        <span className={styles.c}>width</span>:<span className={styles.l}> 100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>55</span>
                        <span className={styles.c}>height</span>:<span className={styles.l}> 100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>56</span>
                        <span className={styles.c}>left</span>:<span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>57</span>
                        <span className={styles.c}>color</span>:<span className={styles.l}> #fff</span>;
                    </p>
                    <p>
                        <span className={styles.number}>58</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>78 <BiCaretDown /></span>
                        <span className={styles.a}>.text</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>79</span>
                        <span className={styles.c}>top</span>:<span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>80</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>81 <BiCaretDown /></span>
                        <span className={styles.a}>.text, .icon</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>82</span>
                        <span className={styles.c}>transition</span>:<span className={styles.l}> top 0.5s</span>;
                    </p>
                    <p>
                        <span className={styles.number}>83</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>84 <BiCaretDown /></span>
                        <span className={styles.a}>.icon</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>85</span>
                        <span className={styles.c}>color</span>:<span className={styles.l}> #fff</span>;
                    </p>
                    <p>
                        <span className={styles.number}>86</span>
                        <span className={styles.c}>top</span>:<span className={styles.l}> 100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>87</span>
                        <span className={styles.c}>display</span>:<span className={styles.l}> flex</span>;
                    </p>
                    <p>
                        <span className={styles.number}>88</span>
                        <span className={styles.c}>align-items</span>:<span className={styles.l}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>89</span>
                        <span className={styles.c}>justify-content</span>:<span className={styles.l}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>90</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>91 <BiCaretDown /></span>
                        <span className={styles.a}>.icon svg</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>92</span>
                        <span className={styles.c}>width</span>:<span className={styles.l}> 24px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>93</span>
                        <span className={styles.c}>height</span>:<span className={styles.l}> 24px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>94</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>95 <BiCaretDown /></span>
                        <span className={styles.a}>.button:hover</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>96</span>
                        <span className={styles.c}>background</span>:<span className={styles.l}> green</span>;
                    </p>
                    <p>
                        <span className={styles.number}>97</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>98 <BiCaretDown /></span>
                        <span className={styles.a}>.button:hover .text</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>99</span>
                        <span className={styles.c}>top</span>:<span className={styles.l}> -100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>100</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>101 <BiCaretDown /></span>
                        <span className={styles.a}>.button:hover .icon</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>102</span>
                        <span className={styles.c}>top</span>:<span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>103</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>104 <BiCaretDown /></span>
                        <span className={styles.a}>.button:hover:before, .button:hover:after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>105</span>
                        <span className={styles.c}>opacity</span>:<span className={styles.l}> 1</span>;
                    </p>
                    <p>
                        <span className={styles.number}>106</span>
                        <span className={styles.c}>visibility</span>:<span className={styles.l}> visible</span>;
                    </p>
                    <p>
                        <span className={styles.number}>107</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>108 <BiCaretDown /></span>
                        <span className={styles.a}>.button:hover:after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>109</span>
                        <span className={styles.c}>bottom</span>:<span className={styles.l}> calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>110</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>111 <BiCaretDown /></span>
                        <span className={styles.a}>.button:hover:before</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>112</span>
                        <span className={styles.c}>bottom</span>:<span className={styles.l}> calc(var(--height) + var(--gap-between-tooltip-to-button))</span>;
                    </p>
                    <p>
                        <span className={styles.number}>113</span>
                        {`}`}
                    </p>
                </div>



            )}{estado === 'jsBuyNow' && (
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

export default CodeBtnBuyNow