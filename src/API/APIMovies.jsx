import axios from "axios";

const axiosApi = axios.create({
    baseURL : 'https://api.themoviedb.org/3/movie',
    params: {
        api_key:'903f60096bf3518e30136114a9a4e82a'
     }
})

export default axiosApi ;