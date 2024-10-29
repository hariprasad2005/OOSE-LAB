document.getElementById('employee-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const employeeName = document.getElementById('employee-name').value;
    const employeeId = document.getElementById('employee-id').value;
    const department = document.getElementById('department').value;

    // Store data in localStorage
    localStorage.setItem('employeeName', employeeName);
    localStorage.setItem('employeeId', employeeId);
    localStorage.setItem('department', department);

    // Navigate to Form 2
    window.location.href = 'form2.html';
});
