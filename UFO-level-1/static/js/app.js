// from data.js
var tableData = data;


var tbody = d3.select("tbody");

tableData.forEach(dataRow => {
    console.log(dataRow);
    // Append one table row `tr` for each data row in data table
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each data row in data table
    Object.entries(dataRow).forEach(([key, value]) => {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", enter);
form.on("submit", enter);

function enter (){

    //Delete all codes in tbody
    tbody.html("")

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);  

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(newDataRow => {

        var newRow = tbody.append("tr");
        
        Object.entries(newDataRow).forEach(([key, value]) => {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = newRow.append("td");
            cell.text(value);
          });
        });
};

