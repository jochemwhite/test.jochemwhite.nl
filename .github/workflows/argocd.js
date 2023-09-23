//make API call to argocd to sync the app
import axios from 'axios';

async function getToken() {
  const response = await axios.post('https://argocd.amrio.nl/api/v1/session/login', {
    username: 'admin',
    password: 'Maxie2001@'
  });
  return response.data.token;
}


async function syncApp(token) {
  const response = await axios.post('https://argocd.amrio.nl/api/v1/applications/argocd', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
}


async function main() {
  const token = await getToken();
  const result = await syncApp(token);
  console.log(result);
}