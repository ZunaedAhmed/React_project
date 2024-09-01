import UserProfile from "../models/UserProfile";
import User from "../models/User";
import apiClient from "./api-client";

class ChildService {


    getAllUserProfiles(){
        const request =  apiClient.get<UserProfile[]>('/userProfiles.json')        
        return request;
    }

    getAllUsers() {
        const request =  apiClient.get<User[]>('/users.json')        
        return request;
    }

}


export default  new ChildService();
