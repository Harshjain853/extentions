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
  
  function getRandomPhoneNumber() {
    let phoneNumber = "9";
    for (let i = 0; i < 9; i++) {
      phoneNumber += Math.floor(Math.random() * 10).toString();
    }
    return phoneNumber;
  }
  
  function getRandomVerificationNumber() {
    return Math.floor(Math.random() * (9999 - 10 + 1)) + 10; // Random number between 10 and 9999
  }
  
  function fillInputBasedOnNameOrId(element) {
    const name = element.name.toLowerCase();
    const id = element.id.toLowerCase();
    if (name.includes("email")) {
      element.value = getRandomEmail();
    } else if (name.includes("date")) {
      element.value = getRandomDate();
    } else if (name.includes("number") || name.includes("age")) {
      element.value = getRandomNumber();
    } else if (name.includes("phone") || name.includes("contact no") || name.includes("phone no")) {
      element.value = getRandomPhoneNumber();
    } else if (id.includes("verif_box") || id.includes("verification")) {
      element.value = getRandomVerificationNumber();
    } else if (element.type === "checkbox") {
      element.checked = true;
    } else {
      element.value = getRandomText();
    }
  }
  
  document.querySelectorAll('input, textarea').forEach(element => {
    fillInputBasedOnNameOrId(element);
  });
  
