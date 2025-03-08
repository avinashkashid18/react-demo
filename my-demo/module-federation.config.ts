export const mfConfig = {
  name: "cd ",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    container: "container@http://localhost:3002/remoteEntry.js",
    homePage: "homePage@http://localhost:3001/remoteEntry.js",
  },
};
