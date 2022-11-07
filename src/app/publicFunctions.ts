import { PublicFunctions } from './../shared/types';

const publicFunctions: PublicFunctions = (window as any).publicFunctions;

export const getItemsFromDir = (path: string) => {
    return publicFunctions.getItemsFromPath(path);
};

export const openFileFromPath = (path: string) => {
    return publicFunctions.openFileFromPath(path);
};

const publicFunctionsExport = {
    getItemsFromDir,
    openFileFromPath,
};

export default publicFunctionsExport;
