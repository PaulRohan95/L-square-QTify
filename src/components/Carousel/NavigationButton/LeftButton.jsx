import React from "react";
import styles from './NavigationButton.module.css';
// import { ReactComponent as LeftArrow } from '../../../assets/LeftArrow.svg';

const LeftButton =({ onClick, children }) => (
    <button onClick={onClick} className={`${styles.navButton} ${styles.prev}`}>
        {children}
    </button>
);

export default LeftButton;