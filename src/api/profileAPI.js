import {instance} from "./axios";


export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId)
            .then(responce => responce.data);
    }
}