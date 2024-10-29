document.getElementById('tax-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taxRate = document.getElementById('tax-rate').value;
    const taxDeduction = document.getElementById('tax-deduction').value;

    // Store tax information in localStorage
    localStorage.setItem('taxRate', taxRate);
    localStorage.setItem('taxDeduction', taxDeduction);

    // Navigate to Form 4
    window.location.href = 'form4.html';
});
