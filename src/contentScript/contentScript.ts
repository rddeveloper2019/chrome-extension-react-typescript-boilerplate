chrome.runtime.sendMessage('Hello from contentScript', (response): void => {
  console.log(response);
});

console.log('1');
console.log(chrome.runtime);
