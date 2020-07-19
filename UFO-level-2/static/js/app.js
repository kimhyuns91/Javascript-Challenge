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
    var inputElement = d3.select("#filter-button");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);  

    // Select data from data table that matches with input variable
    var filteredData = tableData.filter(ufoData => ufoData.datetime === inputValue ||
                                                   ufoData.city === inputValue ||
                                                   ufoData.state === inputValue ||
                                                   ufoData.country === inputValue ||
                                                   ufoData.shape === inputValue);
    console.log(filteredData);
    
    // Loop through each matched object to add a row in the table
    filteredData.forEach(newDataRow => {

        var newRow = tbody.append("tr");
        
        //Grab the values within the  object to append in the table
        Object.entries(newDataRow).forEach(([key, value]) => {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = newRow.append("td");
            cell.text(value);
          });
        });
};

