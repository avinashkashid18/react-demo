
    export type RemoteKeys = 'container/Header' | 'container/Footer';
    type PackageType<T> = T extends 'container/Footer' ? typeof import('container/Footer') :T extends 'container/Header' ? typeof import('container/Header') :any;