import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn:
    "https://30406c8ad8424a8e93822989cf48ccb0@o434531.ingest.sentry.io/5391711",
});

// DOM에서 id가 root인 애를 찾아서 react App을 넣겠다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
