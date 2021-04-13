import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

(function () {
  var firstScript = document.getElementsByTagName("script")[0]
  if (document.getElementById("applet-js-sdk")) {
    return
  }
  var sdk = document.createElement("script")
  sdk.id = "applet-js-sdk"
  //sdk.src = "https://connect.facebook.net/en_US/fbapplet.latest.js";
  sdk.src = 'https://www.facebook.com/assets.php/en_US/fbinstant.latest.js'
  firstScript.parentNode.insertBefore(sdk, firstScript)
  console.log('sdk inserted')
})();

console.log(window)
console.log(window.FBInstant)

window.FBInstant.initializeAsync()
  .then(() => {
    return window.FBInstant.startGameAsync();
  })
  .then(startApp)
  .catch((err) => {
    console.log(err);
  });

function startApp() {
  console.log('start app')
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
