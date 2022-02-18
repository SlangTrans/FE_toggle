/* global chrome */
"use strict";
// import "./tooltip.css";

function get_url(){
    var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    console.log("current url");
    return newURL
}

function doSearch(text) {
    let tooltip = document.createElement("span");
    let inner = document.createElement("p");
    inner.innerHTML = "new word"

    if (window.find && window.getSelection) { 
        document.designMode = "on";
        var sel = window.getSelection();
        sel.collapse(document.body, 0);
        while (window.find(text)) { //find specific word
            //make text area and change html element 
            // we want use tooltip.css but we cant use outside module ex) .js file or .css
            document.execCommand("insertHTML" , false , `<span style = 'color:red'><strong>${text}</strong></span>`)
            // document.execCommand("insertHTML" , false ,`<span className = "tooltiplink" , datatooltip="상대방이 귀찮게 하거나 대답하기 곤란한 질문을 했을 경우에 하는 말">${text}</span>`)
            sel.collapseToEnd();
        }
        document.designMode = "off";
    } 
    window.scrollTo(0,0);
}

doSearch("is");
