export const mfConfig = {
  name: "home",
  filename:'remoteEntry.js',
  exposes: {
    "./Home":"./src/Home.tsx"
  },
  shared: ["react", "react-dom"],
};
