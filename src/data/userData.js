import axios from 'axios';

const baseUrl = 'https://localhost:44322/api/users/1';

//needs to be added on the back end
const getUserScore = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}`)
        .then((result) => {
            const scoreResults = result.data;
            resolve(scoreResults)
    })
        .catch(err => reject(reject));
});

const updateUserScore = (newCorrectAnswer, UserId) => axios.put(`${baseUrl}/{userThatGotUpdated.donationTotal}`, newCorrectAnswer)

export default {updateUserScore, getUserScore};