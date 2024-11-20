import styles from "../../StylesCode.module.css";
import { IoLogoJavascript } from "react-icons/io5";

function CodeBtnLeftToRight({ estado }) {
  return (
    <>
      {(estado === "htmlLeftToRight" || estado === "html") && (
        <div className={styles.linha}>
          <p>
            <span className={styles.number}>1</span>
            <span className={styles.a}>{`<button`}</span>{" "}
            <span className={styles.c}>class</span>
            <span className={styles.aa}>=</span>
            <span className={styles.l}>{`"button"`}</span>
            <span className={styles.a}>{`>`}</span>
          </p>
          <p>
            <span className={styles.number}>2</span>
            Botão Hover!
          </p>
          <p>
            <span className={styles.number}>3</span>
            <span className={styles.a}>{`</button>`}</span>
          </p>
        </div>
      )}
      {estado === "cssLeftToRight" && (
        <div className={styles.linha}>
          <p>
            <span className={styles.number}>1</span>
            <span className={styles.a}>.button</span>
            {` {`}
          </p>
          <p>
            <span className={styles.number}>2</span>
            <span className={styles.c}>padding</span>:
            <span className={styles.l}> 15px 25px</span>;
          </p>
          <p>
            <span className={styles.number}>3</span>
            <span className={styles.c}>border</span>:
            <span className={styles.aa}> unset</span>;
          </p>
          <p>
            <span className={styles.number}>4</span>
            <span className={styles.c}>border-radius</span>:
            <span className={styles.l}> 15px</span>;
          </p>
          <p>
            <span className={styles.number}>5</span>
            <span className={styles.c}>color</span>:
            <span className={styles.l}> #212121</span>;
          </p>
          <p>
            <span className={styles.number}>6</span>
            <span className={styles.c}>z-index</span>:
            <span className={styles.l}> 1</span>;
          </p>
          <p>
            <span className={styles.number}>7</span>
            <span className={styles.c}>background</span>:
            <span className={styles.l}> #e8e8e8</span>;
          </p>
          <p>
            <span className={styles.number}>8</span>
            <span className={styles.c}>position</span>:
            <span className={styles.l}> relative</span>;
          </p>
          <p>
            <span className={styles.number}>9</span>
            <span className={styles.c}>font-weight</span>:
            <span className={styles.l}> 1000</span>;
          </p>
          <p>
            <span className={styles.number}>10</span>
            <span className={styles.c}>font-size</span>:
            <span className={styles.l}> 17px</span>;
          </p>
          <p>
            <span className={styles.number}>11</span>
            <span className={styles.c}>-webkit-box-shadow</span>:
            <span className={styles.l}>
              {" "}
              4px 8px 19px -3px rgba(0,0,0,0.27)
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>12</span>
            <span className={styles.c}>box-shadow</span>:
            <span className={styles.l}>
              {" "}
              4px 8px 19px -3px rgba(0,0,0,0.27)
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>13</span>
            <span className={styles.c}>transition</span>:
            <span className={styles.l}> all 250ms</span>;
          </p>
          <p>
            <span className={styles.number}>14</span>
            <span className={styles.c}>overflow</span>:
            <span className={styles.l}> hidden</span>;
          </p>
          <p>
            <span className={styles.number}>15</span>
            <span className={styles.c}>cursor</span>:
            <span className={styles.l}> pointer</span>;
          </p>
          <p>
            <span className={styles.number}>16</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>17</span>
            <span className={styles.a}>.button::before</span>
            {` {`}
          </p>
          <p>
            <span className={styles.number}>18</span>
            <span className={styles.c}>content</span>:
            <span className={styles.aa}> ""</span>;
          </p>
          <p>
            <span className={styles.number}>19</span>
            <span className={styles.c}>position</span>:
            <span className={styles.l}> absolute</span>;
          </p>
          <p>
            <span className={styles.number}>20</span>
            <span className={styles.c}>top</span>:
            <span className={styles.l}> 0</span>;
          </p>
          <p>
            <span className={styles.number}>21</span>
            <span className={styles.c}>left</span>:
            <span className={styles.l}> 0</span>;
          </p>
          <p>
            <span className={styles.number}>22</span>
            <span className={styles.c}>height</span>:
            <span className={styles.l}> 100%</span>;
          </p>
          <p>
            <span className={styles.number}>23</span>
            <span className={styles.c}>width</span>:
            <span className={styles.l}> 0</span>;
          </p>
          <p>
            <span className={styles.number}>24</span>
            <span className={styles.c}>border-radius</span>:
            <span className={styles.l}> 15px</span>;
          </p>
          <p>
            <span className={styles.number}>25</span>
            <span className={styles.c}>background-color</span>:
            <span className={styles.l}> #212121</span>;
          </p>
          <p>
            <span className={styles.number}>26</span>
            <span className={styles.c}>z-index</span>:
            <span className={styles.l}> -1</span>;
          </p>
          <p>
            <span className={styles.number}>27</span>
            <span className={styles.c}>-webkit-box-shadow</span>:
            <span className={styles.l}>
              {" "}
              4px 8px 19px -3px rgba(0,0,0,0.27)
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>28</span>
            <span className={styles.c}>box-shadow</span>:
            <span className={styles.l}>
              {" "}
              4px 8px 19px -3px rgba(0,0,0,0.27)
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>29</span>
            <span className={styles.c}>transition</span>:
            <span className={styles.l}> all 250ms</span>;
          </p>
          <p>
            <span className={styles.number}>30</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>31</span>
            <span className={styles.a}>.button:hover</span>
            {` {`}
          </p>
          <p>
            <span className={styles.number}>32</span>
            <span className={styles.c}>color</span>:
            <span className={styles.l}> #e8e8e8</span>;
          </p>
          <p>
            <span className={styles.number}>33</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>34</span>
            <span className={styles.a}>.button:hover::before</span>
            {` {`}
          </p>
          <p>
            <span className={styles.number}>35</span>
            <span className={styles.c}>width</span>:
            <span className={styles.l}> 100%</span>;
          </p>
          <p>
            <span className={styles.number}>36</span>
            {`}`}
          </p>
        </div>
      )}
      {estado === "jsLeftToRight" && (
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

export default CodeBtnLeftToRight;
