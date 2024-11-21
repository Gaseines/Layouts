import React from 'react'
import styles from './LoaderOrange.module.css'

const LoaderOrange = () => {
  return (
    <div>
      <div class={styles.loader}>
  <div class={styles.loading_text}>
    Loading<span class={styles.dot}>.</span> <span class={styles.dot}>.</span> <span class={styles.dot}>.</span>
  </div>
  <div class={styles.loading_bar_background}>
    <div class={styles.loading_bar}>
      <div class={styles.white_bars_container}>
        <div class={styles.white_bar}></div>
        <div class={styles.white_bar}></div>
        <div class={styles.white_bar}></div>
        <div class={styles.white_bar}></div>
        <div class={styles.white_bar}></div>
        <div class={styles.white_bar}></div>
        <div class={styles.white_bar}></div>
        <div class={styles.white_bar}></div>
        <div class={styles.white_bar}></div>
        <div class={styles.white_bar}></div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default LoaderOrange
