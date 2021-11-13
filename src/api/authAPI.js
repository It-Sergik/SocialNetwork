import {instance} from "./axiosInstance";


export const authAPI = {
    getLogin(){
        return instance.get(`auth/me`)
            .then(response => response.data);
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`);
    }

}