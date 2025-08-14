'use strict';

function logWithBlankLines(message) {
  console.log('');
  console.log(message);
  console.log('');
}

console.log('--  JavaScript --');

document.addEventListener('DOMContentLoaded', function () {
  const p = document.querySelector('.p');
  const someElement = document.getElementById('someElement');

  if (someElement) {
    someElement.textContent = 'Updated!';
  }

  alert('This is an alert box.');

  // After alert is dismissed
  document.body.style.backgroundColor = '#f7e018';

  if (p) {
    p.style.color = '#000'; // Optional: improve contrast
  }

  // Create and append h2
  const heading = document.createElement('h2');
  heading.textContent = 'This was an example of synchronous programming.';
  document.body.appendChild(heading);

  // Create and append ul
  const ol = document.createElement('ol');
  const steps = [
    'Program ran line by line.',
    'Each statement executed in exact order.',
    'Alert paused execution until dismissed.',
    'Background color changed after alert was dismissed.',
    'DOM updates happened after alert.',
  ];

  steps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    ol.appendChild(li);
  });

  document.body.appendChild(ol);
});
