document.getElementById('cardholder-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Store data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    // Navigate to Form 2
    window.location.href = 'form2.html';
});
