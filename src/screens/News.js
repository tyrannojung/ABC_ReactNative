import React from "react";
import { WebView } from "react-native-webview";

const News = () => {
  return <WebView source={{ uri: "https://bts-app.nodehome.io/news" }} />;
};

export default News;
