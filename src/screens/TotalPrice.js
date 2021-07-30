import React from "react";
import { WebView } from "react-native-webview";

const TotalPrice = () => {
  return <WebView source={{ uri: "https://bts-app.nodehome.io/totalprice" }} />;
};

export default TotalPrice;
