const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const address = document.getElementById("address");
const suburb = document.getElementById("suburb");
const postcode = document.getElementById("postcode");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");

let url = new URL(window.location.href);
let id = url.searchParams.get('id');
console.log(id);

let db = new Localbase('db');

loadForm();

function loadForm() {

    db.collection('customers').doc(id).get().then(function (doc) {
        //update each value in the form with customer details from db
        firstname.value = doc.first;
        lastname.value = doc.last;
        address.value = doc.address;
        suburb.value = doc.suburb;
        postcode.value = doc.postcode;
        mobile.value = doc.mobile;
        email.value = doc.email;
    })
}

//this function will get the data from the form and add it to the DB
function updateCustomer() {
    if (firstname.value == '') {
        console.log("Please enter a first name");
    } else if (lastname.value == '') {
        console.log("Please enter a last name");
    } else if (address.value == '') {
        console.log("Please enter an address");
    } else if (suburb.value == '') {
        console.log("Please enter a suburb");
    } else if (postcode.value == '') {
        console.log("Please enter a postcode");
    } else if (mobile.value == '') {
        console.log("Please enter a mobile number");
    } else if (email.value == '') {
        console.log("Please enter an email");
    } else {
        //If all data is valid then we cand add the data to customers collection
        //add new doc

        db.collection('customers').doc(id).update({
            first: firstname.value,
            last: lastname.value,
            address: address.value,
            suburb: suburb.value,
            postcode: postcode.value,
            mobile: mobile.value,
            email: email.value,
        }).then(function () {
            console.log("Customer added");
            location.href = "index.html";
        });
    }
}
