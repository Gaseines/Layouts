import React, { useCallback, useEffect, useRef, useState } from "react";

import styles from "./Code.module.css";

import Item from "./Item";

function Code({ linkHtml, linkCss, linkJs, children }) {
  const clickRefHtml = useRef(null);
  const clickRefCss = useRef(null);
  const clickRefJs = useRef(null);
  const [clickHtml, setClickHtml] = useState(false);
  const [clickCss, setClickCss] = useState(false);
  const [clickJs, setClickJs] = useState(false);

  const [estado, setEstado] = useState("html");

  const handleClick = useCallback(
    (event) => {
      if (event === "html") {
        setClickHtml(true);
        setClickCss(false);
        setClickJs(false);

        setEstado(linkHtml);
      } else if (event === "css") {
        setClickHtml(false);
        setClickCss(true);
        setClickJs(false);

        setEstado(linkCss);
      } else if (event === "js") {
        setClickHtml(false);
        setClickCss(false);
        setClickJs(true);

        setEstado(linkJs);
      }
    },
    [linkHtml, linkCss, linkJs]
  );

  useEffect(() => {
    const handleHtmlClick = () => handleClick("html");
    const handleCssClick = () => handleClick("css");
    const handleJsClick = () => handleClick("js");

    if (clickRefHtml.current) {
      clickRefHtml.current.addEventListener("click", handleHtmlClick);
    }
    if (clickRefCss.current) {
      clickRefCss.current.addEventListener("click", handleCssClick);
    }
    if (clickRefJs.current) {
      clickRefJs.current.addEventListener("click", handleJsClick);
    }

    return () => {
      if (clickRefHtml.current) {
        clickRefHtml.current.removeEventListener("click", handleHtmlClick);
      }
      if (clickRefCss.current) {
        clickRefCss.current.removeEventListener("click", handleCssClick);
      }
      if (clickRefJs.current) {
        clickRefJs.current.removeEventListener("click", handleJsClick);
      }
    };
  }, [handleClick]);

  return (
    <Item>
      <div className={styles.container_code}>
        <div className={styles.header_code}>
          <span className={`${styles.span1} ${styles.span}`}></span>
          <span className={`${styles.span2} ${styles.span}`}></span>
          <span className={`${styles.span3} ${styles.span}`}></span>
        </div>
        <div className={styles.code}>
          <nav className={styles.menu_code}>
            <ul>
              <li ref={clickRefHtml} className={clickHtml ? styles.click : ""}>
                HTML
              </li>
              <li ref={clickRefCss} className={clickCss ? styles.click : ""}>
                CSS
              </li>
              <li ref={clickRefJs} className={clickJs ? styles.click : ""}>
                JS
              </li>
            </ul>
          </nav>
          <div className={styles.escrita}>
            {children && React.cloneElement(children, { estado })}
          </div>
        </div>
      </div>
    </Item>
  );
}

export default Code;
