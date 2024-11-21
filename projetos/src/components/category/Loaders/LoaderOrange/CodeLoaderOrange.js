import styles from "../../StylesCode.module.css";
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeLoaderOrange({ estado }) {
  return (
    <>
      {(estado === "htmlLoaderOrange" || estado === "html") && (
        <div className={styles.linha}>
          <p>
            <span className={styles.number}>
              1 <BiCaretRight />
            </span>
            <span className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"loader"</span>{" "}
            <span className={styles.a}>{`>`}</span>
          </p>
          <p>
            <span className={styles.number}>2</span>
            <span style={{ marginLeft: "45px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"loading-text"</span>{" "}
            <span className={styles.a}>{`>`}</span>
          </p>
          <p>
            <span className={styles.number}>3</span>
            <span style={{ marginLeft: "65px" }} className={styles.t}>
              Loading
            </span>
            <span className={styles.a}>
              {`<span `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"dot"</span>{" "}
            <span className={styles.a}>{`>.</span>`}</span>
            <span className={styles.a}>
              {`<span `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"dot"</span>{" "}
            <span className={styles.a}>{`>.</span>`}</span>
            <span className={styles.a}>
              {`<span `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"dot"</span>{" "}
            <span className={styles.a}>{`>.</span>`}</span>
          </p>
          <p>
            <span className={styles.number}>4</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`</div>`}</span>
          </p>
          <p>
            <span className={styles.number}>5</span>
            <span style={{ marginLeft: "45px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"loading-bar-background"</span>{" "}
            <span className={styles.a}>{`>`}</span>
          </p>
          <p>
            <span className={styles.number}>6</span>
            <span style={{ marginLeft: "65px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"loading-bar"</span>{" "}
            <span className={styles.a}>{`>`}</span>
          </p>
          <p>
            <span className={styles.number}>7</span>
            <span style={{ marginLeft: "85px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"white-bars-container"</span>{" "}
            <span className={styles.a}>{`>`}</span>
          </p>
          <p>
            <span className={styles.number}>8</span>
            <span style={{ marginLeft: "105px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"white-bar"</span>{" "}
            <span className={styles.a}>{`></div>`}</span>
          </p>
          <p>
            <span className={styles.number}>9</span>
            <span style={{ marginLeft: "105px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"white-bar"</span>{" "}
            <span className={styles.a}>{`></div>`}</span>
          </p>
          <p>
            <span className={styles.number}>10</span>
            <span style={{ marginLeft: "105px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"white-bar"</span>{" "}
            <span className={styles.a}>{`></div>`}</span>
          </p>
          <p>
            <span className={styles.number}>11</span>
            <span style={{ marginLeft: "105px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"white-bar"</span>{" "}
            <span className={styles.a}>{`></div>`}</span>
          </p>
          <p>
            <span className={styles.number}>12</span>
            <span style={{ marginLeft: "105px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"white-bar"</span>{" "}
            <span className={styles.a}>{`></div>`}</span>
          </p>
          <p>
            <span className={styles.number}>13</span>
            <span style={{ marginLeft: "105px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"white-bar"</span>{" "}
            <span className={styles.a}>{`></div>`}</span>
          </p>
          <p>
            <span className={styles.number}>14</span>
            <span style={{ marginLeft: "105px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"white-bar"</span>{" "}
            <span className={styles.a}>{`></div>`}</span>
          </p>
          <p>
            <span className={styles.number}>15</span>
            <span style={{ marginLeft: "105px" }} className={styles.a}>
              {`<div `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"white-bar"</span>{" "}
            <span className={styles.a}>{`></div>`}</span>
          </p>
          <p>
            <span className={styles.number}>16</span>
            <span
              style={{ marginLeft: "85px" }}
              className={styles.a}
            >{`</div>`}</span>
          </p>
          <p>
            <span className={styles.number}>17</span>
            <span
              style={{ marginLeft: "65px" }}
              className={styles.a}
            >{`</div>`}</span>
          </p>
          <p>
            <span className={styles.number}>18</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`</div>`}</span>
          </p>
          <p>
            <span className={styles.number}>19</span>
            <span className={styles.a}>{`</div>`}</span>
          </p>
        </div>
      )}
      {estado === "cssLoaderOrange" && (
        <div className={styles.linha}>
          <p>
            <span className={styles.number}>
              1 <BiCaretRight />
            </span>
            <span className={styles.a}>{`body `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>2</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              background-color
            </span>
            :<span className={styles.aa}> #212121</span>;
          </p>
          <p>
            <span className={styles.number}>3</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              4 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.loader `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>5</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              display
            </span>
            :<span className={styles.aa}> flex</span>;
          </p>
          <p>
            <span className={styles.number}>6</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              align-items
            </span>
            :<span className={styles.aa}> center</span>;
          </p>
          <p>
            <span className={styles.number}>7</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              justify-content
            </span>
            :<span className={styles.aa}> center</span>;
          </p>
          <p>
            <span className={styles.number}>8</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              flex-direction
            </span>
            :<span className={styles.aa}> column</span>;
          </p>
          <p>
            <span className={styles.number}>9</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              gap
            </span>
            :<span className={styles.aa}> 5px</span>;
          </p>
          <p>
            <span className={styles.number}>10</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              11 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.loading-text `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>12</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              color
            </span>
            :<span className={styles.aa}> white</span>;
          </p>
          <p>
            <span className={styles.number}>13</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              font-size
            </span>
            :<span className={styles.aa}> 14pt</span>;
          </p>
          <p>
            <span className={styles.number}>14</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              font-weight
            </span>
            :<span className={styles.aa}> 600</span>;
          </p>
          <p>
            <span className={styles.number}>15</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              margin-left
            </span>
            :<span className={styles.aa}> 10px</span>;
          </p>
          <p>
            <span className={styles.number}>16</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              17 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.dot `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>18</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              margin-left
            </span>
            :<span className={styles.aa}> 3px</span>;
          </p>
          <p>
            <span className={styles.number}>19</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              animation
            </span>
            :<span className={styles.aa}> blink 1.5s infinite</span>;
          </p>
          <p>
            <span className={styles.number}>20</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              21 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.dot:nth-child(2) `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>22</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              animation-delay
            </span>
            :<span className={styles.aa}> 0.3s</span>;
          </p>
          <p>
            <span className={styles.number}>23</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              24 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.dot:nth-child(3) `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>25</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              animation-delay
            </span>
            :<span className={styles.aa}> 0.6s</span>;
          </p>
          <p>
            <span className={styles.number}>26</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              27 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.loading-bar-background `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>28</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              --height
            </span>
            :<span className={styles.aa}> 30px</span>;
          </p>
          <p>
            <span className={styles.number}>29</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              display
            </span>
            :<span className={styles.aa}> flex</span>;
          </p>
          <p>
            <span className={styles.number}>30</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              align-items
            </span>
            :<span className={styles.aa}> center</span>;
          </p>
          <p>
            <span className={styles.number}>31</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              box-sizing
            </span>
            :<span className={styles.aa}> border-box</span>;
          </p>
          <p>
            <span className={styles.number}>32</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              padding
            </span>
            :<span className={styles.aa}> 5px</span>;
          </p>
          <p>
            <span className={styles.number}>33</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              width
            </span>
            :<span className={styles.aa}> 200px</span>;
          </p>
          <p>
            <span className={styles.number}>34</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              height
            </span>
            :<span className={styles.aa}> var(--height)</span>;
          </p>
          <p>
            <span className={styles.number}>35</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              background-color
            </span>
            :<span className={styles.aa}> #212121</span>;
          </p>
          <p>
            <span className={styles.number}>36</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              box-shadow
            </span>
            :<span className={styles.aa}> #0c0c0c -2px 2px 4px 0px inset</span>;
          </p>
          <p>
            <span className={styles.number}>37</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              border-radius
            </span>
            :<span className={styles.aa}> calc(var(--height) / 2)</span>;
          </p>
          <p>
            <span className={styles.number}>38</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              39 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.loading-bar `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>40</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              position
            </span>
            :<span className={styles.aa}> relative</span>;
          </p>
          <p>
            <span className={styles.number}>41</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              display
            </span>
            :<span className={styles.aa}> flex</span>;
          </p>
          <p>
            <span className={styles.number}>42</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              justify-content
            </span>
            :<span className={styles.aa}> center</span>;
          </p>
          <p>
            <span className={styles.number}>43</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              flex-direction
            </span>
            :<span className={styles.aa}> column</span>;
          </p>
          <p>
            <span className={styles.number}>44</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              --height
            </span>
            :<span className={styles.aa}> 20px</span>;
          </p>
          <p>
            <span className={styles.number}>45</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              width
            </span>
            :<span className={styles.aa}> 0%</span>;
          </p>
          <p>
            <span className={styles.number}>46</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              height
            </span>
            :<span className={styles.aa}> var(--height)</span>;
          </p>
          <p>
            <span className={styles.number}>47</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              overflow
            </span>
            :<span className={styles.aa}> hidden</span>;
          </p>
          <p>
            <span className={styles.number}>48</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              background
            </span>
            :
            <span className={styles.aa}>
              {" "}
              linear-gradient(0deg, rgba(222, 74, 15, 1) 0%, rgba(249, 199, 79,
              1) 100%)
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>49</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              border-radius
            </span>
            :<span className={styles.aa}> calc(var(--height) / 2)</span>;
          </p>
          <p>
            <span className={styles.number}>50</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              animation
            </span>
            :<span className={styles.aa}> loading 4s ease-out infinite</span>;
          </p>
          <p>
            <span className={styles.number}>51</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              52 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.white-bars-container `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>53</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              position
            </span>
            :<span className={styles.aa}> absolute</span>;
          </p>
          <p>
            <span className={styles.number}>54</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              display
            </span>
            :<span className={styles.aa}> flex</span>;
          </p>
          <p>
            <span className={styles.number}>55</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              align-items
            </span>
            :<span className={styles.aa}> center</span>;
          </p>
          <p>
            <span className={styles.number}>56</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              gap
            </span>
            :<span className={styles.aa}> 18px</span>;
          </p>
          <p>
            <span className={styles.number}>57</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              58 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.white-bar `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>59</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              background
            </span>
            :
            <span className={styles.aa}>
              {" "}
              linear-gradient(-45deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255,
              255, 0) 70%)
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>60</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              width
            </span>
            :<span className={styles.aa}> 10px</span>;
          </p>
          <p>
            <span className={styles.number}>61</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              height
            </span>
            :<span className={styles.aa}> 45px</span>;
          </p>
          <p>
            <span className={styles.number}>62</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              opacity
            </span>
            :<span className={styles.aa}> 0.3</span>;
          </p>
          <p>
            <span className={styles.number}>63</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              rotate
            </span>
            :<span className={styles.aa}> 45deg</span>;
          </p>
          <p>
            <span className={styles.number}>64</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              65 <BiCaretRight />
            </span>
            <span className={styles.a}>{`@keyframes loading `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>66</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`0% `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>67</span>
            <span style={{ marginLeft: "65px" }} className={styles.c}>
              width
            </span>
            :<span className={styles.aa}> 0</span>;
          </p>
          <p>
            <span className={styles.number}>68</span>
            <span style={{ marginLeft: "45px" }}>{`}`}</span>
          </p>
          <p>
            <span className={styles.number}>69</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`80% `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>70</span>
            <span style={{ marginLeft: "65px" }} className={styles.c}>
              width
            </span>
            :<span className={styles.aa}> 100%</span>;
          </p>
          <p>
            <span className={styles.number}>71</span>
            <span style={{ marginLeft: "45px" }}>{`}`}</span>
          </p>
          <p>
            <span className={styles.number}>72</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`100% `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>73</span>
            <span style={{ marginLeft: "65px" }} className={styles.c}>
              width
            </span>
            :<span className={styles.aa}> 100%</span>;
          </p>
          <p>
            <span className={styles.number}>74</span>
            <span style={{ marginLeft: "45px" }}>{`}`}</span>
          </p>
          <p>
            <span className={styles.number}>75</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              76 <BiCaretRight />
            </span>
            <span className={styles.a}>{`@keyframes blink `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>77</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`0%, 100% `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>78</span>
            <span style={{ marginLeft: "65px" }} className={styles.c}>
              opacity
            </span>
            :<span className={styles.aa}> 0</span>;
          </p>
          <p>
            <span className={styles.number}>79</span>
            <span style={{ marginLeft: "45px" }}>{`}`}</span>
          </p>
          <p>
            <span className={styles.number}>80</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`50% `}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>81</span>
            <span style={{ marginLeft: "65px" }} className={styles.c}>
              opacity
            </span>
            :<span className={styles.aa}> 1</span>;
          </p>
          <p>
            <span className={styles.number}>82</span>
            <span style={{ marginLeft: "45px" }}>{`}`}</span>
          </p>
          <p>
            <span className={styles.number}>83</span>
            {`}`}
          </p>
        </div>
      )}
      {estado === "jsLoaderOrange" && (
        <div className={styles.mensagem}>
          <h1>Esse projeto não utiliza JavaScript</h1>
          <div className={styles.logo_js}>
            <IoLogoJavascript size={50} />
          </div>
        </div>
      )}
    </>
  );
}

export default CodeLoaderOrange;
