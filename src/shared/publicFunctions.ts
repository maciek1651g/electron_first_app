import { PublicFunctions } from './types';

const publicFunctions: PublicFunctions = (window as any).publicFunctions;

export const getItemsFromDir = (path: string) => {
    return publicFunctions.getItemsFromPath(path);
};

export const openFileFromPath = (path: string) => {
    return publicFunctions.openFileFromPath(path);
};

export const close = () => {
    publicFunctions.close();
};

export const minimize = () => {
    publicFunctions.minimize();
};

export const maximize = () => {
    publicFunctions.maximize();
};

const publicFunctionsExport = {
    getItemsFromDir,
    openFileFromPath,
};

export default publicFunctionsExport;
