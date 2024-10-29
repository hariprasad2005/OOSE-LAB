document.getElementById('documents-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const idProof = document.getElementById('id-proof').files[0];
    const photo = document.getElementById('photo').files[0];

    // Store document information in localStorage
    localStorage.setItem('idProof', idProof.name);
    localStorage.setItem('photo', photo.name);

    // Navigate to Form 4
    window.location.href = 'form4.html';
});
