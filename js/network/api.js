import { addAccount } from "../db.js";
import { request } from "./network.js";

export function login(token) {
    return new Promise((resolve, reject) => {
        request('/me', token)
            .then(result => {
                addAccount(token, result.username)
                resolve(result.username)
            })
            .catch(error => reject(error))
    })
}