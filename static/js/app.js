// from data.js
var tableData = data;



//console.log the data
console.log(data);


bindData(data);

//create a function to display bind table
function bindData(data) {
    //get a reference to the table body
    var tbody = d3.select("tbody");
    tbody.html ("");
    //loop through each data and console log each data
    data.forEach(function (ufodata) {
        console.log(ufodata);
        //append row for each data in table 
        var row = tbody.append("tr");
        //object entries to console.log each value
        Object.entries(ufodata).forEach(function ([key, value]) {
            console.log(key, value);
            //append 1 cell for value
            var cell = row.append("td");
            //update each cell's text with values
            cell.text(value);
        });
    });
}


//Select the Filter button
var filterbutton = d3.select("#filter-btn");
filterbutton.on("click", function () {
    //prevent the pages from refreshing
    d3.event.preventDefault();
    //select input element and get raw HTML node
    var inputElement = d3.select("#datetime");
    //get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);
    bindData(filteredData);
});
