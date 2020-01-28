import axios from 'axios';

const baseUrl = 'https://localhost:44322/api/opentriviadb';

const getOneQuestion = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}`)
        .then((result) => {
            const questionResults = result.data;
            // const questions = {};
            // Object.keys(questionResults).forEach((questionId) => {
            //     questionResults[questionId].id = questionId;
            //     questions.push(questionResults[questionId]);
            resolve(questionResults)
    })
        .catch(err => reject(reject));
});

export default {getOneQuestion};