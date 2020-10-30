import axios from 'axios';
import KEY from './env';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${KEY}`,
    }
})