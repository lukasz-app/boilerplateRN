import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://apiurl.com',
  timeout: 20000,
});

class RestClient {
  constructor() {
    instance.interceptors.request.use((request) => {
      console.log(`Starting Request: ${request.url.replace(request.baseURL, '')} \n`, request);
      return request;
    });

    instance.interceptors.response.use((response) => {
      console.log(`Response: ${response.config.url.replace(response.config.baseURL, '')} \n`, response);
      return response;
    });
  }

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
  }

  getAuthHeader() {
    if (this.getToken()) {
      return this.createAuthHeader(this.getToken());
    }
    return null;
  }

  createAuthHeader(token) {
    if (this.getToken()) {
      return {
        Authorization: `Bearer ${token}`,
      };
    }
    return null;
  }
}
export default new RestClient();
