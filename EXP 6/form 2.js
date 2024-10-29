// Retrieve symptoms from localStorage
const symptoms = localStorage.getItem('symptoms');
const diagnosesDiv = document.getElementById('diagnoses');

// Simple mockup diagnosis logic (replace with actual logic)
let diagnosis = "Consult a medical professional.";
if (symptoms.toLowerCase().includes("fever")) {
    diagnosis = "You might have an infection. Please consult a doctor.";
} else if (symptoms.toLowerCase().includes("headache")) {
    diagnosis = "You might be dehydrated or have a tension headache. Consider drinking water and resting.";
}

// Display the diagnosis
diagnosesDiv.textContent = `Potential Diagnosis: ${diagnosis}`;

// Handle navigation to form 3
document.getElementById('next-to-form3').addEventListener('click', function() {
    window.location.href = 'form3.html';
});
