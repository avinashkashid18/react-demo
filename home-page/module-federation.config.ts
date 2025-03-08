export const mfConfig = {
  name: "homePage",
  filename: "remoteEntry.js",
  exposes: {
    "./HomePage": "./src/HomePage.tsx",
  },
  shared: ["react", "react-dom"],
};
