import axios from "axios";


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '1be3c05b0b6bc63ffd8f9c27cfd07b47',
        language: 'es-ES'
    }
})



export default movieDB;