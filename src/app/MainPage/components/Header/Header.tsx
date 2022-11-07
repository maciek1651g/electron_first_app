import React from 'react';
import styles from './headerStyle.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.h100}>
                <button className={styles.headerButton}>Go back</button>
                <button className={styles.headerButton}>Go forward</button>
            </div>
            <div className={styles.h100}>
                <button className={styles.headerButton}>Minimalize</button>
                <button className={styles.headerButton}>Maximize</button>
                <button className={styles.headerButton}>Close</button>
            </div>
        </div>
    );
};

export default Header;
