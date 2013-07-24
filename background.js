// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
var scrollToggle = 1;

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  if(!localStorage["scrollSpeed"]){localStorage["scrollSpeed"]=50;}
  if (scrollToggle) {
  console.log('Turning ' + tab.url + ' red!');
  localStorage["intervalID"] = setInterval(function startScroll() {chrome.tabs.executeScript({
    code: 'document.body.scrollTop +=1'
  });},localStorage["scrollSpeed"]);
  console.log("Scrolling: "+localStorage["scrollSpeed"]);
  scrollToggle = 0;
}else{
	window.clearInterval(localStorage["intervalID"]);
	scrollToggle = 1; 
}
});