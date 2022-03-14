import { Children } from 'react';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  console.log(sender);
  sendResponse('My response from background');
});

console.log('2');
console.log(chrome.runtime);
