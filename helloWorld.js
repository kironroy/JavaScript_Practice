'use strict';

console.log(
  '%cHello... %cWorld! 🌍',
  'color: white; background: blue; padding: 4px;',
  'color: green; font-weight: bold;'
);

const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
