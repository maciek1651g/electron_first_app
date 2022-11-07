import React from 'react';
import styles from './rightPanelStyle.module.css';
import { File } from '../../../../shared/types';
import { getItemsFromDir } from '../../../publicFunctions';

const RightPanel = (props: {
    currentPath: string;
    nextPath: (file: File) => void;
}) => {
    const initialValue: File[] = [];
    const [folderContent, setFolderContent] = React.useState(initialValue);

    React.useEffect(() => {
        getItemsFromDir(props.currentPath).then((data) => {
            if (Array.isArray(data)) {
                setFolderContent(data);
            } else {
                console.error(data);
            }
        });
    }, [props.currentPath]);

    return (
        <div className={styles.container}>
            {!props?.currentPath ? (
                <p>Choose catalog from left panel</p>
            ) : folderContent.length === 0 ? (
                <p>Catalog is empty.</p>
            ) : (
                folderContent.map((file) => (
                    <div
                        className={styles.panelItems}
                        key={file.path}
                        onClick={() => {
                            props.nextPath(file);
                        }}
                    >
                        {file.name}
                    </div>
                ))
            )}
        </div>
    );
};

export default RightPanel;
