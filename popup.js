// popup.js
document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculate');
    var distanceInput = document.getElementById('distance');
    var resultDiv = document.getElementById('result');
  
    calculateButton.addEventListener('click', function() {
      var distance = parseFloat(distanceInput.value);
      if (!isNaN(distance)) {
        var carbonFootprint = calculateCarbonFootprint(distance);
        resultDiv.innerHTML = 'Your carbon footprint is: ' + carbonFootprint.toFixed(2) + ' kg CO2';
      } else {
        resultDiv.innerHTML = 'Please enter a valid distance.';
      }
    });
  
    function calculateCarbonFootprint(distance) {
      // Replace this with your actual carbon footprint calculation logic
      // For example: 0.2 kg CO2 per km
      return distance * 0.2;
    }
  });
  