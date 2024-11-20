import styles from '../../StylesCode.module.css'
import { BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeCard3D({ estado }) {
    return (
        <>
            {(estado === 'htmlCard3D' || estado === 'html') && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1</span>
                        <span className={styles.a}>&lt;div <span className={styles.aa}>class</span>=<span className={styles.v}>"parent"</span>&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>&lt;div <span className={styles.aa}>class</span>=<span className={styles.v}>"card"</span>&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>&lt;div <span className={styles.aa}>class</span>=<span className={styles.v}>"content-box"</span>&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>&lt;span <span className={styles.aa}>class</span>=<span className={styles.v}>"card-title"</span>&gt;</span>Cartão 3D<span className={styles.a}>&lt;/span&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>&lt;p <span className={styles.aa}>class</span>=<span className={styles.v}>"card-content"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className={styles.a}>&lt;/p&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>&lt;span <span className={styles.aa}>class</span>=<span className={styles.v}>"see-more"</span>&gt;</span>Ver Mais<span className={styles.a}>&lt;/span&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>&lt;/div&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>8</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>&lt;div <span className={styles.aa}>class</span>=<span className={styles.v}>"date-box"</span>&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>&lt;span <span className={styles.aa}>class</span>=<span className={styles.v}>"month"</span>&gt;</span>Novembro<span className={styles.a}>&lt;/span&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>&lt;span <span className={styles.aa}>class</span>=<span className={styles.v}>"date"</span>&gt;</span>29<span className={styles.a}>&lt;/span&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>&lt;/div&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>&lt;/div&gt;</span>
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        <span className={styles.a}>&lt;/div&gt;</span>
                    </p>
                </div>





            )}{estado === 'cssCard3D' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretDown /></span>
                        <span className={styles.a}>.parent</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.aa}> 300px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span className={styles.c}>padding</span>:
                        <span className={styles.aa}> 20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span className={styles.c}>perspective</span>:
                        <span className={styles.aa}> 1000px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>6 <BiCaretDown /></span>
                        <span className={styles.a}>.card</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        <span className={styles.c}>padding-top</span>:
                        <span className={styles.aa}> 50px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>8</span>
                        <span className={styles.c}>border-radius</span>:
                        <span className={styles.aa}> 10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span className={styles.c}>border</span>:
                        <span className={styles.aa}> 3px solid rgb(255, 255, 255)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span className={styles.c}>transform-style</span>:
                        <span className={styles.aa}> preserve-3d</span>;
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.aa}> linear-gradient(135deg, #0000 18.75%, #f3f3f3 0 31.25%, #0000 0), repeating-linear-gradient(45deg, #f3f3f3 -6.25% 6.25%, #ffffff 0 18.75%)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span className={styles.c}>background-size</span>:
                        <span className={styles.aa}> 60px 60px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        <span className={styles.c}>background-position</span>:
                        <span className={styles.aa}> 0 0, 0 0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>14</span>
                        <span className={styles.c}>background-color</span>:
                        <span className={styles.aa}> #f0f0f0</span>;
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.aa}> 100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.aa}> rgba(142, 142, 142, 0.3) 0px 30px 30px -10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.aa}> all 0.5s ease-in-out</span>;
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>19 <BiCaretDown /></span>
                        <span className={styles.a}>.card:hover</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span className={styles.c}>background-position</span>:
                        <span className={styles.aa}> -100px 100px, -100px 100px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.aa}> rotate3d(0.5, 1, 0, 30deg)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>22</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>23 <BiCaretDown /></span>
                        <span className={styles.a}>.content-box</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>24</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.aa}> rgba(23, 182, 36, 0.732)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>25</span>
                        <span className={styles.c}>border-radius</span>:
                        <span className={styles.aa}> 10px 100px 10px 10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.aa}> all 0.5s ease-in-out</span>;
                    </p>
                    <p>
                        <span className={styles.number}>27</span>
                        <span className={styles.c}>padding</span>:
                        <span className={styles.aa}> 60px 25px 25px 25px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span className={styles.c}>transform-style</span>:
                        <span className={styles.aa}> preserve-3d</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>30 <BiCaretDown /></span>
                        <span className={styles.a}>.content-box .card-title</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>31</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.aa}> inline-block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>32</span>
                        <span className={styles.c}>color</span>:
                        <span className={styles.aa}> white</span>;
                    </p>
                    <p>
                        <span className={styles.number}>33</span>
                        <span className={styles.c}>font-size</span>:
                        <span className={styles.aa}> 25px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>34</span>
                        <span className={styles.c}>font-weight</span>:
                        <span className={styles.aa}> 900</span>;
                    </p>
                    <p>
                        <span className={styles.number}>35</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.aa}> all 0.5s ease-in-out</span>;
                    </p>
                    <p>
                        <span className={styles.number}>36</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.aa}> translate3d(0px, 0px, 50px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>37</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>38 <BiCaretDown /></span>
                        <span className={styles.a}>.content-box .card-title:hover</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>39</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.aa}> translate3d(0px, 0px, 60px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>40</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>41 <BiCaretDown /></span>
                        <span className={styles.a}>.content-box .card-content</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>42</span>
                        <span className={styles.c}>margin-top</span>:
                        <span className={styles.aa}> 10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>43</span>
                        <span className={styles.c}>font-size</span>:
                        <span className={styles.aa}> 12px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>44</span>
                        <span className={styles.c}>font-weight</span>:
                        <span className={styles.aa}> 700</span>;
                    </p>
                    <p>
                        <span className={styles.number}>45</span>
                        <span className={styles.c}>color</span>:
                        <span className={styles.aa}> #f2f2f2</span>;
                    </p>
                    <p>
                        <span className={styles.number}>46</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.aa}> all 0.5s ease-in-out</span>;
                    </p>
                    <p>
                        <span className={styles.number}>47</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.aa}> translate3d(0px, 0px, 30px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>48</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>49 <BiCaretDown /></span>
                        <span className={styles.a}>.content-box .card-content:hover</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>50</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.aa}> translate3d(0px, 0px, 60px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>51</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>52</span>
                        <span className={styles.a}>.content-box .see-more</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>53</span>
                        <span className={styles.c}>cursor</span>:
                        <span className={styles.aa}> pointer</span>;
                    </p>
                    <p>
                        <span className={styles.number}>54</span>
                        <span className={styles.c}>margin-top</span>:
                        <span className={styles.l}> 1rem</span>;
                    </p>
                    <p>
                        <span className={styles.number}>55</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.l}> inline-block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>56</span>
                        <span className={styles.c}>font-weight</span>:
                        <span className={styles.l}> 900</span>;
                    </p>
                    <p>
                        <span className={styles.number}>57</span>
                        <span className={styles.c}>font-size</span>:
                        <span className={styles.l}> 9px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>58</span>
                        <span className={styles.c}>text-transform</span>:
                        <span className={styles.aa}> uppercase</span>;
                    </p>
                    <p>
                        <span className={styles.number}>59</span>
                        <span className={styles.c}>color</span>:
                        <span className={styles.l}> rgb(0, 158, 61)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>60</span>
                        <span className={styles.c}>border-radius</span>:
                        <span className={styles.l}> 5px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>61</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.l}> white</span>;
                    </p>
                    <p>
                        <span className={styles.number}>62</span>
                        <span className={styles.c}>padding</span>:
                        <span className={styles.l}> 0.5rem 0.7rem</span>;
                    </p>
                    <p>
                        <span className={styles.number}>63</span>
                        <span className={styles.c}>transition</span>:
                        <span className={styles.l}> all 0.5s ease-in-out</span>;
                    </p>
                    <p>
                        <span className={styles.number}>64</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.l}> translate3d(0px, 0px, 20px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>65</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>66</span>
                        <span className={styles.a}>.content-box .see-more:hover</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>67</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.l}> translate3d(0px, 0px, 60px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>68</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>69</span>
                        <span className={styles.a}>.date-box</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>70</span>
                        <span className={styles.c}>position</span>:
                        <span className={styles.l}> absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>71</span>
                        <span className={styles.c}>top</span>:
                        <span className={styles.l}> 30px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>72</span>
                        <span className={styles.c}>right</span>:
                        <span className={styles.l}> 30px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>73</span>
                        <span className={styles.c}>height</span>:
                        <span className={styles.l}> 60px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>74</span>
                        <span className={styles.c}>width</span>:
                        <span className={styles.l}> 60px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>75</span>
                        <span className={styles.c}>background</span>:
                        <span className={styles.l}> white</span>;
                    </p>
                    <p>
                        <span className={styles.number}>76</span>
                        <span className={styles.c}>border</span>:
                        <span className={styles.l}> 1px solid rgb(0, 158, 61)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>77</span>
                        <span className={styles.c}>border-radius</span>:
                        <span className={styles.l}> 10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>78</span>
                        <span className={styles.c}>padding</span>:
                        <span className={styles.l}> 10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>79</span>
                        <span className={styles.c}>transform</span>:
                        <span className={styles.l}> translate3d(0px, 0px, 80px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>80</span>
                        <span className={styles.c}>box-shadow</span>:
                        <span className={styles.l}> rgba(100, 100, 111, 0.2) 0px 17px 10px -10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>81</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>82</span>
                        <span className={styles.a}>.date-box span</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>83</span>
                        <span className={styles.c}>display</span>:
                        <span className={styles.l}> block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>84</span>
                        <span className={styles.c}>text-align</span>:
                        <span className={styles.l}> center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>85</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>86</span>
                        <span className={styles.a}>.date-box .month</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>87</span>
                        <span className={styles.c}>color</span>:
                        <span className={styles.l}> rgb(0, 158, 61)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>88</span>
                        <span className={styles.c}>font-size</span>:
                        <span className={styles.l}> 9px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>89</span>
                        <span className={styles.c}>font-weight</span>:
                        <span className={styles.l}> 700</span>;
                    </p>
                    <p>
                        <span className={styles.number}>90</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>91</span>
                        <span className={styles.a}>.date-box .date</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>92</span>
                        <span className={styles.c}>font-size</span>:
                        <span className={styles.l}> 20px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>93</span>
                        <span className={styles.c}>font-weight</span>:
                        <span className={styles.l}> 900</span>;
                    </p>
                    <p>
                        <span className={styles.number}>94</span>
                        <span className={styles.c}>color</span>:
                        <span className={styles.l}> rgb(0, 158, 61)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>95</span>
                        {`}`}
                    </p>

                </div>



            )}{estado === 'jsCard3D' && (
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

export default CodeCard3D