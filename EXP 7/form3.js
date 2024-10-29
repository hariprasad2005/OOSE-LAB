document.getElementById('billing-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;

    // Store billing information in localStorage
    localStorage.setItem('address', address);
    localStorage.setItem('city', city);
    localStorage.setItem('zip', zip);

    // Navigate to Form 4
    window.location.href = 'form4.html';
});
