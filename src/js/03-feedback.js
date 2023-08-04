import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Функция для сохранения данных формы в локальное хранилище
const saveFormData = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

// Функция для получения данных формы из локального хранилища
const getSavedFormData = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  return savedData ? JSON.parse(savedData) : { email: '', message: '' };
};

// Функция для заполнения полей формы данными из локального хранилища при загрузке страницы
const populateFormFields = () => {
  const formData = getSavedFormData();
  emailInput.value = formData.email;
  messageInput.value = formData.message;
};

// Слушаем событие input на форме и сохраняем данные в локальное хранилище
form.addEventListener('input', () => {
  saveFormData();
});

// Слушаем событие submit на форме
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = getSavedFormData();
  console.log(formData);

  // Очищаем локальное хранилище и поля формы
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});

// Заполняем поля формы данными из локального хранилища при загрузке страницы
populateFormFields();

