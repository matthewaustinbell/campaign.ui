import axios from 'axios';

const baseUrl = 'https://localhost:44322/api/opentriviadb';

const getOneQuestion = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}`)
        .then((result) => {
            const questionResults = result.data;
            resolve(questionResults)
    })
        .catch(err => reject(reject));
});

//add question
//update question

export default {getOneQuestion};