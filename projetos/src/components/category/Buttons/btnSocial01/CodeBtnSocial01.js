import styles from "../../StylesCode.module.css";
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeBtnSocial01({ estado }) {
  return (
    <>
      {(estado === "htmlSocial01" || estado === "html") && (
        <div className={styles.linha}>
          <p>
            <span className={styles.number}>
              1 <BiCaretRight />
            </span>
            <span className={styles.a}>
              {`<button `}
              <span className={styles.aa}>class</span>
            </span>{" "}
            = <span className={styles.v}>"btn-cssbuttons"</span>{" "}
            <span className={styles.a}>{`>`}</span>
          </p>
          <p>
            <span className={styles.number}>2</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`<span>`}</span>
            Social<span className={styles.a}>{`</span>`}</span>
          </p>
          <p>
            <span className={styles.number}>3</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`<span>`}</span>
          </p>
          <p>
            <span className={styles.number}>4</span>
            <span style={{ marginLeft: "65px" }} className={styles.a}>
              {`<svg `}
              <span className={styles.aa}>height</span> ={" "}
              <span className={styles.v}>"18"</span>{" "}
              <span className={styles.aa}>width</span> ={" "}
              <span className={styles.v}>"18"</span>{" "}
              <span className={styles.aa}>xmlns</span> ={" "}
              <span className={styles.v}>"http://www.w3.org/2000/svg"</span>{" "}
              <span className={styles.aa}>version</span> ={" "}
              <span className={styles.v}>"1.1"</span>{" "}
              <span className={styles.aa}>viewBox</span> ={" "}
              <span className={styles.v}>"0 0 1024 1024"</span>{" "}
              <span className={styles.aa}>class</span> ={" "}
              <span className={styles.v}>"icon"</span>{" "}
              <span className={styles.a}>{`>`}</span>
            </span>
          </p>
          <p>
            <span className={styles.number}>5</span>
            <span style={{ marginLeft: "85px" }} className={styles.a}>
              {`<path `}
              <span className={styles.aa}>fill</span> ={" "}
              <span className={styles.v}>"#9a82fb"</span>{" "}
              <span className={styles.aa}>d</span> ={" "}
              <span className={styles.v}>
                "M767.99994 585.142857q75.995429 0 129.462857
                53.394286t53.394286 129.462857-53.394286 129.462857-129.462857
                53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429
                1.170286-19.456l-205.677714-102.838857q-52.589714
                49.152-124.562286 49.152-75.995429
                0-129.462857-53.394286t-53.394286-129.462857
                53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286
                49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456
                0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857
                53.394286 53.394286 129.462857-53.394286 129.462857-129.462857
                53.394286q-71.972571 0-124.562286-49.152l-205.677714
                102.838857q1.170286 12.580571 1.170286 19.456t-1.170286
                19.456l205.677714 102.838857q52.589714-49.152
                124.562286-49.152z"
              </span>{" "}
              <span className={styles.a}>{`></path>`}</span>
            </span>
          </p>
          <p>
            <span className={styles.number}>6</span>
            <span
              style={{ marginLeft: "65px" }}
              className={styles.a}
            >{`</svg>`}</span>
          </p>
          <p>
            <span className={styles.number}>7</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`</span>`}</span>
          </p>
          <p>
            <span className={styles.number}>8</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`<ul>`}</span>
          </p>
          <p>
            <span className={styles.number}>9</span>
            <span
              style={{ marginLeft: "65px" }}
              className={styles.a}
            >{`<li>`}</span>
          </p>
          <p>
            <span className={styles.number}>10</span>
            <span style={{ marginLeft: "85px" }} className={styles.a}>
              {`<a `}
              <span className={styles.aa}>href</span> ={" "}
              <span className={styles.v}>"https://twitter.com/SumethWrrn"</span>{" "}
              <span className={styles.a}>{`>`}</span>
            </span>
          </p>
          <p>
            <span className={styles.number}>11</span>
            <span style={{ marginLeft: "105px" }} className={styles.a}>
              {`<svg `}
              <span className={styles.aa}>height</span> ={" "}
              <span className={styles.v}>"18"</span>{" "}
              <span className={styles.aa}>width</span> ={" "}
              <span className={styles.v}>"18"</span>{" "}
              <span className={styles.aa}>xmlns</span> ={" "}
              <span className={styles.v}>"http://www.w3.org/2000/svg"</span>{" "}
              <span className={styles.aa}>version</span> ={" "}
              <span className={styles.v}>"1.1"</span>{" "}
              <span className={styles.aa}>viewBox</span> ={" "}
              <span className={styles.v}>"0 0 1024 1024"</span>{" "}
              <span className={styles.aa}>class</span> ={" "}
              <span className={styles.v}>"icon"</span>{" "}
              <span className={styles.a}>{`>`}</span>
            </span>
          </p>
          <p>
            <span className={styles.number}>12</span>
            <span style={{ marginLeft: "125px" }} className={styles.a}>
              {`<path `}
              <span className={styles.aa}>fill</span> ={" "}
              <span className={styles.v}>"#9a82fb"</span>{" "}
              <span className={styles.aa}>d</span> ={" "}
              <span className={styles.v}>
                "M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429
                0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429
                148.260571t-65.974857 141.970286-105.398857 120.32-147.456
                83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857
                19.968 2.267429 44.544 2.267429 128.585143 0
                229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857
                2.852571 34.889143 2.852571 24.576 0
                48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857
                21.723429 83.456
                23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286
                25.161143-93.110857 69.12 85.138286 168.301714
                136.265143t212.260571
                56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571
                53.979429-130.56t130.56-53.979429q80.018286 0 134.875429
                58.294857 62.317714-11.995429 117.174857-44.544-21.138286
                65.682286-81.115429 101.741714 53.174857-5.705143
                106.276571-28.598857z"
              </span>{" "}
              <span className={styles.a}>{`></path>`}</span>
            </span>
          </p>
          <p>
            <span className={styles.number}>13</span>
            <span
              style={{ marginLeft: "105px" }}
              className={styles.a}
            >{`</svg>`}</span>
          </p>
          <p>
            <span className={styles.number}>14</span>
            <span
              style={{ marginLeft: "85px" }}
              className={styles.a}
            >{`</a>`}</span>
          </p>
          <p>
            <span className={styles.number}>15</span>
            <span
              style={{ marginLeft: "65px" }}
              className={styles.a}
            >{`</li>`}</span>
          </p>
          <p>
            <span className={styles.number}>16</span>
            <span
              style={{ marginLeft: "65px" }}
              className={styles.a}
            >{`<li>`}</span>
          </p>
          <p>
            <span className={styles.number}>17</span>
            <span style={{ marginLeft: "85px" }} className={styles.a}>
              {`<a `}
              <span className={styles.aa}>href</span> ={" "}
              <span className={styles.v}>"https://codepen.io/sharpth"</span>{" "}
              <span className={styles.a}>{`>`}</span>
            </span>
          </p>
          <p>
            <span className={styles.number}>18</span>
            <span style={{ marginLeft: "105px" }} className={styles.a}>
              {`<svg `}
              <span className={styles.aa}>height</span> ={" "}
              <span className={styles.v}>"18"</span>{" "}
              <span className={styles.aa}>width</span> ={" "}
              <span className={styles.v}>"18"</span>{" "}
              <span className={styles.aa}>xmlns</span> ={" "}
              <span className={styles.v}>"http://www.w3.org/2000/svg"</span>{" "}
              <span className={styles.aa}>version</span> ={" "}
              <span className={styles.v}>"1.1"</span>{" "}
              <span className={styles.aa}>viewBox</span> ={" "}
              <span className={styles.v}>"0 0 1024 1024"</span>{" "}
              <span className={styles.aa}>class</span> ={" "}
              <span className={styles.v}>"icon"</span>{" "}
              <span className={styles.a}>{`>`}</span>
            </span>
          </p>
          <p>
            <span className={styles.number}>19</span>
            <span style={{ marginLeft: "125px" }} className={styles.a}>
              {`<path `}
              <span className={styles.aa}>fill</span> ={" "}
              <span className={styles.v}>"#9a82fb"</span>{" "}
              <span className={styles.aa}>d</span> ={" "}
              <span className={styles.v}>
                "M123.52064 667.99143l344.526782 229.708899
                0-205.136409-190.802457-127.396658zM88.051421
                585.717469l110.283674-73.717469-110.283674-73.717469 0
                147.434938zM556.025711
                897.627196l344.526782-229.708899-153.724325-102.824168-190.802457
                127.396658 0 205.136409zM512
                615.994287l155.406371-103.994287-155.406371-103.994287-155.406371
                103.994287zM277.171833 458.832738l190.802457-127.396658
                0-205.136409-344.526782 229.708899zM825.664905 512l110.283674
                73.717469 0-147.434938zM746.828167
                458.832738l153.724325-102.824168-344.526782-229.708899 0
                205.136409zM1023.926868 356.00857l0 311.98286q0
                23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715
                7.459506-24.57249
                7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371
                19.453221-36.566205l467.901157-311.98286q11.993715-7.459506
                24.57249-7.459506t24.57249 7.459506l467.901157
                311.98286q19.453221 13.163834 19.453221 36.566205z"
              </span>{" "}
              <span className={styles.a}>{`></path>`}</span>
            </span>
          </p>
          <p>
            <span className={styles.number}>20</span>
            <span
              style={{ marginLeft: "105px" }}
              className={styles.a}
            >{`</svg>`}</span>
          </p>
          <p>
            <span className={styles.number}>21</span>
            <span
              style={{ marginLeft: "85px" }}
              className={styles.a}
            >{`</a>`}</span>
          </p>
          <p>
            <span className={styles.number}>22</span>
            <span
              style={{ marginLeft: "65px" }}
              className={styles.a}
            >{`</li>`}</span>
          </p>
          <p>
            <span className={styles.number}>23</span>
            <span
              style={{ marginLeft: "65px" }}
              className={styles.a}
            >{`<li>`}</span>
          </p>
          <p>
            <span className={styles.number}>24</span>
            <span style={{ marginLeft: "85px" }} className={styles.a}>
              {`<a `}
              <span className={styles.aa}>href</span> ={" "}
              <span className={styles.v}>"https://github.com/SharpTH"</span>{" "}
              <span className={styles.a}>{`>`}</span>
            </span>
          </p>
          <p>
            <span className={styles.number}>25</span>
            <span style={{ marginLeft: "105px" }} className={styles.a}>
              {`<svg `}
              <span className={styles.aa}>height</span> ={" "}
              <span className={styles.v}>"18"</span>{" "}
              <span className={styles.aa}>width</span> ={" "}
              <span className={styles.v}>"18"</span>{" "}
              <span className={styles.aa}>xmlns</span> ={" "}
              <span className={styles.v}>"http://www.w3.org/2000/svg"</span>{" "}
              <span className={styles.aa}>version</span> ={" "}
              <span className={styles.v}>"1.1"</span>{" "}
              <span className={styles.aa}>viewBox</span> ={" "}
              <span className={styles.v}>"0 0 1024 1024"</span>{" "}
              <span className={styles.aa}>class</span> ={" "}
              <span className={styles.v}>"icon"</span>{" "}
              <span className={styles.a}>{`>`}</span>
            </span>
          </p>
          <p>
            <span className={styles.number}>26</span>
            <span style={{ marginLeft: "125px" }} className={styles.a}>
              {`<path `}
              <span className={styles.aa}>fill</span> ={" "}
              <span className={styles.v}>"#9a82fb"</span>{" "}
              <span className={styles.aa}>d</span> ={" "}
              <span className={styles.v}>
                "M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429
                158.573714q-15.433143
                2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429
                32.548571-3.437714 58.587429-10.313143t53.686857-22.308571
                46.299429-38.034286 30.281143-59.977143
                11.702857-86.016q0-69.12-45.129143-117.686857
                21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429
                6.290286t-52.589714 25.161143l-21.723429
                13.677714q-53.174857-14.848-109.714286-14.848t-109.714286
                14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143
                64.585143-4.022857 116.589714-45.129143 48.566857-45.129143
                117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143
                46.006857 38.253714 53.686857 22.308571 58.587429
                10.313143q-22.820571 20.553143-28.013714 58.88-11.995429
                5.705143-25.746286 8.557714t-32.548571
                2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429
                0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571
                6.875429l4.022857 2.852571q12.580571 5.705143 24.868571
                21.723429t17.993143 29.110857l5.705143 13.165714q7.460571
                21.723429 25.161143 35.108571t38.253714 17.115429 39.716571
                4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571
                50.834286t0.292571 30.866286q0 10.313143-7.460571
                17.115429t-22.820571
                4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286
                58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286
                58.88 159.744 159.744 58.88 220.306286z"
              </span>{" "}
              <span className={styles.a}>{`></path>`}</span>
            </span>
          </p>
          <p>
            <span className={styles.number}>27</span>
            <span
              style={{ marginLeft: "105px" }}
              className={styles.a}
            >{`</svg>`}</span>
          </p>
          <p>
            <span className={styles.number}>28</span>
            <span
              style={{ marginLeft: "85px" }}
              className={styles.a}
            >{`</a>`}</span>
          </p>
          <p>
            <span className={styles.number}>29</span>
            <span
              style={{ marginLeft: "65px" }}
              className={styles.a}
            >{`</li>`}</span>
          </p>
          <p>
            <span className={styles.number}>30</span>
            <span
              style={{ marginLeft: "45px" }}
              className={styles.a}
            >{`</ul>`}</span>
          </p>
          <p>
            <span className={styles.number}>31</span>
            <span className={styles.a}>{`</button>`}</span>
          </p>
        </div>
      )}
      {estado === "cssSocial01" && (
        <div className={styles.linha}>
          <p>
            <span className={styles.number}>
              1 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.btn-cssbuttons`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>2</span>
            <span className={styles.c}>--btn-color</span>:{" "}
            <span className={styles.l}>#4d4557</span>;
          </p>
          <p>
            <span className={styles.number}>3</span>
            <span className={styles.c}>position</span>:{" "}
            <span className={styles.l}>relative</span>;
          </p>
          <p>
            <span className={styles.number}>4</span>
            <span className={styles.c}>padding</span>:{" "}
            <span className={styles.l}>16px 32px</span>;
          </p>
          <p>
            <span className={styles.number}>5</span>
            <span className={styles.c}>font-family</span>:{" "}
            <span className={styles.l}>Roboto, sans-serif</span>;
          </p>
          <p>
            <span className={styles.number}>6</span>
            <span className={styles.c}>font-weight</span>:{" "}
            <span className={styles.l}>500</span>;
          </p>
          <p>
            <span className={styles.number}>7</span>
            <span className={styles.c}>font-size</span>:{" "}
            <span className={styles.l}>16px</span>;
          </p>
          <p>
            <span className={styles.number}>8</span>
            <span className={styles.c}>line-height</span>:{" "}
            <span className={styles.l}>1</span>;
          </p>
          <p>
            <span className={styles.number}>9</span>
            <span className={styles.c}>color</span>:{" "}
            <span className={styles.l}>white</span>;
          </p>
          <p>
            <span className={styles.number}>10</span>
            <span className={styles.c}>background</span>:{" "}
            <span className={styles.l}>none</span>;
          </p>
          <p>
            <span className={styles.number}>11</span>
            <span className={styles.c}>border</span>:{" "}
            <span className={styles.l}>none</span>;
          </p>
          <p>
            <span className={styles.number}>12</span>
            <span className={styles.c}>outline</span>:{" "}
            <span className={styles.l}>none</span>;
          </p>
          <p>
            <span className={styles.number}>13</span>
            <span className={styles.c}>overflow</span>:{" "}
            <span className={styles.l}>hidden</span>;
          </p>
          <p>
            <span className={styles.number}>14</span>
            <span className={styles.c}>cursor</span>:{" "}
            <span className={styles.l}>pointer</span>;
          </p>
          <p>
            <span className={styles.number}>15</span>
            <span className={styles.c}>filter</span>:{" "}
            <span className={styles.l}>
              drop-shadow(0 2px 8px rgba(39, 94, 254, 0.32))
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>16</span>
            <span className={styles.c}>transition</span>:{" "}
            <span className={styles.l}>
              0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>17</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              18 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.btn-cssbuttons::before`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>19</span>
            <span className={styles.c}>position</span>:{" "}
            <span className={styles.l}>absolute</span>;
          </p>
          <p>
            <span className={styles.number}>20</span>
            <span className={styles.c}>content</span>:{" "}
            <span className={styles.l}>""</span>;
          </p>
          <p>
            <span className={styles.number}>21</span>
            <span className={styles.c}>top</span>:{" "}
            <span className={styles.l}>0</span>;
          </p>
          <p>
            <span className={styles.number}>22</span>
            <span className={styles.c}>left</span>:{" "}
            <span className={styles.l}>0</span>;
          </p>
          <p>
            <span className={styles.number}>23</span>
            <span className={styles.c}>z-index</span>:{" "}
            <span className={styles.l}>-1</span>;
          </p>
          <p>
            <span className={styles.number}>24</span>
            <span className={styles.c}>width</span>:{" "}
            <span className={styles.l}>100%</span>;
          </p>
          <p>
            <span className={styles.number}>25</span>
            <span className={styles.c}>height</span>:{" "}
            <span className={styles.l}>100%</span>;
          </p>
          <p>
            <span className={styles.number}>26</span>
            <span className={styles.c}>background</span>:{" "}
            <span className={styles.l}>var(--btn-color)</span>;
          </p>
          <p>
            <span className={styles.number}>27</span>
            <span className={styles.c}>border-radius</span>:{" "}
            <span className={styles.l}>24px</span>;
          </p>
          <p>
            <span className={styles.number}>28</span>
            <span className={styles.c}>transition</span>:{" "}
            <span className={styles.l}>
              0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>29</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              30 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.btn-cssbuttons span`}</span>
            {`, `}
            <span className={styles.a}>{`.btn-cssbuttons span span`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>31</span>
            <span className={styles.c}>display</span>:{" "}
            <span className={styles.l}>inline-flex</span>;
          </p>
          <p>
            <span className={styles.number}>32</span>
            <span className={styles.c}>vertical-align</span>:{" "}
            <span className={styles.l}>middle</span>;
          </p>
          <p>
            <span className={styles.number}>33</span>
            <span className={styles.c}>transition</span>:{" "}
            <span className={styles.l}>
              0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>34</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>35</span>
            <span className={styles.a}>{`.btn-cssbuttons span`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>36</span>
            <span className={styles.c}>transition-delay</span>:{" "}
            <span className={styles.l}>0.05s</span>;
          </p>
          <p>
            <span className={styles.number}>37</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              38 <BiCaretRight />
            </span>
            <span
              className={styles.a}
            >{`.btn-cssbuttons span:first-child`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>39</span>
            <span className={styles.c}>padding-right</span>:{" "}
            <span className={styles.l}>7px</span>;
          </p>
          <p>
            <span className={styles.number}>40</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              41 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.btn-cssbuttons span span`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>42</span>
            <span className={styles.c}>margin-left</span>:{" "}
            <span className={styles.l}>8px</span>;
          </p>
          <p>
            <span className={styles.number}>43</span>
            <span className={styles.c}>transition-delay</span>:{" "}
            <span className={styles.l}>0.1s</span>;
          </p>
          <p>
            <span className={styles.number}>44</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              45 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.btn-cssbuttons ul`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>46</span>
            <span className={styles.c}>position</span>:{" "}
            <span className={styles.l}>absolute</span>;
          </p>
          <p>
            <span className={styles.number}>47</span>
            <span className={styles.c}>top</span>:{" "}
            <span className={styles.l}>50%</span>;
          </p>
          <p>
            <span className={styles.number}>48</span>
            <span className={styles.c}>left</span>:{" "}
            <span className={styles.l}>0</span>;
          </p>
          <p>
            <span className={styles.number}>49</span>
            <span className={styles.c}>right</span>:{" "}
            <span className={styles.l}>0</span>;
          </p>
          <p>
            <span className={styles.number}>50</span>
            <span className={styles.c}>display</span>:{" "}
            <span className={styles.l}>flex</span>;
          </p>
          <p>
            <span className={styles.number}>51</span>
            <span className={styles.c}>margin</span>:{" "}
            <span className={styles.l}>0</span>;
          </p>
          <p>
            <span className={styles.number}>52</span>
            <span className={styles.c}>padding</span>:{" "}
            <span className={styles.l}>0</span>;
          </p>
          <p>
            <span className={styles.number}>53</span>
            <span className={styles.c}>list-style-type</span>:{" "}
            <span className={styles.l}>none</span>;
          </p>
          <p>
            <span className={styles.number}>54</span>
            <span className={styles.c}>transform</span>:{" "}
            <span className={styles.l}>translateY(-50%)</span>;
          </p>
          <p>
            <span className={styles.number}>55</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              56 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.btn-cssbuttons ul li`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>57</span>
            <span className={styles.c}>flex</span>:{" "}
            <span className={styles.l}>1</span>;
          </p>
          <p>
            <span className={styles.number}>58</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              59 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.btn-cssbuttons ul li a`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>60</span>
            <span className={styles.c}>display</span>:{" "}
            <span className={styles.l}>inline-flex</span>;
          </p>
          <p>
            <span className={styles.number}>61</span>
            <span className={styles.c}>vertical-align</span>:{" "}
            <span className={styles.l}>middle</span>;
          </p>
          <p>
            <span className={styles.number}>62</span>
            <span className={styles.c}>transform</span>:{" "}
            <span className={styles.l}>translateY(55px)</span>;
          </p>
          <p>
            <span className={styles.number}>63</span>
            <span className={styles.c}>transition</span>:{" "}
            <span className={styles.l}>
              0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
            </span>
            ;
          </p>
          <p>
            <span className={styles.number}>64</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              65 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.btn-cssbuttons ul li a:hover`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>66</span>
            <span className={styles.c}>opacity</span>:{" "}
            <span className={styles.l}>0.5</span>;
          </p>
          <p>
            <span className={styles.number}>67</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              68 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.btn-cssbuttons:hover::before`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>69</span>
            <span className={styles.c}>transform</span>:{" "}
            <span className={styles.l}>scale(1.2)</span>;
          </p>
          <p>
            <span className={styles.number}>70</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              71 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.btn-cssbuttons:hover span`}</span>
            {`, `}
            <span
              className={styles.a}
            >{`.btn-cssbuttons:hover span span`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>72</span>
            <span className={styles.c}>transform</span>:{" "}
            <span className={styles.l}>translateY(-55px)</span>;
          </p>
          <p>
            <span className={styles.number}>73</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              74 <BiCaretRight />
            </span>
            <span className={styles.a}>{`.btn-cssbuttons:hover ul li a`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>75</span>
            <span className={styles.c}>transform</span>:{" "}
            <span className={styles.l}>translateY(0)</span>;
          </p>
          <p>
            <span className={styles.number}>76</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              77 <BiCaretRight />
            </span>
            <span
              className={styles.a}
            >{`.btn-cssbuttons:hover ul li:nth-child(1) a`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>78</span>
            <span className={styles.c}>transition-delay</span>:{" "}
            <span className={styles.l}>0.15s</span>;
          </p>
          <p>
            <span className={styles.number}>79</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              80 <BiCaretRight />
            </span>
            <span
              className={styles.a}
            >{`.btn-cssbuttons:hover ul li:nth-child(2) a`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>81</span>
            <span className={styles.c}>transition-delay</span>:{" "}
            <span className={styles.l}>0.2s</span>;
          </p>
          <p>
            <span className={styles.number}>82</span>
            {`}`}
          </p>
          <p>
            <span className={styles.number}>
              83 <BiCaretRight />
            </span>
            <span
              className={styles.a}
            >{`.btn-cssbuttons:hover ul li:nth-child(3) a`}</span>
            {`{`}
          </p>
          <p>
            <span className={styles.number}>84</span>
            <span className={styles.c}>transition-delay</span>:{" "}
            <span className={styles.l}>0.25s</span>;
          </p>
          <p>
            <span className={styles.number}>85</span>
            {`}`}
          </p>
        </div>
      )}
      {estado === "jsSocial01" && (
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

export default CodeBtnSocial01;
