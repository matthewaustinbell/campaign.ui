import axios from 'axios';

const baseUrl = 'https://localhost:44322/api/opentriviadb';

const getOneQuestion = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}`)
        .then((result) => {

            //Questions
            const questionResults = result.data;
            questionResults.question = decodeURI(questionResults.question);
            questionResults.question = questionResults.question.replace(/&quot;/g, ' ');
            questionResults.question = questionResults.question.replace(/&quot;/g, ' ');
            questionResults.question = questionResults.question.replace(/&#039;/g, ' '); 
            questionResults.question = questionResults.question.replace(/&rsquo;/g, ' '); 
            questionResults.question = questionResults.question.replace(/&ldquo;/g, ' '); 
            questionResults.question = questionResults.question.replace(/&hellip;/g, ' '); 
            questionResults.question = questionResults.question.replace(/&rdquo;/g, ' ');
            questionResults.question = questionResults.question.replace(/&shy;/g, ' '); 
            questionResults.question = questionResults.question.replace(/&oacute;/g, ' '); 


            //Correctanswers
            questionResults.correct_answer = decodeURI(questionResults.correct_answer);
            questionResults.correct_answer = questionResults.correct_answer.replace(/&quot;/g, ' ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/&#039;/g, ' ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/&rsquo;/g, ' ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/&ldquo;/g, ' ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/&helipp;/g, ' ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/rdquo;/g, ' ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/shy;/g, ' ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/oacute;/g, ' ');
            
            resolve(questionResults);
    })
        .catch(err => reject(reject));
});

//add question
//update question

export default {getOneQuestion};