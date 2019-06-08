import config from '../configs/config';
import axios from 'axios';

class Api {
    constructor() {
        this.timeout = 10000;
        this.options = {};
        this.instance = axios.create({baseURL: `${config.BACKEND_ENDPOINT}/`, timeout: this.timeout});
    }
    appendParameters(options) {
        let fetchUrl = `/search?q=${options}`;
        return fetchUrl;
    }
    get(options) {
        return this.instance.get(this.appendParameters(options))
            .then((resolve) => {
            return resolve;
            }, (reject) => {
            return Promise.reject(reject);
            }).catch((error) => {
            throw error;
        });
    }
    
}
export default Api;