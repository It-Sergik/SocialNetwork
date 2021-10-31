import {instance} from "./axios";


export const headerAPI = {
    getLogin(){
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}