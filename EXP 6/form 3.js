document.getElementById('details-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // Store additional details in localStorage
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);

    // Navigate to form 4
    window.location.href = 'form4.html';
});
