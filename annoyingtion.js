// ==UserScript==
// @name         Annoyingtion - Remove annoying message on Notion
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove specific HTML element on Notion pages
// @author       Laercio Nascimento
// @match        https://www.notion.so/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
      if (mutation.type === "childList") {
        var addedNodes = mutation.addedNodes;
        for (var node of addedNodes) {
          if (
            node.matches &&
            node.matches(
              ".notion-cursor-listener > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div"
            )
          ) {
            node.remove();
          }
        }
      }
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
