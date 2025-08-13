'use strict';

console.log(
  '%cThank You Jonas Schmedtmann! %c🙏 ',
  'color: #FFCC00; background: #000; padding: 14px; font-size: 16px; font-family: Arial, monospace;',
  'color: black; background: #DD0000; padding: 14px; font-size: 16px; font-family: Arial, monospace;'
);

const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
