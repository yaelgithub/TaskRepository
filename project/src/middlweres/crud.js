import axios from 'axios';
import actions from '../Store/actions';

// export const setList=({dispatch,getState})=>next=>action=>{
//     if(action.type==='SET_LIST'){
//         axios.post(`http://localhost:4000/Set`,  getState().list )
//         .then(res => {
//           console.log(res);
//           console.log(res.data);
//         })
        
//         dispatch(actions.setList(newCompanyName))
//     }
//     return next(action)
// }\var axios = require('axios');
// var data = JSON.stringify({"title":"math","completed":false});

// var config = {
//   method: 'patch',
//   url: 'localhost:4000/task/updateTask/6051d014455dd70848b464c9',
//   headers: { 
//     'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2MTU5MTg5MzV9.q2apPwbOnSa5_Lsh9L3_k9U0XMNdzTDD_wDqRh3gkjo', 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });