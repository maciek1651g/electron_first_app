import React from 'react';
import styles from './headerStyle.module.css';
import { maximize, minimize, close } from '../../../../shared/publicFunctions';

const Header = (props: { goForward: () => void; goBack: () => void }) => {
    return (
        <div className={styles.container}>
            <div className={styles.h100}>
                <button
                    className={styles.headerButton}
                    onClick={() => props.goBack()}
                >
                    Go back
                </button>
                <button
                    className={styles.headerButton}
                    onClick={() => props.goForward()}
                >
                    Go forward
                </button>
            </div>
            <div className={styles.h100}>
                <button
                    className={styles.headerButton}
                    onClick={() => minimize()}
                >
                    Minimalize
                </button>
                <button
                    className={styles.headerButton}
                    onClick={() => maximize()}
                >
                    Maximize
                </button>
                <button className={styles.headerButton} onClick={() => close()}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Header;
