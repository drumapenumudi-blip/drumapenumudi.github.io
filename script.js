document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('feedbackForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const comments = document.getElementById('comments').value.trim();

      if (name && comments) {
        document.getElementById('response').textContent = `Thank you for your feedback, ${name}!`;
        form.reset();
      } else {
        document.getElementById('response').textContent = 'Please fill all fields.';
        document.getElementById('response').style.color = 'red';
      }
    });
  }
});
