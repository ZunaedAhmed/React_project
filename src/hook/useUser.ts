import { useEffect, useState } from "react";
import userService from "../service/user-service";
import UserProfile from "../models/UserProfile";
import User from "../models/User";


const useUser= ()=>{

    const [userProfiles, setUserProfiles] = useState<UserProfile[]>([])
    const [users, setUsers] = useState<User[]>([])

    useEffect(()=> {
   
        userService.getAllUserProfiles()
                    .then(req=> {
                        console.log(req.data);
                        setUserProfiles(req.data);
                    })
                    .catch(err=>{
                        console.log(err.message);
                    })

        userService.getAllUsers()
                    .then(req=> {
                        console.log(req.data);
                        setUsers(req.data);
                    })
                    .catch(err=>{
                        console.log(err.message);
                    })    
    }, [])

    return {userProfiles, users, setUserProfiles, setUsers};
}

export default useUser;
