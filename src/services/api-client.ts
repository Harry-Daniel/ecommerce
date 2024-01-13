import axios, { AxiosRequestConfig } from "axios";



const axiosInstance = axios.create({
    baseURL: 'https://65a23d0842ecd7d7f0a74619.mockapi.io/',

});

class APIClient {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get(this.endpoint, config)
            .then(res => res.data);
    }

    get = (id: number | string) => {
        return axiosInstance
            .get(this.endpoint + '/' + id)
            .then(res => res.data);

    }



}

export default APIClient;