import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "@env";
import IUser from "../models/UserModel";

//getUsers
//getUserDetail
//getUserFollowers

//https://api.github.com/users?per_page=100
const getUsersService = async (): Promise<any> => {
    try {
        const response: AxiosResponse<IUser> = await axios.get(`${BASE_URL}?per_page=100`)
        //console.log(response.data)
        return response.data
    } catch (error) {
        throw new Error("API Error:" + error)
    }
}

//https://api.github.com/users/furkannsenol
const getUserDetailService = async (userName: string): Promise<any> => {
    try {
        const response: AxiosResponse<IUser> = await axios.get(`${BASE_URL}/${userName}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        throw new Error("API Error:" + error)
    }
}


export const ApiServices = {
    getUsersService,
    getUserDetailService
}