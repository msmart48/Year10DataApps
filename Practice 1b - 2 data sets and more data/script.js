const chart1 = document.getElementById("basicChart");   //find and reference the canvas identifer in the HTML space

//new chart object
new Chart(chart1,
    {
        type: 'bar',   //type of chart could be bar, line, pie etc.
        //data sets array for multiple series
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], //x axis labels as an array
            datasets: [
                // first series of data{
                {
                    label: '# of Votes 2024',       //data set label
                    data: [12, 19, 3, 5, 2, 3],     //y values as an array that match the labels array by index position
                    borderWidth: 1,
                    backgroundColor: 'blue'
                },
                // seconds series of data
                {
                    label: '# of Votes 2023',        //data set label
                    data: [20, 8, 5, 8, 12, 13],     //y values as an array that match the labels array by index position
                    borderWidth: 1,
                    backgroundColorcolor: 'red'
                }
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



