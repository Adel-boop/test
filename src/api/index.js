import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/',
    header: {
        'Accept': 'application/vnd.github.v3+json'
    }
})

export default axiosInstance