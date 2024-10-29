window.onload = function() {
    const fullName = localStorage.getItem('fullName');
    const dob = localStorage.getItem('dob');
    const nationality = localStorage.getItem('nationality');
    const applicationType = localStorage.getItem('applicationType');
    const passportNumber = localStorage.getItem('passportNumber');
    const idProof = localStorage.getItem('idProof');
    const photo = localStorage.getItem('photo');

    // Display confirmation summary
    const summaryDiv = document.getElementById('confirmation-summary');
    summaryDiv.innerHTML = `
        <h2>Summary</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>Application Type:</strong> ${applicationType}</p>
        <p><strong>Passport Number:</strong> ${passportNumber || 'N/A'}</p>
        <p><strong>ID Proof:</strong> ${idProof}</p>
        <p><strong>Passport Photo:</strong> ${photo}</p>
    `;
};

// Function to restart the process
function restartProcess() {
    localStorage.clear();
    window.location.href = 'form1.html';
}
