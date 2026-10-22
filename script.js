const button = document.getElementById('btn');
const message = document.getElementById('message');

button.addEventListener('click', function() {
  message.textContent = '🎉 مبروك! نجحت تجربة Git بنجاح - من فرع الميزة';
  message.style.color = '#bc1fc1';
});
