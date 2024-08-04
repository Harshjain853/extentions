// popup.js
document.getElementById('fillFormButton').addEventListener('click', () => {
    browser.tabs.executeScript({
      file: 'random-data.js'
    });
  });