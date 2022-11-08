export interface File {
    name: string;
    path: string;
    isDirectory: boolean;
}

export interface PublicFunctions {
    getItemsFromPath: (path: string) => Promise<string | File[]>;
    openFileFromPath: (path: string) => Promise<void | string>;
    maximize: () => Promise<void>;
    minimize: () => Promise<void>;
    close: () => Promise<void>;
}
