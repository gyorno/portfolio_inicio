const videoList = document.querySelectorAll('#video-list li');
const player = document.getElementById('player');

videoList.forEach(item => {
  item.addEventListener('click', () => {
    const videoId = item.getAttribute('data-video');
    player.src = `https://www.youtube.com/embed/${videoId}`;
  });
});
