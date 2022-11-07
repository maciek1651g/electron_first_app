import React from 'react';
import styles from './mainPageStyle.module.css';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import RightPanel from './components/RightPanel/RightPanel';
import { File } from '../../shared/types';
import { openFileFromPath } from '../publicFunctions';

const MainPage = () => {
    const [currentPath, setCurrentPath] = React.useState('');

    const nextPath = (file: File) => {
        if (file.isDirectory) {
            setCurrentPath(file.path);
        } else {
            openFileFromPath(file.path);
        }
    };

    return (
        <div className={styles.mainContainer}>
            <Header />
            <div className={styles.contentContainer}>
                <LeftPanel nextPath={nextPath} />
                <RightPanel nextPath={nextPath} currentPath={currentPath} />
            </div>
        </div>
    );
};

export default MainPage;
