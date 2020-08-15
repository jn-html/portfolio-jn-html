import axios from 'axios';
import Cookies from 'js-cookie';

// const setAuthHeader = () => {
//   const token = Cookies.getJSON('jwk');

//   if (token) {
//     return { headers: {'authorization': `Bearer ${Cookies.getJSON('jwt')}`}}
//   }
//   return undefined;
// }

// export const getSecretData = async () => {
//   return await axios.get('/api/v1/secret', setAuthHeader() ).then(response =>  response.data);
// }

export const getSecretData = async () => {
  return await axios.get('/api/v1/secret', { headers: {'authorization': `Bearer ${Cookies.getJSON('jwt')}`}} ).then(response =>  response.data);
}

