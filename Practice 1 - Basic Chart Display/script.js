const chart1 = document.getElementById("basicChart");   //find and reference the canvas identifer in the HTML space

//new chart object
new Chart(chart1, {
    type: 'bar',   //type of chart could be bar, line, pie etc.
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], //x axis labels as an array
        datasets: [{
            label: '# of Votes',                                        //data set label
            data: [12, 19, 3, 5, 2, 3],                                 //y values as an array that match the labels array by index position
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

