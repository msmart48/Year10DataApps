const chart1 = document.getElementById("basicChart");   //find and reference the canvas identifer in the HTML space
const tempIn = document.getElementById("tempIn");
const resultsTable = document.getElementById("resultsTable");
var scienceData = [];
var times = [];
var labels = [];

function addData() {
    var temp = tempIn.value;                        //get the value from the input called tempIn from html
    scienceData.push(temp);                         //record the current time into the times array    
    times.push(new Date().toLocaleTimeString());    //record the current time into the times array
    labels.push(labels.length + 1);
    scienceChart.update();                          //update the chart values
    showResults();
}

//new chart object declared with a variable so we can update later
var scienceChart = new Chart(chart1,
    {
        type: 'line',   //type of chart could be bar, line, pie etc.
        //data sets array for multiple series
        data: {
            labels: labels, //x axis labels as an array
            datasets: [
                // first series of data{
                {
                    label: 'Temperature Celsius',       //data set label
                    data: scienceData,     //y values as an array that match the labels array by index position
                    borderWidth: 1,
                    backgroundColor: 'blue'
                },

            ],
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    });


function showResults() {
    var rows = resultsTable.rows;
    //remove all old rows
    while (rows.length > 1) {
        resultsTable.deleteRow(1);
    }
    //add new rows

    for (var i = 0; i < scienceData.length; i++) {
        var newRow = resultsTable.insertRow(-1);
        newRow.insertCell(0).innerHTML = labels[i];
        newRow.insertCell(1).innerHTML = times[i];
        newRow.insertCell(2).innerHTML = scienceData[i];
    }
}
