// script.js file
document.getElementById('calculate').addEventListener('click', function() {
    // Get the values from the inputs
    var severance = document.getElementById('severance').value;
    var savings = document.getElementById('savings').value;
    var expenses = document.getElementById('expenses').value;
    var income = document.getElementById('income').value;

    // Calculate the number of days the user can 'coast'
    var totalFunds = parseFloat(severance) + parseFloat(savings);
    var monthlyOutgo = parseFloat(expenses) - parseFloat(income);
    var days = Math.floor(totalFunds / (monthlyOutgo / 30));

    // Convert days to weeks
    var weeks = Math.floor(days / 7);

    // Calculate the future date
    var today = new Date();
    var resultDate = new Date(today.setDate(today.getDate() + days));
    var formattedDate = resultDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });

    // Display the result
    document.getElementById('result').innerHTML = `Without any changes to your current spending habits, you could coast, as-is, for ${days} days (${weeks} weeks), until ${formattedDate}.`;
});
