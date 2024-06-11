import { getAccount } from '../db.js'

export function request(route, suppliedToken = '') {
    const token = suppliedToken || getAccount().token;

    return new Promise((resolve, reject) => {
        fetch(`https://api.comma.ai/v1${route}`, {
            method: 'GET',
            headers: {
              'Authorization': `JWT ${token}`
            }
          })
          .then(response => response.json())
          .then(data => {
            resolve(data);
          })
          .catch(error => {
            reject('Error:', error);
          });
    })
      
}