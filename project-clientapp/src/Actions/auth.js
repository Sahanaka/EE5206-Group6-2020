import axois from 'axios';



export const login = async (email, password) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ email, password });

    try {
         await axois.post("https://localhost:5001/api/LogSignUp/login", body, config)
         .then(res => {return res.status});
         alert("Success");
         
         
    } catch (error) {
        alert(" Please Check your Email and Password again");
        console.log(error);
        
    }
    

};




export const registerCustomer = async (name, email, address, Contatct_No, password, ReTypePassword) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ name, email, address, Contatct_No, password, ReTypePassword });

    try {
        await axois.post("https://localhost:5001/api/LogSignUp/signup/customer", body, config);
        alert("Your are registerd ");

    } catch (error) {
        alert("Please Check Your Information again ");
        console.log(error);
        
    }

};