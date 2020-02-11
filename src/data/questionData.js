import axios from 'axios';

const baseUrl = 'https://localhost:44322/api/opentriviadb';

const getOneQuestion = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}`)
        .then((result) => {
            const questionResults = result.data;
            questionResults.question = decodeURI(questionResults.question);
            questionResults.question = questionResults.question.replace(/&quot;/g, '\ ');
            questionResults.question = questionResults.question.replace(/&quot;/g, '\ ');
            questionResults.question = questionResults.question.replace(/&#039;/g, '\ '); 
            questionResults.question = questionResults.question.replace(/&rsquo;/g, '\ '); 
            questionResults.question = questionResults.question.replace(/&ldquo;/g, '\ '); 
            questionResults.question = questionResults.question.replace(/&hellip;/g, '\ '); 
            questionResults.question = questionResults.question.replace(/&rdquo;/g, '\ '); 
            //answers
           //questionResults.answer.option1 = questionResults.answer.option1.replace(/&quot;/g, '\ ');
            // questionResults.answer = questionResults.answer.replace(/&quot;/g, '\ ');
            // questionResults.answer = questionResults.answer.replace(/&#039;/g, '\ '); 
            // questionResults.answer = questionResults.answer.replace(/&rsquo;/g, '\ '); 
            // questionResults.answer = questionResults.answer.replace(/&ldquo;/g, '\ '); 
            // questionResults.answer = questionResults.answer.replace(/&hellip;/g, '\ '); 
            // questionResults.answer = questionResults.answer.replace(/&rdquo;/g, '\ '); 


            resolve(questionResults);
    })
        .catch(err => reject(reject));
});

//add question
//update question

export default {getOneQuestion};