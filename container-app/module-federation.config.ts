export const mfConfig = {
  name: "container",
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/components/header/index.tsx",
    "./Footer": "./src/components/footer/index.tsx",
  },
  shared: ["react", "react-dom"],
};
