window.onload = function() {
    const employeeName = localStorage.getItem('employeeName');
    const employeeId = localStorage.getItem('employeeId');
    const department = localStorage.getItem('department');
    const baseSalary = localStorage.getItem('baseSalary');
    const bonus = localStorage.getItem('bonus');
    const taxRate = localStorage.getItem('taxRate');
    const taxDeduction = localStorage.getItem('taxDeduction');

    // Calculate net salary
    const totalSalary = parseFloat(baseSalary) + parseFloat(bonus);
    const taxAmount = (totalSalary * parseFloat(taxRate)) / 100;
    const netSalary = totalSalary - taxAmount - parseFloat(taxDeduction);

    // Display confirmation summary
    const summaryDiv = document.getElementById('confirmation-summary');
    summaryDiv.innerHTML = `
        <h2>Summary</h2>
        <p><strong>Employee Name:</strong> ${employeeName}</p>
        <p><strong>Employee ID:</strong> ${employeeId}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Base Salary:</strong> ${baseSalary}</p>
        <p><strong>Bonus:</strong> ${bonus}</p>
        <p><strong>Tax Rate:</strong> ${taxRate}%</p>
        <p><strong>Tax Deduction:</strong> ${taxDeduction}</p>
        <p><strong>Net Salary:</strong> ${netSalary.toFixed(2)}</p>
    `;
};

// Function to restart the process
function restartProcess() {
    localStorage.clear();
