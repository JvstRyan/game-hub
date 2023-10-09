import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '693c08f9c3e04f6085dddee598db5a03'
    }
})