<<<<<<< Updated upstream
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// Создаем экземпляр Vimeo плеера с идентификатором 'vimeo-player'
const player = new Vimeo('vimeo-player');

// Функция для сохранения текущего времени воспроизведения в локальное хранилище
const savePlaybackTime = throttle((time) => {
  localStorage.setItem('videoplayer-current-time', time);
}, 1000);

// Функция для получения сохраненного времени воспроизведения из локального хранилища
const getSavedPlaybackTime = () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  return savedTime ? parseFloat(savedTime) : 0;
};

// Устанавливаем плееру время воспроизведения, сохраненное в локальном хранилище, и начинаем воспроизведение
player.setCurrentTime(getSavedPlaybackTime()).then(() => {
  player.play();
});

// Слушаем событие timeupdate, чтобы сохранять текущее время воспроизведения в локальное хранилище
player.on('timeupdate', (event) => {
  const time = event.seconds;
  savePlaybackTime(time);
});
=======

>>>>>>> Stashed changes
