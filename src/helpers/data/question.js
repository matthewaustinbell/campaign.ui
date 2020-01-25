// import axios from 'axios';
// import firebaseConfig from '../apiKeys.json';

// const baseUrl = 'https://localhost:44322/api/opentriviadb';

// const getMyQuestions = uid => new Promise((resolve, reject) => {
//   axios
//     .get(`${baseUrl}/questions.json?orderBy="uid"&equalTo="${uid}"`)
//     .then((res) => {
//       const questions = [];
//       if (res.data !== null) {
//         Object.keys(res.data).forEach((fbKey) => {
//           res.data[fbKey].id = fbKey;
//           questions.push(res.data[fbKey]);
//         });
//       }
//       resolve(questions);
//     })
//     .catch(err => reject(err));
// });

// const deletequestion = questionId => axios.delete(`${baseUrl}/questions/${questionId}.json`);


// const getSingleQuestion = questionId => axios.get(`${baseUrl}/questions/${questionId}.json`);

// export default {
//   getMyQuestions,
//   deleteQuestion,
//   getSingleQuestion,
// };