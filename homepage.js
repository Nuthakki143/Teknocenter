function showTable() {
  var tableContainer = document.getElementById('tableContainer');
  tableContainer.style.display = 'block';
}

function hideTable() {
  var tableContainer = document.getElementById('tableContainer');
  tableContainer.style.display = 'none';
}

// Populate the dropdown menu with USA states
document.addEventListener('DOMContentLoaded', function() {
  var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", 
  "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", 
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

  var selectState = document.getElementById('state');

  states.forEach(function(state) {
    var option = document.createElement('option');
    option.textContent = state;
    option.value = state;
    selectState.appendChild(option);
  });
});
