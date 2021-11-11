import * as axios from "axios";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "193d65e6-1108-4da9-913d-2c32c5cf815d"
    }
})