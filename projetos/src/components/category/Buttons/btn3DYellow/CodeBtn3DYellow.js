import styles from "../../StylesCode.module.css";
import { IoLogoJavascript } from "react-icons/io5";

function CodeBtn3DYellow({ estado }) {
  return (
    <>
      {(estado === "html3DYellow" || estado === "html") && (
        <div className={styles.linha}>
          <p>
            <span className={styles.number}>1</span>
            <span className={styles.a}>{`<button`}</span>
            <span className={styles.c}>{` class=`}</span>
            <span className={styles.aa}>{`"button"`}</span>
            <span className={styles.a}>{`>`}</span>
          </p>
          <p>
            <span className={styles.number}>2</span>
            <span className={styles.b}>Button</span>
          </p>
          <p>
            <span className={styles.number}>3</span>
            <span className={styles.a}>{`</button>`}</span>
          </p>
        </div>
      )}
      {estado === "css3DYellow" && (
        <div className={styles.linha}>
          <p>
            <span className={styles.number}>1</span>
            <span className={styles.a}>.button</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>2</span>
            <span className={styles.c}>background-color</span>:
            <span className={styles.aa}> yellow</span>;
          </p>
          <p>
            <span className={styles.number}>3</span>
            <span className={styles.c}>color</span>:
            <span className={styles.aa}> black</span>;
          </p>
          <p>
            <span className={styles.number}>4</span>
            <span className={styles.c}>border-radius</span>:
            <span className={styles.aa}> 10em</span>;
          </p>
          <p>
            <span className={styles.number}>5</span>
            <span className={styles.c}>font-size</span>:
            <span className={styles.aa}> 17px</span>;
          </p>
          <p>
            <span className={styles.number}>6</span>
            <span className={styles.c}>font-weight</span>:
            <span className={styles.aa}> 600</span>;
          </p>
          <p>
            <span className={styles.number}>7</span>
            <span className={styles.c}>padding</span>:
            <span className={styles.aa}> 1em 2em</span>;
          </p>
          <p>
            <span className={styles.number}>8</span>
            <span className={styles.c}>cursor</span>:
            <span className={styles.aa}> pointer</span>;
          </p>
          <p>
            <span className={styles.number}>9</span>
            <span className={styles.c}>transition</span>:
            <span className={styles.aa}> all 0.3s ease-in-out</span>;
          </p>
          <p>
            <span className={styles.number}>10</span>
            <span className={styles.c}>border</span>:
            <span className={styles.aa}> 1px solid black</span>;
          </p>
          <p>
            <span className={styles.number}>11</span>
            <span className={styles.c}>box-shadow</span>:
            <span className={styles.aa}> 0 0 0 0 black</span>;
          </p>
          <p>
            <span className={styles.number}>12</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>13</span>
            <span className={styles.a}>.button:hover</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>14</span>
            <span className={styles.c}>transform</span>:
            <span className={styles.aa}>
              {" "}
              translateY(-4px) translateX(-2px)
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>15</span>
            <span className={styles.c}>box-shadow</span>:
            <span className={styles.aa}> 2px 5px 0 0 black</span>;
          </p>
          <p>
            <span className={styles.number}>16</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>17</span>
            <span className={styles.a}>.button:active</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>18</span>
            <span className={styles.c}>transform</span>:
            <span className={styles.aa}> translateY(5px) translateX(1px)</span>;
          </p>
          <p>
            <span className={styles.number}>19</span>
            <span className={styles.c}>box-shadow</span>:
            <span className={styles.aa}> 0 0 0 0 black</span>;
          </p>
          <p>
            <span className={styles.number}>20</span>
            {`}`}
          </p>
        </div>
      )}
      {estado === "js3DYellow" && (
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

export default CodeBtn3DYellow;
