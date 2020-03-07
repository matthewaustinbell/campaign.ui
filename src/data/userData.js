import axios from 'axios';

const baseUrl = 'https://localhost:44322/api/users/';

const getUserScore = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}`)
        .then((result) => {
            const scoreResults = result.data;
            resolve(scoreResults)
    })
        .catch(err => reject(reject));
});

const updateUserScore = (userId) => axios.put(`${baseUrl}donation/${userId}`)

const getSingleUser = userId => axios.get(`${baseUrl}${userId}`)

const getTotalUserList = () => axios.get(`${baseUrl}`)

export default {getUserScore, updateUserScore, getSingleUser, getTotalUserList};