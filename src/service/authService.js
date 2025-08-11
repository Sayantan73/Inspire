import axios from "axios";
import conf from "../conf/conf.js";

export class AuthService {
    async createAccount({ name, email, password }) {
        try {
            const userAccount = await axios.post(`${conf.backendServiceUrl}/api/user/register`, { name, email, password })
            if (userAccount.data) {
                return this.logIn({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            console.error("Auth Service :: createAccount :: error: ", error?.message)
            throw new Error("Error creating account:", error)
        }
    }

    async logIn({ email, password }) {
        try {
            const response = await axios.post(`${conf.backendServiceUrl}/api/user/login`, JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                })
            return response?.data;
        } catch (error) {
            console.error("Auth Service :: login :: error: ", error?.message)
            throw new Error("Error logging in:", error)
        }
    }

    async getCurrentUser() {
        try {
            const response =  await axios.get(`${conf.backendServiceUrl}/api/user/current-user`, {withCredentials: true})
            return response?.data;
        } catch (error) {
            console.error("Auth Service :: getCurrentUser :: error: ", error?.message)
            throw new Error("Error getting current user:", error)
        }
    }

    async logOut () {
        try {
            return await axios.post(`${conf.backendServiceUrl}/api/user/logout`)
        } catch (error) {
            console.error("Auth Service :: logOut :: error: ", error?.message)
            throw new Error("Error logging out:", error)
        }
    }

    async savedPins () {
        try {
            return await axios.get(`${conf.backendServiceUrl}/api/user/saved-pins`)
        } catch (error) {
            console.error("Auth Service :: savedPins :: error: ", error?.message)
            throw new Error("Error getting saved pins:", error)
        }
    }
}

const authService = new AuthService();
export default authService;