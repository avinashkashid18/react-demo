
    export type RemoteKeys = 'home/Home';
    type PackageType<T> = T extends 'home/Home' ? typeof import('home/Home') :any;