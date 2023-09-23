//make API call to argocd to sync the app
const axios = require('axios');

async function getToken() {
  const response = await axios.post('https://argocd.amrio.nl/api/v1/session/login', {
    username: 'admin',
    password: 'Maxie2001@'
  });
  console.log(response.data.token)
  return response.data.token;
}


async function syncApp(token) {
  const response = await axios.post('https://argocd.amrio.nl/api/v1/applications/argocd', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  console.log(response.data);
  return response.data;
}


async function main() {
  const token = await getToken();
  const result = await syncApp(token);
}


main();