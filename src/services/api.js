import axios from 'axios'
const apiUrl = "api.meadventures.tk"

export const apiCall= axios.create({
    baseUrl:apiUrl
})

apiCall.interceptors.response.use(function(response){
    return response;

}, function(error){
    return 'error je'
})