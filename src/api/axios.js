import * as axios from "axios";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "e2e16f0a-027f-4003-ac26-9f22464e5e89"
    }
})