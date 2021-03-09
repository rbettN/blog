import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(request => {
    //console.log(request);
    return request; /*The return for the request must be used. Otherwise, the request is blocked.*/
}, error => {
    //console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    //console.log(response);
    return response; /*The return for the response must be used. Otherwise, the response is blocked.*/
}, error => {
    //console.log(error);
    return Promise.reject(error);
});

export default instance;