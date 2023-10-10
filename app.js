// HTML elements
const genreForm = new QueryForm("genres", document.querySelector('#genre-selection'));
const serviceForm = new QueryForm("services", document.querySelector('#platform-selection'));
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
    getServices().then((result) => {
        for (const [key, value] of Object.entries(result)) {
            serviceForm.addOption(value.name, value.id, true);
        }
    });
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
    const services = serviceForm.getValues();
    searchMoviesByFilters({ genres: genres, services: services }).then((output) => {
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



