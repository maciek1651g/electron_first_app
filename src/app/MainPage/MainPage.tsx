import React from 'react';
import styles from './mainPageStyle.module.css';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import RightPanel from './components/RightPanel/RightPanel';
import { File } from '../../shared/types';
import { openFileFromPath } from '../../shared/publicFunctions';

const history: string[] = [''];
let historyIndex = 0;

const MainPage = () => {
    const [currentPath, setCurrentPath] = React.useState('');

    const nextPath = (file: File) => {
        if (file.isDirectory) {
            historyIndex += 1;
            history.length = historyIndex;
            history.push(file.path);

            setCurrentPath(file.path);
        } else {
            openFileFromPath(file.path);
        }
    };

    const goBack = () => {
        if (historyIndex > 0) {
            historyIndex -= 1;
            setCurrentPath(history[historyIndex]);
        }
    };

    const goForward = () => {
        if (historyIndex < history.length - 1) {
            historyIndex += 1;
            setCurrentPath(history[historyIndex]);
        }
    };

    return (
        <div className={styles.mainContainer}>
            <Header goBack={goBack} goForward={goForward} />
            <div className={styles.contentContainer}>
                <LeftPanel nextPath={nextPath} />
                <RightPanel nextPath={nextPath} currentPath={currentPath} />
            </div>
        </div>
    );
};

export default MainPage;
