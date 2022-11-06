import React from 'react';
import styles from './mainPageStyle.module.css';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import RightPanel from './components/RightPanel/RightPanel';

const MainPage = () => {
    return (
        <div className={styles.mainContainer}>
            <h1>Witaj świecie!</h1>
            <Header />
            <LeftPanel />
            <RightPanel />
        </div>
    );
};

export default MainPage;
