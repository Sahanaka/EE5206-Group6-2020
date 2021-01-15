import axois from 'axios';

export const login = async (email, password) => {
    const config = {
        headers: { "Content-Type": "application/json"}
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = axois.post("https://localhost:5001/api/LogSignUp/login", body, config);
        console.log(res)
    } catch (error) {
        console.log(error);
    }
    
};