const MOVIES_API_URL = 'https://streaming-availability.p.rapidapi.com'
const MOVIES_API_HOST = 'streaming-availability.p.rapidapi.com'
const RAPID_API_HEADER = '';
const RAPID_API_HOST_HEADER = '';
const methods = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE'
};


/**
 * Get all generes avaiable for querying.
 * 
 * @return A map of genre ID to names
 */
async function getGenres() {
    return (await makeRequest('genres', methods.get)).data.result;
}

/**
 * Gets all streaming services available in the US.
 * 
 * @return An array of service names.
 */
async function getServices() {
    return Object.keys((await makeRequest('countries', methods.get)).data.result.us.services);
}

/**
 * Search movies database using the supplied criteria.
 * 
 * @param {*} services Array of streaming services.
 * @param {*} genres Array of genres.
 * @param {*} year_min Minimum year to search by.
 * @param {*} year_max Maximum year to search by.
 * @param {*} cursor Cursor for pagination.
 * @returns 
 */
async function searchMoviesByFilters({services=[], genres=[], year_min=null, year_max=null, cursor=null} = {}) {
    const params = {
        show_type: 'movie',
        country: 'us',
        genres_relation: 'or',
        order_by: 'popularity_alltime',
        desc: 'true'
    };
    params.services = services.length != 0 ? services.join() : (await getServices()).join();
    params.genres = genres.length != 0 ? genres.join() : Object.keys(await getGenres()).join();
    year_max && (params.year_max = year_max);
    year_min && (params.year_min = year_min);
    cursor && (params.cursor = cursor);

    return (await makeRequest('search/filters', methods.get, params));
}

async function makeRequest(path, method, params=null) {
    const options = {
        method: method,
        url: `${MOVIES_API_URL}/${path}`,
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': MOVIES_API_HOST
        }
      };
      if (params) {
        options['params'] = params;
      }
    
    return await axios.request(options);
}