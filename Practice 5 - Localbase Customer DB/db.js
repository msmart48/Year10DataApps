//reference the ids from the index.html
customerDetails = document.getElementById("customerDetails");
searchInput = document.getElementById("searchInput");
customerTable = document.getElementById("customerTable");

// Create a new database
let db = new Localbase('db');

showAll(); //run the showall customers function to display all customers in the table

function showAll() {
    //go to the customers collection and get everything in it and pass to the print table function
    db.collection('customers').get({ keys: true }).then(customers => {
        console.log(customers);
        printTable(customers);
    })
}


//this function requires an array to be passed to it as list
function printTable(list) {
    //removing table rows
    let rowCount = customerTable.rows.length;
    for (var i = rowCount; i > 1; i--) {
        customerTable.deleteRow(i - 1);
    }
    //printing out data into new rows
    for (var i = 0; i < list.length; i++) {
        var row = customerTable.insertRow(-1);
        row.insertCell(0).innerHTML = list[i].data.first
        row.insertCell(1).innerHTML = list[i].data.last
        //in each data set we can access the key. We will ue the key to help with another function called show details
        row.insertCell(2).innerHTML = `<button class="button" onclick = "showDetails('${list[i].key}')">Details</button>`;
    }
}

//display the details of the customer on the right when user clicks button
function showDetails(id) {
    //search the customers collection for the id of teh customer and return their data
    db.collection('customers').doc(id).get().then(document => {
        customerDetails.innerHTML = `First Name: ${document.first} <br>`;
        customerDetails.innerHTML += `Last Name:  ${document.last}  </br>`;
        customerDetails.innerHTML += `Address:  ${document.address} <br>`;
        customerDetails.innerHTML += `Email:  ${document.email} <br>`;
        customerDetails.innerHTML += `Mobile: ${document.mobile} <br>`;
        customerDetails.innerHTML += `<a class="button" href ="updateCustomer.html?id=${id}">Edit Customer</a> <br>`;
        customerDetails.innerHTML += `<button class="button is-danger" onclick=removeCustomer('${id}')>Delete Customer</button> <br>`;
    });
}

function removeCustomer(id) {
    //go to the collection and delete the document using the id
    db.collection('customers').doc(id).delete();
    //show all clints list as an update
    showAll();
    //clear the contents of the div
    customerDetails.innerHTML = "";
}

function searchCustomer() {
    let search = searchInput.value;
    let result;
    db.collection('customers').orderBy('last').get({ keys: true }).then(customers => {
        result = customers.filter(el => el.data.first.includes(search) || el.data.last.includes(search));
        console.log(result)
        if (result.length > 0) {
            printTable(result);
        } else {
            console.log("No customers found");
        }
    })
}