import React from "react";
import { WebView } from "react-native-webview";

const Home = () => {
  return <WebView source={{ uri: "https://bts-app.nodehome.io/" }} />;
};

export default Home;
