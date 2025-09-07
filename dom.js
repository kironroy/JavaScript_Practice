'use strict';

document.getElementById('changeBtn').addEventListener('click', function () {
  const msg = document.getElementById('message');
  msg.textContent = 'You clicked the button!';
  msg.style.color = 'blue';
  msg.style.fontWeight = 'bold';
});
