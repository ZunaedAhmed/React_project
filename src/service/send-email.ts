import PendingRequest from "../models/PendingRequest";
import emailjs from 'emailjs-com';


const send_email=(pendingRequest: PendingRequest[])=>{
    console.log(pendingRequest)
    
    pendingRequest.forEach(item => {
        let formData = {            
            ...item,
            from: "from@mail.com",
            to: "to@mail.com",            
        };    
        send(formData);
    });

}

const send = (formData: any)=>{
    emailjs.send('service_q8dezoo', 'template_85vgxyc', formData, 'oZrih2tbffxpqJ7nk')
    .then((result) => {
      console.log(result.text);
      alert("Email sent successfully!");
    }, (error) => {
      console.log(error.text);
      alert("Failed to send email");
    });
}

export default send_email;