// import fetch from 'node_modules';

const apiKey='c45a857c193f6302f2b5061c3b85e743';
const url=' https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1';

console.log(url);
fetch(url)

    .then(Response => Response.json())
    .then(data =>console.log(data.results))

    .catch(error => console.error("Error fetching data:",error));
