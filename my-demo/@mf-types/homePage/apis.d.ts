export type RemoteKeys = "homePage/HomePage";
type PackageType<T> = T extends "homePage/HomePage"
  ? typeof import("homePage/HomePage")
  : any;
