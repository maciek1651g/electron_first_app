/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';
import { PublicFunctions, File } from './shared/types';

console.log(
    '👋 This message is being logged by "renderer.js", included via webpack'
);

const publicFunctions: PublicFunctions = (window as any).publicFunctions;

const getItemsFromPath = (path: string) => {
    return publicFunctions.getItemsFromPath(path);
};

// getItemsFromPath('\\Desktop').then((files) => {
//     console.log(files);
// });

const openFile = (file: File) => {
    if (file.isDirectory) {
        return new Promise((resolve) => {
            resolve(undefined);
        });
    } else {
        return publicFunctions.openFileFromPath(file.path);
    }
};

// const file: File = {
//     name: 'Desktop',
//     path: '\\Desktop\\File1.txt',
//     isDirectory: false,
// };
