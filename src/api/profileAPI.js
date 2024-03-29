import {instance} from "./axiosInstance";


export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },

    getStatus(userId){
        return instance.get(`profile/status/` + userId)
            .then(response => response.data);
    },

    updateStatus(status){
        return instance.put(`profile/status`, {status});
    }
}