import axios from 'axios';


const getEndpointFromConf = ({url,baseURL})=>url.replace(baseURL, '');

const stdInterceptor = (reqOrRes)=>{
  if(reqOrRes.url && reqOrRes.baseURL){
    // request 
    console.log(`Starting Request: ${getEndpointFromConf(reqOrRes)} \n`, reqOrRes);
  } else{
    //response
    console.log(`Response: ${getEndpointFromConf(reqOrRes.config)} \n`, reqOrRes);
  }
  return reqOrRes;
}

const instance = axios.create({
  baseURL: 'https://apiurl.com',
  timeout: 20000,
});

class RestClient {
  constructor() {
    instance.interceptors.request.use(stdInterceptor);
    instance.interceptors.response.use(stdInterceptor);
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
