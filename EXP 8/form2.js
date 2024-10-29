document.getElementById('salary-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const baseSalary = document.getElementById('base-salary').value;
    const bonus = document.getElementById('bonus').value;

    // Store salary details in localStorage
    localStorage.setItem('baseSalary', baseSalary);
    localStorage.setItem('bonus', bonus);

    // Navigate to Form 3
    window.location.href = 'form3.html';
});
