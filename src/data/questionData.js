import axios from 'axios';

const baseUrl = 'https://localhost:44322/api/opentriviadb';

const getOneQuestion = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}`)
        .then((result) => {
            const questionResults = result.data;
            // questionResults.question = questionResults.question.replace(/&quot;/g, '\\"');
            questionResults.question = decodeURI(questionResults.question);
            resolve(questionResults);
    })
        .catch(err => reject(reject));
});

//add question
//update question

export default {getOneQuestion};