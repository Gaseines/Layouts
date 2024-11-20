import styles from "../../StylesCode.module.css";
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeBtnUniverse({ estado }) {
  return (
    <>
      {(estado === "htmlUniverse" || estado === "html") && (
        <div className={styles.linha}>
          <p>
            <span className={styles.number}>
              1 <BiCaretRight />
            </span>
            <span className={styles.a}>
              {`<button `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"shadow__btn"</span>{" "}
            <span className={styles.a}>{`>`}</span>
          </p>
          <p>
            <span className={styles.number}>2</span>
            <span style={{ marginLeft: "45px" }} className={styles.b}>
              Universo
            </span>
          </p>
          <p>
            <span className={styles.number}>3</span>
            <span className={styles.a}>{`</button>`}</span>
          </p>
        </div>
      )}
      {estado === "cssUniverse" && (
        <div className={styles.linha}>
          <p>
            <span className={styles.number}>
              1 <BiCaretDown />
            </span>
            <span className={styles.a}>{`.shadow__btn`}</span>{" "}
            <span className={styles.a}>{`{`}</span>
          </p>
          <p>
            <span className={styles.number}>2</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              padding
            </span>
            : <span className={styles.v}>10px 20px</span>;
          </p>
          <p>
            <span className={styles.number}>3</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              border
            </span>
            : <span className={styles.v}>none</span>;
          </p>
          <p>
            <span className={styles.number}>4</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              font-size
            </span>
            : <span className={styles.v}>17px</span>;
          </p>
          <p>
            <span className={styles.number}>5</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              color
            </span>
            : <span className={styles.v}>#fff</span>;
          </p>
          <p>
            <span className={styles.number}>6</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              border-radius
            </span>
            : <span className={styles.v}>7px</span>;
          </p>
          <p>
            <span className={styles.number}>7</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              letter-spacing
            </span>
            : <span className={styles.v}>4px</span>;
          </p>
          <p>
            <span className={styles.number}>8</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              font-weight
            </span>
            : <span className={styles.v}>700</span>;
          </p>
          <p>
            <span className={styles.number}>9</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              text-transform
            </span>
            : <span className={styles.v}>uppercase</span>;
          </p>
          <p>
            <span className={styles.number}>10</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              transition
            </span>
            : <span className={styles.v}>0.5s</span>;
          </p>
          <p>
            <span className={styles.number}>11</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              transition-property
            </span>
            : <span className={styles.v}>box-shadow</span>;
          </p>
          <p>
            <span className={styles.number}>12</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              cursor
            </span>
            : <span className={styles.v}>pointer</span>;
          </p>
          <p>
            <span className={styles.number}>13</span>
            <span className={styles.a}>{`}`}</span>
          </p>
          <p>
            <span className={styles.number}>
              14 <BiCaretDown />
            </span>
            <span className={styles.a}>{`.shadow__btn`}</span>{" "}
            <span className={styles.a}>{`{`}</span>
          </p>
          <p>
            <span className={styles.number}>15</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              background
            </span>
            : <span className={styles.v}>rgb(131, 11, 187)</span>;
          </p>
          <p>
            <span className={styles.number}>16</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              box-shadow
            </span>
            : <span className={styles.v}>0 0 25px rgb(204, 0, 255)</span>;
          </p>
          <p>
            <span className={styles.number}>17</span>
            <span className={styles.a}>{`}`}</span>
          </p>
          <p>
            <span className={styles.number}>
              18 <BiCaretDown />
            </span>
            <span className={styles.a}>{`.shadow__btn:hover`}</span>{" "}
            <span className={styles.a}>{`{`}</span>
          </p>
          <p>
            <span className={styles.number}>19</span>
            <span style={{ marginLeft: "45px" }} className={styles.c}>
              box-shadow
            </span>
            : <span className={styles.v}>0 0 5px rgb(204, 0, 255)</span>,
            <span className={styles.v}>0 0 25px rgb(204, 0, 255)</span>,
            <span className={styles.v}>0 0 50px rgb(204, 0, 255)</span>,
            <span className={styles.v}>0 0 100px rgb(204, 0, 255)</span>;
          </p>
          <p>
            <span className={styles.number}>20</span>
            <span className={styles.a}>{`}`}</span>
          </p>
        </div>
      )}
      {estado === "jsUniverse" && (
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

export default CodeBtnUniverse;
