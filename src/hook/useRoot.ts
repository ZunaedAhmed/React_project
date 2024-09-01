import { useEffect } from "react"
import PendingRequest from "../models/PendingRequest";
import send_email from "../service/send-email";

const useRoot = (pendingRequest: PendingRequest[])=>{
    useEffect(()=>{
        if(pendingRequest){
            // Set up interval to call updateData every 15 seconds
            const intervalId = setInterval(()=>{
                send_email(pendingRequest)
            }, 30000);
            
            // Cleanup function to clear the interval
            return () => clearInterval(intervalId);
        }
    }, [pendingRequest]);
}

export default useRoot;