import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeBtnDownloadNow({ estado }) {
    return (
        <>
            {(estado === 'htmlDownloadNow' || estado === 'html') && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretRight /></span>
                        <span className={styles.a}>{`<button `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"button"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<span `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"button_lg"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>{`<span `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"button_sl"</span> <span className={styles.a}>{`></span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>{`<span `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"button_text"</span> <span className={styles.a}>{`>`}</span>Download Now<span className={styles.a}>{`</span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`</span>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span className={styles.a}>{`</button>`}</span>
                    </p>
                </div>

            )}{estado === 'cssDownloadNow' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>8 <BiCaretDown /></span>
                        <span className={styles.a}>.button</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span className={styles.c}>-moz-appearance</span>:
                        <span className={styles.l}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span className={styles.c}>-webkit-appearance</span>:
                        <span className={styles.l}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span className={styles.c}>appearance</span>:
                        <span className={styles.l}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span className={styles.c}>border</span>:
                        <span className={styles.aa}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.l}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>14</span>
                        <span className={styles.c}>color</span>:
                        <span className={styles.l}> #0f1923</span>;
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span className={styles.c}>cursor</span>:
                        <span className={styles.aa}> pointer</span>;
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        <span className={styles.c}>padding</span>:
                        <span className={styles.l}> 8px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        <span className={styles.c}>margin-bottom</span>:
                        <span className={styles.l}> 20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>19</span>
                        <span className={styles.c}>text-transform</span>:
                        <span className={styles.aa}> uppercase</span>;
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span className={styles.c}>font-weight</span>:
                        <span className={styles.l}> bold</span>;
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        <span className={styles.c}>font-size</span>:
                        <span className={styles.l}> 14px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>22</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> all .15s ease</span>;
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>24 <BiCaretDown /></span>
                        <span className={styles.a}>.button::before, .button::after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>25</span>
                        <span className={styles.c}>content</span>:
                        <span className={styles.aa}> ''</span>;
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>27</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span className={styles.c}>right</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        <span className={styles.c}>left</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>30</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> calc(50% - 5px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>31</span>
                        <span className={styles.c}>border</span>:
                        <span className={styles.l}> 1px solid #7D8082</span>;
                    </p>
                    <p>
                        <span className={styles.number}>32</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> all .15s ease</span>;
                    </p>
                    <p>
                        <span className={styles.number}>33</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>34 <BiCaretDown /></span>
                        <span className={styles.a}>.button::before</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>35</span>
                        <span className={styles.c}>top</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>36</span>
                        <span className={styles.c}>border-bottom-width</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>37</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>38 <BiCaretDown /></span>
                        <span className={styles.a}>.button::after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>39</span>
                        <span className={styles.c}>bottom</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>40</span>
                        <span className={styles.c}>border-top-width</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>41</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>42 <BiCaretDown /></span>
                        <span className={styles.a}>.button:active, .button:focus</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>43</span>
                        <span className={styles.c}>outline</span>:
                        <span className={styles.aa}> none</span>;
                    </p>
                    <p>
                        <span className={styles.number}>44</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>45 <BiCaretDown /></span>
                        <span className={styles.a}>.button:active::before, .button:active::after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>46</span>
                        <span className={styles.c}>right</span>:
                        <span className={styles.l}> 3px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>47</span>
                        <span className={styles.c}>left</span>:
                        <span className={styles.l}> 3px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>48</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>49 <BiCaretDown /></span>
                        <span className={styles.a}>.button:active::before</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>50</span>
                        <span className={styles.c}>top</span>:
                        <span className={styles.l}> 3px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>51</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>52 <BiCaretDown /></span>
                        <span className={styles.a}>.button:active::after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>53</span>
                        <span className={styles.c}>bottom</span>:
                        <span className={styles.l}> 3px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>54</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>55 <BiCaretDown /></span>
                        <span className={styles.a}>.button_lg</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>56</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>57</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>58</span>
                        <span className={styles.c}>padding</span>:
                        <span className={styles.l}> 10px 20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>59</span>
                        <span className={styles.c}>color</span>:
                        <span className={styles.l}> #fff</span>;
                    </p>
                    <p>
                        <span className={styles.number}>60</span>
                        <span className={styles.c}>background-color</span>:
                        <span className={styles.l}> #0f1923</span>;
                    </p>
                    <p>
                        <span className={styles.number}>61</span>
                        <span className={styles.c}>overflow</span>:
                        <span className={styles.l}> hidden</span>;
                    </p>
                    <p>
                        <span className={styles.number}>62</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> inset 0px 0px 0px 1px transparent</span>;
                    </p>
                    <p>
                        <span className={styles.number}>63</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>64 <BiCaretDown /></span>
                        <span className={styles.a}>.button_lg::before</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>65</span>
                        <span className={styles.c}>content</span>:
                        <span className={styles.aa}> ''</span>;
                    </p>
                    <p>
                        <span className={styles.number}>66</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>67</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>68</span>
                        <span className={styles.c}>top</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>69</span>
                        <span className={styles.c}>left</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>70</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 2px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>71</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 2px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>72</span>
                        <span className={styles.c}>background-color</span>:
                        <span className={styles.l}> #0f1923</span>;
                    </p>
                    <p>
                        <span className={styles.number}>73</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>74 <BiCaretDown /></span>
                        <span className={styles.a}>.button_lg::after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>75</span>
                        <span className={styles.c}>content</span>:
                        <span className={styles.aa}> ''</span>;
                    </p>
                    <p>
                        <span className={styles.number}>76</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>77</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>78</span>
                        <span className={styles.c}>right</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>79</span>
                        <span className={styles.c}>bottom</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>80</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 4px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>81</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 4px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>82</span>
                        <span className={styles.c}>background-color</span>:
                        <span className={styles.l}> #0f1923</span>;
                    </p>
                    <p>
                        <span className={styles.number}>83</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> all .2s ease</span>;
                    </p>
                    <p>
                        <span className={styles.number}>84</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>85 <BiCaretDown /></span>
                        <span className={styles.a}>.button_sl</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>86</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>87</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>88</span>
                        <span className={styles.c}>top</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>89</span>
                        <span className={styles.c}>bottom</span>:
                        <span className={styles.l}> -1px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>90</span>
                        <span className={styles.c}>left</span>:
                        <span className={styles.l}> -8px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>91</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>92</span>
                        <span className={styles.c}>background-color</span>:
                        <span className={styles.l}> #ff4655</span>;
                    </p>
                    <p>
                        <span className={styles.number}>93</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.l}> skew(-15deg)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>94</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> all .2s ease</span>;
                    </p>
                    <p>
                        <span className={styles.number}>95</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>96 <BiCaretDown /></span>
                        <span className={styles.a}>.button_text</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>97</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.aa}> relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>98</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>99 <BiCaretDown /></span>
                        <span className={styles.a}>.button:hover</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>100</span>
                        <span className={styles.c}>color</span>:
                        <span className={styles.l}> #0f1923</span>;
                    </p>
                    <p>
                        <span className={styles.number}>101</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>102 <BiCaretDown /></span>
                        <span className={styles.a}>.button:hover .button_sl</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>103</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> calc(100% + 15px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>104</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>105 <BiCaretDown /></span>
                        <span className={styles.a}>.button:hover .button_lg::after</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>106</span>
                        <span className={styles.c}>background-color</span>:
                        <span className={styles.l}> #fff</span>;
                    </p>
                    <p>
                        <span className={styles.number}>107</span>
                        {`}`}
                    </p>
                </div>



            )}{estado === 'jsDownloadNow' && (
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

export default CodeBtnDownloadNow