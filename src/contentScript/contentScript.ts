chrome.runtime.sendMessage('Hello from contentScript', (response): void => {
  console.log(response);
});
