// HTML elements
const genreForm = new QueryForm("genres", document.querySelector('#genre-selection'))
const submitQueryButton = document.querySelector('#submit-button');
// API-populated variabels
let genres = null;
let services = null;

/**
 * Makes API requests to populate necessary variables.
 */
async function populateVariables() {
    genres = await getGenres();
    services = await getServices();
}

/**
 * Populates input forms based on available options.
 */
function populateForms() {
    // Genre form
    getGenres().then((result) => {
        // only take the first 10 generes, with the option to show more later
        for (const key of Object.keys(result).slice(0, 10)) {
            const genreName = result[key];
            const genreId = key;
            genreForm.addOption(genreName, genreId, true);
        }
    });

    // Services form
    // TODO
}

/**
 * Entrypoint. Populates page elements.
 */
function init() {
    populateVariables().then(() => {
        populateForms();
    });
}
init();



/**
 * Queries the movies API based on the currently-selected form inputs.
 */
function submitMovieSearch() {
    // Convert genre names to IDs
    const genres = genreForm.getValues();
    searchMoviesByFilters({ genres: genres }).then((output) => {
        const nextCursor = output.data.nextCursor;
        const result = output.data.result;
        console.log(result)
    })
}

// Query submission
submitQueryButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitMovieSearch();
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



