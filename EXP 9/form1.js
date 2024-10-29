document.getElementById('personal-info-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const dob = document.getElementById('dob').value;
    const nationality = document.getElementById('nationality').value;

    // Store data in localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('dob', dob);
    localStorage.setItem('nationality', nationality);

    // Navigate to Form 2
    window.location.href = 'form2.html';
});
