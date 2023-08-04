// Импортируем функцию throttle из библиотеки lodash
import throttle from 'lodash.throttle';

// Находим форму и поля ввода по соответствующим селекторам
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Функция для сохранения данных полей в локальное хранилище с помощью throttle
const saveFormData = throttle(() => {
  
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  // Сохраняем объект в локальное хранилище, преобразовав его в строку JSON
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500); // Ограничиваем частоту обновления хранилища 500 миллисекундами

// Функция для получения сохраненных данных из локального хранилища
const getSavedFormData = () => {
  // Получаем строку JSON из хранилища
  const savedData = localStorage.getItem('feedback-form-state');
  // Если данные есть, парсим их из JSON в объект, иначе возвращаем пустой объект
  return savedData ? JSON.parse(savedData) : { email: '', message: '' };
};

// Функция для заполнения полей формы данными из хранилища
const populateFormFields = () => {
  // Получаем сохраненные данные из хранилища
  const formData = getSavedFormData();
  // Заполняем поля формы значениями из объекта formData
  emailInput.value = formData.email;
  messageInput.value = formData.message;
};

// Слушаем событие input на форме, чтобы сохранять данные в хранилище
form.addEventListener('input', () => {
  saveFormData();
});

// Слушаем событие submit на форме, чтобы выводить данные в консоль и очищать хранилище и поля формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Получаем сохраненные данные из хранилища
  const formData = getSavedFormData();
  // Выводим данные в консоль
  console.log(formData);

  // Удаляем данные из хранилища
  localStorage.removeItem('feedback-form-state');
  // Очищаем поля формы
  emailInput.value = '';
  messageInput.value = '';
});

// При загрузке страницы заполняем поля формы данными из хранилища
populateFormFields();
