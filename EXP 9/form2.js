document.getElementById('passport-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const applicationType = document.getElementById('application-type').value;
    const passportNumber = document.getElementById('passport-number').value;

    // Store passport details in localStorage
    localStorage.setItem('applicationType', applicationType);
    localStorage.setItem('passportNumber', passportNumber);

    // Navigate to Form 3
    window.location.href = 'form3.html';
});
