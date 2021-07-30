import React from "react";
import { WebView } from "react-native-webview";

const Chart = () => {
  return <WebView source={{ uri: "https://bts-app.nodehome.io/chart" }} />;
};

export default Chart;
