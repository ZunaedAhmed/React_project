export const isAgeLessThanTen = (dob: Date): boolean =>{

    if(dob){
        dob = new Date(dob);
        const currentDate = new Date();
        
        let age = currentDate.getFullYear() - dob.getFullYear();
        
        const isBirthdayPassed = 
            currentDate.getMonth() > dob.getMonth() || 
            (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() >= dob.getDate());
    
        if (!isBirthdayPassed) {
            age--;  
        }
    
        if(age < 10) return false;

        return true;
    }
    else{
        return false;
    }
}
