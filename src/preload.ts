// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';
import { PublicFunctions } from './shared/types';

contextBridge.exposeInMainWorld('publicFunctions', {
    getItemsFromPath: (path: string) => ipcRenderer.invoke('readDir', path),
    openFileFromPath: (path: string) => ipcRenderer.invoke('openFile', path),
    maximize: () => ipcRenderer.invoke('maximize'),
    minimize: () => ipcRenderer.invoke('minimize'),
    close: () => ipcRenderer.invoke('close'),
} as PublicFunctions);
