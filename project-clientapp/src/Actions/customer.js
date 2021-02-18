import axios from 'axios';

export const getShops = async (category) => {
    try {
        const res = await axios.get(`https://localhost:5001/api/CustomerModels/category/${category}`);
        return res.data;
    } catch (error) {
        console.log(error)
    }
};

export const getShopsByCategory = () => {
    
};