import React from "react";
import styles from './NavigationButton.module.css';
// import { ReactComponent as RightArrow } from '../../../assets/RightArrow.svg';

const RightButton =({ onClick, children }) => (
    <button onClick={onClick} className={`${styles.navButton} ${styles.next}`}>
        {children}
    </button>
);

export default RightButton;