document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    const thankYouMessage = document.getElementById('thank-you-message');
    const userNameElement = document.getElementById('user-name');
    userNameElement.textContent = name;

    thankYouMessage.style.display = 'block';

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
