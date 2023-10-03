const MOVIES_API_URL = 'https://streaming-availability.p.rapidapi.com'
const MOVIES_API_HOST = 'streaming-availability.p.rapidapi.com'
const RAPID_API_HEADER = '';
const RAPID_API_HOST_HEADER = '';
const API_KEY = '3976eeffddmshdeb86bef049e3fbp1f8653jsn74dffae4c0d0';
const methods = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE'
};

/**
 * Get all generes avaiable for querying.
 */
async function getGenres() {
    return (await makeRequest('genres', methods.get)).data.result
}

async function makeRequest(path, method) {
    const options = {
        method: method,
        url: `${MOVIES_API_URL}/${path}`,
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': MOVIES_API_HOST
        }
      };
    
    return await axios.request(options)
}