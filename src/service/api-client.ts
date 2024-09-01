import axios, { CanceledError } from "axios";


export default axios.create({
    baseURL: 'https://raw.githubusercontent.com/alj-devops/santa-data/master',    
})


export {CanceledError};