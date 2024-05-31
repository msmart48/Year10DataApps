const chart1 = document.getElementById("basicChart");   //find and reference the canvas identifer in the HTML space

var xLabels = [];       //will store the x axis labels or years
var yData = [];         //will store the y axis data or temperatures

getData();

async function getData() {
    const response = await fetch("tempData.csv");		//read all data into response
    const data = await response.text();			    //convert response into text only
    console.log(data);					            //print the data for testing

    //now we need to work through the data to get the x axis labels and y axis data by splitting into rows
    const rows = data.split("\n").slice(1);		//split the data into an array
    rows.forEach(elt => {			            //a different way to loop. You could see use a for loop but elt is an array.
        const row = elt.split(',')		        //read each line and split them into an array for each comma
        const year = row[0];			        //separate year from the data in col 0 of the document
        const temp = row[1];			        //separate temp from th data in col 1 of the document
        console.log(year, temp);                //just for testing

        xLabels.push(year);			        //push the found year into our global array
        yData.push(parseFloat(temp));		//push the found temp into global array
    })
    //update the graph;
    tempGraph.update();
}

var tempGraph = new Chart(chart1,
    {
        type: 'line',   //type of chart could be bar, line, pie etc.
        //data sets array for multiple series
        data: {
            labels: xLabels, //x axis labels as an array
            datasets: [
                // first series of data{
                {
                    label: 'Water Temperatire',       //data set label
                    data: yData,     //y values as an array that match the labels array by index position
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

