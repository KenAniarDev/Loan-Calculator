// Listen For Submit

document.getElementById('loan-form').addEventListener('submit',  function(e) {

    // Hide Result
    document.getElementById('results').style.display = 'none';
    // Show Loader
    document.getElementById('loading').style.display ='block';

    setTimeout(calculateResults, 2000);


    e.preventDefault();

});

// Calculate Results

function calculateResults() {
    

//  UI Variables

const amountUI   = document.getElementById('amount');
const interestUI = document.getElementById('interest');
const yearsUI    = document.getElementById('years');
const monthlyPaymentUI = document.getElementById('monthly-payment');
const totalPaymentUI = document.getElementById('total-payment');
const totalInterestUI = document.getElementById('total-interest');

const principal = parseFloat(amountUI.value);
const calculateInterest = parseFloat(interest.value) / 100 / 12;
const calculatePayments = parseFloat(years.value) * 12;

// Calculate Monthly Payment

const x = Math.pow(1 + calculateInterest, calculatePayments);
const monthly = (principal * x * calculateInterest) / (x - 1);


if (isFinite(monthly)) {

    monthlyPaymentUI.value = monthly.toFixed(2);
    totalPaymentUI.value   = (monthly * calculatePayments).toFixed(2);
    totalInterestUI.value =((monthly * calculatePayments) - principal).toFixed(2);
     // Show Result
     document.getElementById('results').style.display = 'block';
     // Hide Loader
     document.getElementById('loading').style.display ='none';
} else {
    document.getElementById('results').style.display = 'none';
    // Hide Loader
    document.getElementById('loading').style.display ='none';
    showError('Please Check your Numbers..');
}

}

// Show payment
function showError (error) {
    
    // Create a Div
    const errorDiv = document.createElement('div');

    // Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add Class
    errorDiv.className = 'alert alert-danger';

    // Create Text Node
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 2000);

}

function clearError() {
    document.querySelector('.alert').remove();
}