const button = document.getElementById('btn');
const message = document.getElementById('message');

button.addEventListener('click', function() {
  message.textContent = '🎉 مبروك! نجحت تجربة Git بنجاح';
  message.style.color = '#4ade80';
});
