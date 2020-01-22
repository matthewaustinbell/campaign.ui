import axios from 'axios';

const baseUrl = 'https://localhost:44322/api/opentriviadb';

const getAllQuestions = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}`)
        .then(result => resolve(result.data))
        .catch(err => reject(reject))
})

export default {getAllQuestions};