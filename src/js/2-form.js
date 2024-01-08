const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const textInput = feedbackForm.elements.message;
const emailInput = feedbackForm.elements.email;

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', onFormInput);

function onFormInput(event) {
  const formInput = {
    email: emailInput.value.trim(),
    text: textInput.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formInput));
}

function loadSavedFormText() {
  const savedInput = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  textInput.value = savedInput.text || '';
  emailInput.value = savedInput.email || '';
}

loadSavedFormText();

function onFormSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const text = textInput.value.trim();

  if (email === '' || text === '') {
    alert('Please fill in all the fields!');
    return;
  }

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}
