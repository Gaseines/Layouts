import styles from '../../StylesCode.module.css'
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function CodeCardPizza({ estado }) {
    return (
        <>
            {(estado === 'htmlCardPizza' || estado === 'html') && (

                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1 <BiCaretRight /></span>
                        <span className={styles.a}>{`<div `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"card"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"content"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"back"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span></span> = <span className={styles.v}>"back-content"</span> <span className={styles.a}>{`>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span style={{ marginLeft: "105px" }} className={styles.a}>{`<svg `}<span className={styles.aa}>stroke</span> = <span className={styles.v}>"#ffffff"</span> <span className={styles.aa}>xmlns:xlink</span> = <span className={styles.v}>"http://www.w3.org/1999/xlink"</span> <span className={styles.aa}>xmlns</span> = <span className={styles.v}>"http://www.w3.org/2000/svg"</span> <span className={styles.aa}>viewBox</span> = <span className={styles.v}>"0 0 50 50"</span> <span className={styles.aa}>height</span> = <span className={styles.v}>"50px"</span> <span className={styles.aa}>width</span> = <span className={styles.v}>"50px"</span> <span className={styles.aa}>fill</span> = <span className={styles.v}>"#ffffff"</span> <span className={styles.a}>{`>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>6</span>
                        <span style={{ marginLeft: "125px" }} className={styles.a}>{`<g `}<span className={styles.aa}>stroke-width</span> = <span className={styles.v}>"0"</span> <span className={styles.aa}>id</span> = <span className={styles.v}>"SVGRepo_bgCarrier"</span> <span className={styles.a}>{`></g>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        <span style={{ marginLeft: "125px" }} className={styles.a}>{`<g `}<span className={styles.aa}>stroke-linejoin</span> = <span className={styles.v}>"round"</span> <span className={styles.aa}>stroke-linecap</span> = <span className={styles.v}>"round"</span> <span className={styles.aa}>id</span> = <span className={styles.v}>"SVGRepo_tracerCarrier"</span> <span className={styles.a}>{`></g>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>8</span>
                        <span style={{ marginLeft: "125px" }} className={styles.a}>{`<g `}<span className={styles.aa}>id</span> = <span className={styles.v}>"SVGRepo_iconCarrier"</span> <span className={styles.a}>{`>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span style={{ marginLeft: "145px" }} className={styles.a}>{`<path `}<span className={styles.aa}>d</span> = <span className={styles.v}>"M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z M 17 16C19.761719 16 22 18.238281 22 21C22 23.761719 19.761719 26 17 26C15.140625 26 13.550781 24.972656 12.6875 23.46875L15.6875 16.1875C16.101563 16.074219 16.550781 16 17 16 Z M 31 22C32.65625 22 34 23.34375 34 25C34 25.917969 33.585938 26.730469 32.9375 27.28125L32.90625 27.28125C33.570313 27.996094 34 28.949219 34 30C34 32.210938 32.210938 34 30 34C27.789063 34 26 32.210938 26 30C26 28.359375 26.996094 26.960938 28.40625 26.34375L28.3125 26.3125C28.117188 25.917969 28 25.472656 28 25C28 23.34375 29.34375 22 31 22 Z M 21 32C23.210938 32 25 33.789063 25 36C25 36.855469 24.710938 37.660156 24.25 38.3125L20.3125 39.9375C18.429688 39.609375 17 37.976563 17 36C17 33.789063 18.789063 32 21 32 Z M 9 34C10.65625 34 12 35.34375 12 37C12 38.65625 10.65625 40 9 40C7.902344 40 6.960938 39.414063 6.4375 38.53125L8.25 34.09375C8.488281 34.03125 8.742188 34 9 34Z"</span> <span className={styles.a}>{`></path>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span style={{ marginLeft: "125px" }} className={styles.a}>{`</g></svg>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span style={{ marginLeft: "105px" }} className={styles.a}>{`<strong>`}</span>Pizza de calabresa<span className={styles.a}>{`</strong>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>{`</div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>{`</div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>14</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"front"</span> <span className={styles.a}>{`>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"img"</span> <span className={styles.a}>{`>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span style={{ marginLeft: "105px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"circle"</span> <span className={styles.a}>{`></div>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        <span style={{ marginLeft: "105px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"circle"</span> <span className={styles.aa}>id</span> = <span className={styles.v}>"right"</span> <span className={styles.a}>{`></div>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        <span style={{ marginLeft: "105px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"circle"</span> <span className={styles.aa}>id</span> = <span className={styles.v}>"bottom"</span> <span className={styles.a}>{`></div>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>19</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>{`</div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"front-content"</span> <span className={styles.a}>{`>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        <span style={{ marginLeft: "105px" }} className={styles.a}>{`<small `}<span className={styles.aa}>class</span> = <span className={styles.v}>"badge"</span> <span className={styles.a}>{`>`}</span></span>Pizza<span className={styles.a}>{`</small>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>22</span>
                        <span style={{ marginLeft: "105px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"description"</span> <span className={styles.a}>{`>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        <span style={{ marginLeft: "125px" }} className={styles.a}>{`<div `}<span className={styles.aa}>class</span> = <span className={styles.v}>"title"</span> <span className={styles.a}>{`>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>24</span>
                        <span style={{ marginLeft: "145px" }} className={styles.a}>{`<p `}<span className={styles.aa}>class</span> = <span className={styles.v}>"title"</span> <span className={styles.a}>{`>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>25</span>
                        <span style={{ marginLeft: "165px" }} className={styles.a}>{`<strong>`}</span>Pizza de calabresa<span className={styles.a}>{`</strong></p>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>26 <BiCaretRight /></span>
                        <span style={{ marginLeft: "165px" }} className={styles.a}>{`<svg `}<span className={styles.aa}>fill-rule</span> = <span className={styles.v}>"nonzero"</span> <span className={styles.aa}>height</span> = <span className={styles.v}>"15px"</span> <span className={styles.aa}>width</span> = <span className={styles.v}>"15px"</span> <span className={styles.aa}>viewBox</span> = <span className={styles.v}>"0,0,256,256"</span> <span className={styles.aa}>xmlns:xlink</span> = <span className={styles.v}>"http://www.w3.org/1999/xlink"</span> <span className={styles.aa}>xmlns</span> = <span className={styles.v}>"http://www.w3.org/2000/svg"</span> <span className={styles.a}>{`>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>27</span>
                        <span style={{ marginLeft: "195px" }} className={styles.a}>{`<g `}<span className={styles.aa}>style</span> = <span className={styles.v}>"mix-blend-mode: normal"</span> <span className={styles.aa}>text-anchor</span> = <span className={styles.v}>"none"</span> <span className={styles.aa}>font-size</span> = <span className={styles.v}>"none"</span> <span className={styles.aa}>font-weight</span> = <span className={styles.v}>"none"</span> <span className={styles.aa}>font-family</span> = <span className={styles.v}>"none"</span> <span className={styles.aa}>stroke-dashoffset</span> = <span className={styles.v}>"0"</span> <span className={styles.aa}>stroke-dasharray</span> = <span className={styles.v}>""</span> <span className={styles.aa}>stroke-miterlimit</span> = <span className={styles.v}>"10"</span> <span className={styles.aa}>stroke-linejoin</span> = <span className={styles.v}>"miter"</span> <span className={styles.aa}>stroke-linecap</span> = <span className={styles.v}>"butt"</span> <span className={styles.aa}>stroke-width</span> = <span className={styles.v}>"1"</span> <span className={styles.aa}>stroke</span> = <span className={styles.v}>"none"</span> <span className={styles.aa}>fill-rule</span> = <span className={styles.v}>"nonzero"</span> <span className={styles.aa}>fill</span> = <span className={styles.v}>"#20c997"</span> <span className={styles.a}>{`>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span style={{ marginLeft: "215px" }} className={styles.a}>{`<g `}<span className={styles.aa}>transform</span> = <span className={styles.v}>"scale(8,8)"</span> <span className={styles.a}>{`>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        <span style={{ marginLeft: "215px" }} className={styles.a}>{`<path `}<span className={styles.aa}>d</span> = <span className={styles.v}>"M25,27l-9,-6.75l-9,6.75v-23h18z"</span> <span className={styles.a}>{`></path>`}</span></span>
                    </p>
                    <p>
                        <span className={styles.number}>30</span>
                        <span style={{ marginLeft: "215px" }} className={styles.a}>{`</g>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>31</span>
                        <span style={{ marginLeft: "195px" }} className={styles.a}>{`</g>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>32</span>
                        <span style={{ marginLeft: "165px" }} className={styles.a}>{`</svg>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>33</span>
                        <span style={{ marginLeft: "125px" }} className={styles.a}>{`</div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>34</span>
                        <span style={{ marginLeft: "125px" }} className={styles.a}>{`<p `}<span className={styles.aa}>class</span> = <span className={styles.v}>"card-footer"</span> <span className={styles.a}>{`>`}</span></span>30 Mins &nbsp; | &nbsp; 10 Servidos<span className={styles.a}>{`</p>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>35</span>
                        <span style={{ marginLeft: "105px" }} className={styles.a}>{`</div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>36</span>
                        <span style={{ marginLeft: "85px" }} className={styles.a}>{`</div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>37</span>
                        <span style={{ marginLeft: "65px" }} className={styles.a}>{`</div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>38</span>
                        <span style={{ marginLeft: "45px" }} className={styles.a}>{`</div>`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>39</span>
                        <span className={styles.a}>{`</div>`}</span>
                    </p>
                </div>



            )}{estado === 'cssCardPizza' && (
                <div className={styles.linha}>
                    <p>
                        <span className={styles.number}>1</span>
                        <span className={styles.a}>{`.card `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>2</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>overflow</span>: <span className={styles.aa}>visible</span>;
                    </p>
                    <p>
                        <span className={styles.number}>3</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>width</span>: <span className={styles.l}>190px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>4</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>height</span>: <span className={styles.l}>254px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>5</span>
                        <span className={styles.a}>{`}`}</span>
                    </p>

                    <p>
                        <span className={styles.number}>6</span>
                        <span className={styles.a}>{`.content `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>7</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>width</span>: <span className={styles.l}>100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>8</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>height</span>: <span className={styles.l}>100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>9</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>transform-style</span>: <span className={styles.aa}>preserve-3d</span>;
                    </p>
                    <p>
                        <span className={styles.number}>10</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>transition</span>: <span className={styles.aa}>transform 300ms</span>;
                    </p>
                    <p>
                        <span className={styles.number}>11</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>box-shadow</span>: <span className={styles.l}>0px 0px 10px 1px #000000ee</span>;
                    </p>
                    <p>
                        <span className={styles.number}>12</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>border-radius</span>: <span className={styles.l}>5px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>13</span>
                        <span className={styles.a}>{`}`}</span>
                    </p>

                    <p>
                        <span className={styles.number}>14</span>
                        <span className={styles.a}>{`.front, .back `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>15</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>background-color</span>: <span className={styles.l}>#151515</span>;
                    </p>
                    <p>
                        <span className={styles.number}>16</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>position</span>: <span className={styles.l}>absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>17</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>width</span>: <span className={styles.l}>100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>18</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>height</span>: <span className={styles.l}>100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>19</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>backface-visibility</span>: <span className={styles.aa}>hidden</span>;
                    </p>
                    <p>
                        <span className={styles.number}>20</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>-webkit-backface-visibility</span>: <span className={styles.aa}>hidden</span>;
                    </p>
                    <p>
                        <span className={styles.number}>21</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>border-radius</span>: <span className={styles.l}>5px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>22</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>overflow</span>: <span className={styles.aa}>hidden</span>;
                    </p>
                    <p>
                        <span className={styles.number}>23</span>
                        <span className={styles.a}>{`}`}</span>
                    </p>

                    <p>
                        <span className={styles.number}>24</span>
                        <span className={styles.a}>{`.back::before `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>25</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>position</span>: <span className={styles.l}>absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>26</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>content</span>: <span className={styles.aa}>' '</span>;
                    </p>
                    <p>
                        <span className={styles.number}>27</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>display</span>: <span className={styles.l}>block</span>;
                    </p>
                    <p>
                        <span className={styles.number}>28</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>width</span>: <span className={styles.l}>160px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>29</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>height</span>: <span className={styles.l}>160%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>30</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>background</span>: <span className={styles.aa}>linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>31</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>animation</span>: <span className={styles.l}>rotation_481 5000ms infinite linear</span>;
                    </p>
                    <p>
                        <span className={styles.number}>32</span>
                        <span className={styles.a}>{`}`}</span>
                    </p>

                    <p>
                        <span className={styles.number}>33</span>
                        <span className={styles.a}>{`.back-content `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>34</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>position</span>: <span className={styles.l}>absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>35</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>width</span>: <span className={styles.l}>99%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>36</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>height</span>: <span className={styles.l}>99%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>37</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>background-color</span>: <span className={styles.l}>#151515</span>;
                    </p>
                    <p>
                        <span className={styles.number}>38</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>border-radius</span>: <span className={styles.l}>5px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>39</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>color</span>: <span className={styles.l}>white</span>;
                    </p>
                    <p>
                        <span className={styles.number}>40</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>display</span>: <span className={styles.l}>flex</span>;
                    </p>
                    <p>
                        <span className={styles.number}>41</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>flex-direction</span>: <span className={styles.aa}>column</span>;
                    </p>
                    <p>
                        <span className={styles.number}>42</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>justify-content</span>: <span className={styles.l}>center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>43</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>align-items</span>: <span className={styles.l}>center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>44</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>gap</span>: <span className={styles.l}>30px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>45</span>
                        <span className={styles.a}>{`}`}</span>
                    </p>

                    <p>
                        <span className={styles.number}>46</span>
                        <span className={styles.a}>{`.card:hover .content `}</span>{`{`}
                    </p>
                    <p>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>transform</span>: <span className={styles.aa}>rotateY(180deg)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>47</span>
                        <span className={styles.a}>{`}`}</span>
                    </p>

                    <p>
                        <span className={styles.number}>48 <BiCaretDown /></span>
                        <span className={styles.a}>@keyframes rotation_481</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>49</span>
                        <span className={styles.a}>0%</span> <span>{`{`}</span>
                        <span className={styles.c}>transform</span>: <span className={styles.aa}>rotateZ(0deg)</span>;
                        <span>{`}`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>50</span>
                        <span className={styles.a}>0%</span> <span>{`{`}</span>
                        <span className={styles.c}>transform</span>: <span className={styles.aa}>rotateZ(360deg)</span>;
                        <span>{`}`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>51</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>52 <BiCaretDown /></span>
                        <span className={styles.a}>.front</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>53</span>
                        <span className={styles.c}>transform</span>: <span className={styles.aa}>rotateY(180deg)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>54</span>
                        <span className={styles.c}>color</span>: <span className={styles.l}>white</span>;
                    </p>
                    <p>
                        <span className={styles.number}>55</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>56 <BiCaretDown /></span>
                        <span className={styles.a}>.front .front-content</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>57</span>
                        <span className={styles.c}>position</span>: <span className={styles.aa}>absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>58</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>160px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>59</span>
                        <span className={styles.c}>height</span>: <span className={styles.l}>100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>60</span>
                        <span className={styles.c}>padding</span>: <span className={styles.l}>5px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>61</span>
                        <span className={styles.c}>display</span>: <span className={styles.aa}>flex</span>;
                    </p>
                    <p>
                        <span className={styles.number}>62</span>
                        <span className={styles.c}>flex-direction</span>: <span className={styles.aa}>column</span>;
                    </p>
                    <p>
                        <span className={styles.number}>63</span>
                        <span className={styles.c}>justify-content</span>: <span className={styles.aa}>space-between</span>;
                    </p>
                    <p>
                        <span className={styles.number}>64</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>65 <BiCaretDown /></span>
                        <span className={styles.a}>.front-content .badge</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>66</span>
                        <span className={styles.c}>background-color</span>: <span className={styles.l}>#00000055</span>;
                    </p>
                    <p>
                        <span className={styles.number}>67</span>
                        <span className={styles.c}>padding</span>: <span className={styles.l}>2px 10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>68</span>
                        <span className={styles.c}>border-radius</span>: <span className={styles.l}>10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>69</span>
                        <span className={styles.c}>backdrop-filter</span>: <span className={styles.aa}>blur(2px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>70</span>
                        <span className={styles.c}>width</span>: <span className={styles.aa}>fit-content</span>;
                    </p>
                    <p>
                        <span className={styles.number}>71</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>72 <BiCaretDown /></span>
                        <span className={styles.a}>.description</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>73</span>
                        <span className={styles.c}>box-shadow</span>: <span className={styles.l}>0px 0px 10px 5px #00000088</span>;
                    </p>
                    <p>
                        <span className={styles.number}>74</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>75</span>
                        <span className={styles.c}>padding</span>: <span className={styles.l}>10px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>76</span>
                        <span className={styles.c}>background-color</span>: <span className={styles.l}>#00000099</span>;
                    </p>
                    <p>
                        <span className={styles.number}>77</span>
                        <span className={styles.c}>backdrop-filter</span>: <span className={styles.aa}>blur(5px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>78</span>
                        <span className={styles.c}>border-radius</span>: <span className={styles.l}>5px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>79</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>80 <BiCaretDown /></span>
                        <span className={styles.a}>.title</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>81</span>
                        <span className={styles.c}>font-size</span>: <span className={styles.l}>11px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>82</span>
                        <span className={styles.c}>max-width</span>: <span className={styles.l}>100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>83</span>
                        <span className={styles.c}>display</span>: <span className={styles.aa}>flex</span>;
                    </p>
                    <p>
                        <span className={styles.number}>84</span>
                        <span className={styles.c}>justify-content</span>: <span className={styles.aa}>space-between</span>;
                    </p>
                    <p>
                        <span className={styles.number}>85</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>86 <BiCaretDown /></span>
                        <span className={styles.a}>.title p</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>87</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>50%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>88</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>89 <BiCaretDown /></span>
                        <span className={styles.a}>.card-footer</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>90</span>
                        <span className={styles.c}>color</span>: <span className={styles.l}>#ffffff88</span>;
                    </p>
                    <p>
                        <span className={styles.number}>91</span>
                        <span className={styles.c}>margin-top</span>: <span className={styles.l}>5px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>92</span>
                        <span className={styles.c}>font-size</span>: <span className={styles.l}>8px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>93</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>94 <BiCaretDown /></span>
                        <span className={styles.a}>.front .img</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>95</span>
                        <span className={styles.c}>position</span>: <span className={styles.aa}>absolute</span>;
                    </p>
                    <p>
                        <span className={styles.number}>96</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>97</span>
                        <span className={styles.c}>height</span>: <span className={styles.l}>100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>98</span>
                        <span className={styles.c}>object-fit</span>: <span className={styles.aa}>cover</span>;
                    </p>
                    <p>
                        <span className={styles.number}>99</span>
                        <span className={styles.c}>object-position</span>: <span className={styles.aa}>center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>100</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>101 <BiCaretDown /></span>
                        <span className={styles.a}>.circle</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>102</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>90px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>103</span>
                        <span className={styles.c}>height</span>: <span className={styles.l}>90px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>104</span>
                        <span className={styles.c}>border-radius</span>: <span className={styles.l}>50%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>105</span>
                        <span className={styles.c}>background-color</span>: <span className={styles.l}>#ffbb66</span>;
                    </p>
                    <p>
                        <span className={styles.number}>106</span>
                        <span className={styles.c}>position</span>: <span className={styles.aa}>relative</span>;
                    </p>
                    <p>
                        <span className={styles.number}>107</span>
                        <span className={styles.c}>filter</span>: <span className={styles.aa}>blur(15px)</span>;
                    </p>
                    <p>
                        <span className={styles.number}>108</span>
                        <span className={styles.c}>animation</span>: <span className={styles.l}>floating 2600ms infinite linear</span>;
                    </p>
                    <p>
                        <span className={styles.number}>109</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>110 <BiCaretDown /></span>
                        <span className={styles.a}>#bottom</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>111</span>
                        <span className={styles.c}>background-color</span>: <span className={styles.l}>#ff8866</span>;
                    </p>
                    <p>
                        <span className={styles.number}>112</span>
                        <span className={styles.c}>left</span>: <span className={styles.l}>50px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>113</span>
                        <span className={styles.c}>top</span>: <span className={styles.l}>0px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>114</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>150px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>115</span>
                        <span className={styles.c}>height</span>: <span className={styles.l}>150px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>116</span>
                        <span className={styles.c}>animation-delay</span>: <span className={styles.l}>-800ms</span>;
                    </p>
                    <p>
                        <span className={styles.number}>117</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>118 <BiCaretDown /></span>
                        <span className={styles.a}>#right</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>119</span>
                        <span className={styles.c}>background-color</span>: <span className={styles.l}>#ff2233</span>;
                    </p>
                    <p>
                        <span className={styles.number}>120</span>
                        <span className={styles.c}>left</span>: <span className={styles.l}>160px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>121</span>
                        <span className={styles.c}>top</span>: <span className={styles.l}>-80px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>122</span>
                        <span className={styles.c}>width</span>: <span className={styles.l}>30px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>123</span>
                        <span className={styles.c}>height</span>: <span className={styles.l}>30px</span>;
                    </p>
                    <p>
                        <span className={styles.number}>124</span>
                        <span className={styles.c}>animation-delay</span>: <span className={styles.l}>-1800ms</span>;
                    </p>
                    <p>
                        <span className={styles.number}>125</span>
                        {`}`}
                    </p>

                    <p>
                        <span className={styles.number}>126 <BiCaretDown /></span>
                        <span className={styles.a}>@keyframes floating</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>127</span>
                        <span className={styles.a}>0%</span> <span>{`{`}</span>
                        <span className={styles.c}>transform</span>: <span className={styles.aa}>translateY(0px)</span>;
                        <span>{`}`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>128</span>
                        <span className={styles.a}>50%</span> <span>{`{`}</span>
                        <span className={styles.c}>transform</span>: <span className={styles.aa}>translateY(10px)</span>;
                        <span>{`}`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>129</span>
                        <span className={styles.a}>100%</span> <span>{`{`}</span>
                        <span className={styles.c}>transform</span>: <span className={styles.aa}>translateY(0px)</span>;
                        <span>{`}`}</span>
                    </p>
                    <p>
                        <span className={styles.number}>130</span>
                        {`}`}
                    </p>
                    <p>
                        <span className={styles.number}>131</span>
                        <span className={styles.a}>{`.back `}</span>{`{`}
                    </p>
                    <p>
                        <span className={styles.number}>132</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>width</span>: <span className={styles.l}>100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>133</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>height</span>: <span className={styles.l}>100%</span>;
                    </p>
                    <p>
                        <span className={styles.number}>134</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>justify-content</span>: <span className={styles.aa}>center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>135</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>display</span>: <span className={styles.aa}>flex</span>;
                    </p>
                    <p>
                        <span className={styles.number}>136</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>align-items</span>: <span className={styles.aa}>center</span>;
                    </p>
                    <p>
                        <span className={styles.number}>137</span>
                        <span style={{ marginLeft: "45px" }} className={styles.c}>overflow</span>: <span className={styles.aa}>hidden</span>;
                    </p>
                    <p>
                        <span className={styles.number}>138</span>
                        {`}`}
                    </p>

                </div>




            )}{estado === 'jsCardPizza' && (
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

export default CodeCardPizza