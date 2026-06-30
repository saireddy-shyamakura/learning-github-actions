const button = document.getElementById('refreshBtn');
const hero = document.querySelector('.hero');

const moods = [
  'Automate with confidence',
  'Ship faster every day',
  'Learn workflows step by step'
];

button.addEventListener('click', () => {
  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  hero.querySelector('h1').textContent = randomMood;
});
