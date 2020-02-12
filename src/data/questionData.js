import axios from 'axios';

const baseUrl = 'https://localhost:44322/api/opentriviadb';

const getOneQuestion = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}`)
        .then((result) => {

            //Questions
            const questionResults = result.data;
            questionResults.question = decodeURI(questionResults.question);
            questionResults.question = questionResults.question.replace(/&quot;/g, '\ ');
            questionResults.question = questionResults.question.replace(/&quot;/g, '\ ');
            questionResults.question = questionResults.question.replace(/&#039;/g, '\ '); 
            questionResults.question = questionResults.question.replace(/&rsquo;/g, '\ '); 
            questionResults.question = questionResults.question.replace(/&ldquo;/g, '\ '); 
            questionResults.question = questionResults.question.replace(/&hellip;/g, '\ '); 
            questionResults.question = questionResults.question.replace(/&rdquo;/g, '\ '); 

            //Correctanswers
            questionResults.correct_answer = decodeURI(questionResults.correct_answer);
            questionResults.correct_answer = questionResults.correct_answer.replace(/&quot;/g, '\ ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/&#039;/g, '\ ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/&rsquo;/g, '\ ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/&ldquo;/g, '\ ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/&helipp;/g, '\ ');
            questionResults.correct_answer = questionResults.correct_answer.replace(/rdquo;/g, '\ ');

            //IncorrectAnswers
            //  questionResults.incorrect_answers = decodeURI(questionResults.incorrect_answers);
            //  questionResults.incorrect_answers = quesationResult.incorrect_answers.map(singleIncorrectAnswers => {
            //      singleIncorrectAnswers.replace( 
                     
            //     } 
            //    questionResults.incorrect_answers.replace(/&#039;/g, '\ ');
            //     questionResults.incorrect_answers.replace(/&quot;/g, '\ ');
            //     questionResults.incorrect_answers.replace(/&rsquo;/g, '\ ');
            //     questionResults.incorrect_answers.replace(/&ldquo;/g, '\ ');
            //     questionResults.incorrect_answers.replace(/&helipp;/g, '\ ');
            //     questionResults.incorrect_answers.replace(/&rdquo;/g, '\ ');
        
            
                resolve(questionResults);
    })
        .catch(err => reject(reject));
});

//add question
//update question

export default {getOneQuestion};