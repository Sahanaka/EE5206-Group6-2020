import axios from "axios";

// const baseURL = process.env.SERVER_DEV_URL + '/admin';



export const getDashboardData = async () => {
    try {
        const res = await axios.get('https://localhost:5001/api/admin/details');
        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
};

export const getSellers = async () => {
    try {
        
    } catch (error) {
        
    }
}

export const getCustomers = () => {

}

export const deleteCustomer = (id) => {
    try {
        
    } catch (error) {
        
    }
}

export const deleteSeller = (id) => {
    try {
        
    } catch (error) {
        
    }
}
