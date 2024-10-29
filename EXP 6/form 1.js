document.getElementById('symptom-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const symptoms = document.getElementById('symptoms').value;

    // Store symptoms in localStorage to access in the next form
    localStorage.setItem('symptoms', symptoms);

    // Navigate to form 2
    window.location.href = 'form2.html';
});
