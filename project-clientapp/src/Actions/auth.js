import axois from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


export const login = async (email, password) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ email, password });

    try {
        await axois.post("https://localhost:5001/api/LogSignUp/login", body, config);
        //console.log(res)
        console.log("Success")
        
    
        
        //return res;

    } catch (error) {
        console.log(error);
        console.log("errrrrrrrrrrrrrrrrrrr")
    }

};