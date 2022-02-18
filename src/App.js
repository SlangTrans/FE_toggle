/* global chrome */
// import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  __onWindowLoad();
  return (
    <body></body>
  );
}

function __onWindowLoad() {
  function onWindowLoad() {
    chrome.tabs.executeScript(null, {
      file: "getSource.js"
      }, function() {
      if(chrome.extension.lastError) {
        document.body.innerText = 'Error : \n' + chrome.extension.lastError.message;
      }
    });
  }

  window.onload = onWindowLoad;
}

export default App;