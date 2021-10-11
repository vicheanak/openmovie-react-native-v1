import axios from 'axios';

import {API_SOURCE} from '../environment';

export const getFeaturedMovies = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_SOURCE}/movies`)
            .then(res => {
                console.log(res.data);
                return resolve(res.data);
            }).catch((err) => {
                return reject(err);
            })
    });
};

export const getSlideMovies = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_SOURCE}/movies`)
            .then(res => {
                console.log({res});
                return resolve(res);
            }).catch((err) => {
                return reject(err);
            })
    });
};