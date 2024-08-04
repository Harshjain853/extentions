// random-data.js
function getRandomText() {
    const texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];
    return texts[Math.floor(Math.random() * texts.length)];
  }
  
  function getRandomEmail() {
    const domains = ["example.com", "test.com", "demo.com"];
    return `${getRandomText().toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;
  }
  
  function getRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  
  function getRandomDate() {
    const start = new Date(2000, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
  }
  
  document.querySelectorAll('input').forEach(input => {
    switch (input.type) {
      case 'text':
        input.value = getRandomText();
        break;
      case 'email':
        input.value = getRandomEmail();
        break;
      case 'number':
        input.value = getRandomNumber();
        break;
      case 'date':
        input.value = getRandomDate();
        break;
      case 'checkbox':
        input.checked = true;
        break;
      default:
        input.value = getRandomText();
        break;
    }
  });
  