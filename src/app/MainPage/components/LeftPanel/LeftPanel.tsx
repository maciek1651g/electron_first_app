import React from 'react';
import styles from './leftPanelStyle.module.css';
import { getItemsFromDir } from '../../../../shared/publicFunctions';
import { File } from '../../../../shared/types';

const LeftPanel = (props: { nextPath: (file: File) => void }) => {
    const initialValue: File[] = [];
    const [mainFolderContent, setMainFolderContent] =
        React.useState(initialValue);

    React.useEffect(() => {
        getItemsFromDir('').then((data) => {
            if (Array.isArray(data)) {
                setMainFolderContent(data);
            } else {
                console.error(data);
            }
        });
    }, []);

    return (
        <div className={styles.container}>
            {mainFolderContent.map((file) => (
                <button
                    className={styles.panelItems}
                    key={file.path}
                    onClick={() => {
                        props.nextPath(file);
                    }}
                >
                    {file.name}
                </button>
            ))}
        </div>
    );
};

export default LeftPanel;
