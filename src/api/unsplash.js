import axios from 'axios';
var dotenv = require('dotenv').config({ path: '../../.env' });


const SECRET = process.env.UNSPLASH_API_KEY;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID SECRET',
    }
})