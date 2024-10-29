window.onload = function() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const cardNumber = localStorage.getItem('cardNumber');
    const expiryDate = localStorage.getItem('expiryDate');
    const address = localStorage.getItem('address');
    const city = localStorage.getItem('city');
    const zip = localStorage.getItem('zip');

    // Display confirmation summary
    const summaryDiv = document.getElementById('confirmation-summary');
    summaryDiv.innerHTML = `
        <h2>Summary</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Card Number:</strong> ${cardNumber}</p>
        <p><strong>Expiry Date:</strong> ${expiryDate}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>ZIP Code:</strong> ${zip}</p>
    `;
};

// Function to restart the process
function restartProcess() {
    localStorage.clear();
    window.location.href = 'form1.html';
}
