const axios = require('axios');
import { getCookiesData } from '../services/cookie'
var token = getCookiesData()
axios.defaults.headers.common['Authorization'] = JSON.stringify(token)


class ApiService {

    async get(url) {
      return new Promise(async function (resolve, reject) {
        await axios({
          method: 'get',
          url: url,
          headers:
          {
            'authorization': token,
            'Accept': "application/json",
            "Content-Type": "application/json",
          }
        }).then((result) => {
          resolve(result);
        })
          .catch((err) => {
            console.log("error=: " + err);
            if (err == 'Error: Request failed with status code 403' || err == 'Error: Request failed with status code 401') {
              alert("Login to continue!!")
              //window.location.href = '/admin/dashboard/login'
            } else {
              alert("Error while fetching list!")
            }
  
          });
      })
    }
}