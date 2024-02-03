'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  let [display, setDisplay] = useState('none');
  let [show, setShow] = useState('flex');

  function click() {
    if (display === 'none') {
      setDisplay("flex");
      setShow("none");
    } else {
      setDisplay("none");
      setShow("flex");
    }
  }

  return (
    <main className={styles.main}>

      <div className={styles.dropdown} style={{ display: `${display}` }}>
        <ul>
          <li className={styles.nav_li}>GRAPHIC DESIGN</li>
          <li className={styles.nav_li}>ART</li>
          <li className={styles.nav_li}>PHOTOGRAPHY</li>
          <li className={styles.nav_li}>ALL</li>
          <li className={styles.nav_li}>ABOUT</li>
          <li className={styles.nav_li}>CONTACT</li>
        </ul>
      </div>

      <nav className={styles.nav}>
        <button className={styles.nav_btn}>Subscribe</button>
        <h1 className={styles.h1}>VOID</h1>
        <div className={styles.login}>
          <Image className={styles.user}
            src="/user.png"
            alt=""
            width={34}
            height={34}
          />
          <a href="#login">Log In</a>
        </div>
        <Image className={styles.hamburger}
          src="/burger-menu.svg"
          alt=""
          width={42}
          height={42}
          onClick={click}
        />
      </nav>

      <div className={styles.home} style={{ display: `${show}` }}>
        <div className={styles.heading}>Stories About Design</div>
        <div className={styles.container}>
          <div className={styles.banner}></div>
          <div className={styles.right}>
            <p className={styles.h_medium}>FEATURED STORY</p>
            <p className={styles.h_small}>12 Jan, 2023 - 2 mins</p>
            <p className={`${styles.h_big} ${styles.hover}`}>A SURREAL<br />CONCRETE<br />DREAM</p>
          </div>
        </div>
      </div>

      <div className={styles.latest} style={{ display: `${show}` }}>
        <p className={styles.heading} style={{ width: '100%' }}>LATEST</p>
        <div className={styles.cards_gallery}>
          <div className={styles.card}>
            <Image className={styles.tab_img} id="img1"
              src="/tab1.webp"
              alt=""
              width={335}
              height={310}
            />
            <p className={`${styles.h_small} ${styles.black}`} style={{ margin: '12px 0px' }}>12 Jan, 2023 - 2 mins</p>
            <p className={`${styles.h_medium} ${styles.black} ${styles.hover}`} style={{ margin: '20px 0px' }}>THE UNBRANDED BRAND</p>
          </div>
          <div className={styles.card}>
          <Image className={styles.tab_img} id="img2"
              src="/tab2.webp"
              alt=""
              width={335}
              height={420}
            />
            <p className={`${styles.h_small} ${styles.black}`} style={{ margin: '12px 0px' }}>12 Jan, 2023 - 2 mins</p>
            <p className={`${styles.h_medium} ${styles.black} ${styles.hover}`} style={{ margin: '20px 0px' }}>SEEKING INSPIRATION? 5 RESOURCES THAT WILL INSPIRE YOU</p>
          </div>
          <div className={styles.card}>
          <Image className={styles.tab_img} id="img3"
              src="/tab3.webp"
              alt=""
              width={335}
              height={250}
            />
            <p className={`${styles.h_small} ${styles.black}`} style={{ margin: '12px 0px' }}>12 Jan, 2023 - 2 mins</p>
            <p className={`${styles.h_medium} ${styles.black} ${styles.hover}`} style={{ margin: '20px 0px' }}>73 QUESTIONS WITH DONNA FAY</p>
          </div>
          <div className={styles.card}>
          <Image className={styles.tab_img} id="img4"
              src="/tab4.webp"
              alt=""
              width={335}
              height={290}
            />
            <p className={`${styles.h_small} ${styles.black}`} style={{ margin: '12px 0px' }}>12 Jan, 2023 - 2 mins</p>
            <p className={`${styles.h_medium} ${styles.black} ${styles.hover}`} style={{ margin: '20px 0px' }}>HOW TO BRAND A DISEASE?</p>
          </div>
        </div>
      </div>

      <div className={styles.background} style={{ display: `${show}` }}>
        <p className={styles.h_medium}>STORY OF THE WEEK</p>
        <p className={styles.h_small}>12 Jan, 2023 - 2 mins</p>
        <p className={`${styles.h_big}`} style={{ width: '65%' }}>THE STORY BEHIND "FYI: I AM ABOUT TO LOVE YOU" - AN INTERVIEW WITH KAY VAN HANS</p>
      </div>

      <div className={styles.popular} style={{ display: `${show}` }}>
        <p className={`${styles.heading} ${styles.m_top}`} style={{ width: '100%' }}>LATEST</p>
        <div className={styles.section}>
          <div className={styles.section_card}>
            <Image className={styles.section_img}
              src="/blog1.webp"
              alt=""
              width={465}
              height={520}
            />
            <p className={`${styles.h_small} ${styles.black} ${styles.content}`} style={{ margin: '20px 0px' }}>12 Jan, 2024 - 2 mins</p>
            <p className={`${styles.h_medium} ${styles.black} ${styles.hover} ${styles.m_width}`} style={{ margin: '20px 0px' }}>FESTIVE SEASON BRLN 2024</p>
            <p className={`${styles.h_small} ${styles.black} ${styles.content}`} style={{ margin: '20px 0px' }}>See the full program for more details. Early bird tickets are on sale now.</p>
          </div>
          <div className={styles.section_card}>
            <Image className={styles.section_img}
              src="/blog2.webp"
              alt=""
              width={465}
              height={520}
            />
            <p className={`${styles.h_small} ${styles.black} ${styles.content}`} style={{ margin: '20px 0px' }}>12 Jan, 2023 - 2 mins</p>
            <p className={`${styles.h_medium} ${styles.black} ${styles.hover} ${styles.m_width}`} style={{ margin: '20px 0px' }}>365 DAYS. 365 STORIES</p>
            <p className={`${styles.h_small} ${styles.black} ${styles.content}`} style={{ margin: '20px 0px' }}>See the full program for more details. Early bird tickets are on sale now.</p>
          </div>
          <div className={styles.section_card}>
            <Image className={styles.section_img}
              src="/blog3.webp"
              alt=""
              width={465}
              height={520}
            />
            <p className={`${styles.h_small} ${styles.black} ${styles.content}`} style={{ margin: '20px 0px' }}>12 Jan, 2023 - 2 mins</p>
            <p className={`${styles.h_medium} ${styles.black} ${styles.hover} ${styles.m_width}`} style={{ margin: '20px 0px' }}>20 MUSEUMS YOU SHOULD VISIT</p>
            <p className={`${styles.h_small} ${styles.black} ${styles.content}`} style={{ margin: '20px 0px' }}>See the full program for more details. Early bird tickets are on sale now.</p>
          </div>
        </div>
      </div>

      <div className={styles.contact} style={{ display: `${show}` }}>
        <div className={styles.box}>
          <div className={styles.left}>
            <p className={styles.h_big}>SIGN UP TO <br />FILL THAT <br />INBOX VOID</p>
            <lable className={styles.label}>Email*</lable>
            <input type="email"className={styles.input} spellcheck="false"></input>
            <div className={styles.btn_div}>
            <button className={`${styles.form_btn} ${styles.hover}`}>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.right_1}></div>
        </div>
      </div>

      <footer className={styles.footer} style={{ display: `${show}` }}>© 2035 by VOID. Powered and secured by Wix</footer>

    </main>
  );
}
