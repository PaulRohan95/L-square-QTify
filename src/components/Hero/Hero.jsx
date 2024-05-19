import React from "react";
import headphone_icon from "../../assets/headphone_icon.png";
import styles from "./Hero.module.css";

function Hero () {
  return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.section}>
                <div className={styles.banner}>
                    <h1>100 Thousand Songs, ad-free</h1>
                    <h1>Over thousands podcast episodes</h1>
                </div>
                <div>
                    <img src={headphone_icon} alt="headphones" height="212px" width="212px" top="103px" left="914px" />
                </div>  
                </div>
        </div>
    </>
  );
};

export default Hero;