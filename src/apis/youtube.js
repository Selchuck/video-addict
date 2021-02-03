import axios from 'axios';

const KEY = 'AIzaSyCIu_MsXSiM0mKOu8HG1Eez6SCynbHKZEs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});