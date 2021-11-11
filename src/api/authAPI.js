import {instance} from "./axiosInstance";


export const authAPI = {
    getLogin(){
        return instance.get(`auth/me`)
            .then(response => response.data);
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },

    logout() {
        return instance.delete(`auth/login`);
    }

}