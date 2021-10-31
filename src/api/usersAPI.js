import {instance} from "./axios";

export const usersAPI = {

   getUsers(currentPage, pageSize) {
     return  instance.get(`users/?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data);
   },

   deleteFollow(userId){
       return instance.delete(`follow/${userId}`)
           .then(response => response.data);
   },

    postFollow(userId) {
       return instance.post(`follow/${userId}`, {})
           .then(response => response.data)
    }
}