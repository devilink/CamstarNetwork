"use client";

import styles from "./CreativeHero.module.css";

export default function CreativeHero() {
  return (
    <div className={styles.site}>
      <nav className={styles.nav}>
        <div className={styles.logo}>logo.lo</div>
        <div className={styles.links}>
          <b>HOME</b>
          <span>About</span>
          <span>Courses</span>
          <span>Review</span>
        </div>
        <button className={styles.register}>Register</button>
      </nav>

      <section className={styles.hero}>
        <div className={styles.headline}>
          <div className={styles.row}>
            Everything <span className={`${styles.art} ${styles.artTop}`}></span> You
          </div>
          <div className={styles.row}>
            Need <span className={`${styles.art} ${styles.artCard}`}></span> To Grow Your
          </div>
          <div className={styles.row}>
            Design <span className={`${styles.art} ${styles.artPerson}`}></span> Skills<sup>*</sup>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.sidebrand}>
            <div className={styles.roundlogo}>B</div>
            Design Principles<br />
            Quick, Affordable Services<br />
            Followed To Your Unique Style
          </div>

          <div className={styles.price}>
            <div className={styles.yellow}></div>
            <span>$</span>1.5
            <small>Per Month</small>
          </div>

          <div className={styles.spark}>*</div>

          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: '25px' }}>
            <button className={styles.go}>Get<br />Started ↗</button>
            <div className={styles.identity}>
              <b>• IDENTITY</b><br /><br />
              Customize Your Setup To Fit Your Team.<br />
              Explore Work & More.
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.work}>
        <div>
          <h2>We Work With<br />Brand World Wide</h2>
          <p>The Future Of Learning. Learn Online With World Class Creators.</p>
        </div>
        <div className={styles.cards}>
          <div className={`${styles.tile} ${styles.tileOne}`}></div>
          <div className={`${styles.tile} ${styles.tileTwo}`}></div>
          <div className={`${styles.tile} ${styles.tileThree}`}>
            <div className={styles.dots}>
              <i></i><i></i><i></i><i></i><i></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
