document.getElementById('card-details-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Store card details in localStorage
    localStorage.setItem('cardNumber', cardNumber);
    localStorage.setItem('expiryDate', expiryDate);
    localStorage.setItem('cvv', cvv);

    // Navigate to Form 3
    window.location.href = 'form3.html';
});
