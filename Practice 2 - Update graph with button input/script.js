const chart1 = document.getElementById("basicChart");   //find and reference the canvas identifer in the HTML space

//create two global variable arrays to keep track of the votes
var votes = [0, 0];

function addVote(type) {
    if (type == 'a') {
        votes[0]++;    //update the array count for index 0 (a)
    } else if (type == 'b') {
        votes[1]++;    //update the array count for index 1 (b)
    }
    votingChart.update(); //update the chart and its values;
}
//new chart object and declare with a variable name called votingChart so we can call it later to update
var votingChart = new Chart(chart1,
    {
        type: 'bar',   //type of chart could be bar, line, pie etc.
        //data sets array for multiple series
        data: {
            labels: ['Votes A Total', 'Votes B Total'], //x axis labels as an array
            datasets: [
                // A series of data{
                {
                    label: 'A Votes 2024',       //data set label
                    data: votes,     //y values as an array that match the labels array by index position
                    borderWidth: 1,
                    backgroundColor: ['green', 'blue']
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



