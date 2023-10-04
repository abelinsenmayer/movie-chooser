// Initialize forms
const genreForm = new QueryForm("genre-form", document.querySelector('#genre-selection'))
let genres = null;
getGenres().then((result) => {
    // only take the first 10 generes, with the option to show more later
    genres = result;
    for(const v of result.slice(0, 10)) {
        genreForm.addOption(v, true);
    }
});

// Form submission button
const submitQueryButton = document.querySelector('#submit-button');
submitQueryButton.addEventListener('click', (e) => {
    e.preventDefault();
    genreForm.submit();
});







// const dateForm = document.querySelector('#date-form');
// const genreForm = document.querySelector('#genre-form')
// const platformForm = document.querySelector('#platform-form');
// const submitQueryButton = document.querySelector('#submit-button');

// // Popoulate forms with data from API requests
// function addGenre(name) {
//     const option = document.createElement('div');
//     option.innerText = name;
//     option.id = `${name}`.toLowerCase();
// }



// Query values
// let platforms = null;
// let dates = null;
// let ratings = null;
// // let genres = null;

// // Form submission button listener
// submitQueryButton.addEventListener('click', (e) => {
//     platformForm.requestSubmit();
//     dateForm.requestSubmit();
// });

// // Form submission listeners
// dateForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // for(elt of dateForm) {
//     //     console.dir(elt.value)
//     // }
// });

// platformForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // for(elt of platformForm) {
//     //     console.dir(elt.value)
//     // }
// });



