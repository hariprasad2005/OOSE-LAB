function goToForm2() {
    window.location.href = "form2.html";
}

function goToForm3() {
    window.location.href = "form3.html";
}

function goToForm4() {
    window.location.href = "form4.html";
}

function calculateTotal() {
    let subject1 = parseInt(document.getElementById("subject1").value) || 0;
    let subject2 = parseInt(document.getElementById("subject2").value) || 0;
    let subject3 = parseInt(document.getElementById("subject3").value) || 0;
    let subject4 = parseInt(document.getElementById("subject4").value) || 0;
    let subject5 = parseInt(document.getElementById("subject5").value) || 0;

    let total = subject1 + subject2 + subject3 + subject4 + subject5;
    let percentage = (total / 500) * 100;

    document.getElementById("total").value = total;
    document.getElementById("percentage").value = percentage.toFixed(2);
}

function saveProfile() {
    alert("Profile saved successfully!");
    window.location.href = "index.html";
}
