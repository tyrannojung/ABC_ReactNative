import React from "react";
import { WebView } from "react-native-webview";

const Product = () => {
  return <WebView source={{ uri: "https://bts-app.nodehome.io/product" }} />;
};

export default Product;
