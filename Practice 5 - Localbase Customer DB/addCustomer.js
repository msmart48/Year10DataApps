const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const address = document.getElementById("address");
const suburb = document.getElementById("suburb");
const postcode = document.getElementById("postcode");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");

//make a reference to local base with a variable
let db = new Localbase('db');

//this function will get the data from the form and add it to the DB
function addNewCustomer() {
    let error = false;  //create var to see if any errors
    //remove all invalid class names from form
    document.querySelectorAll('.invalid').forEach(function (el) {
        el.classList.remove('invalid');
    });

    if (firstname.value == '') {
        console.log("Please enter a first name");
        firstname.classList.add("invalid");
        error = true;
    }
    if (lastname.value == '') {
        console.log("Please enter a last name");
        lastname.classList.add("invalid");
        error = true;
    }
    if (address.value == '') {
        console.log("Please enter an address");
        error = true
        address.classList.add("invalid");
    }
    if (suburb.value == '') {
        console.log("Please enter a suburb");
        error = true
        suburb.classList.add('invalid')
    }
    if (postcode.value == '') {
        console.log("Please enter a postcode");
        error = true
        postcode.classList.add('invalid')
    }
    if (mobile.value == '') {
        console.log("Please enter a mobile number");
        error = true
        mobile.classList.add('invalid')
    }
    if (email.value == '') {
        console.log("Please enter an email");
        error = true
        email.classList.add('invalid');

    }
    if (error == false) {
        //If all data is valid then we cand add the data to customers collection
        //add new doc
        db.collection('customers').add({
            first: firstname.value,
            last: lastname.value,
            address: address.value,
            suburb: suburb.value,
            postcode: postcode.value,
            mobile: mobile.value,
            email: email.value,
            //once this step is all completed we can then redirect to index.html
        }).then(function () {
            console.log("Customer added");
            location.href = "index.html";
        });
    }

}