// TODO capture input from all forms and print it out when you submit the form

// Query forms
const dateForm = document.querySelector('#date-form');
const platformForm = document.querySelector('#platform-form');
const submitQueryButton = document.querySelector('#submit-button');

// Query values
let platforms = null;
let dates = null;
let ratings = null;
let genres = null;

// Form submission button listener
submitQueryButton.addEventListener('click', (e) => {
    platformForm.requestSubmit();
    dateForm.requestSubmit();
});

// Form submission listeners
dateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // for(elt of dateForm) {
    //     console.dir(elt.value)
    // }
});

platformForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // for(elt of platformForm) {
    //     console.dir(elt.value)
    // }
});


// Movies API
const apiKey = "TODO"


