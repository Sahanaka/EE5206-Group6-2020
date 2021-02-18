import axios from 'axios';

export const getAllProducts = () => async dispatch => {
    try {
        await axios.get('"https://localhost:5001/api/seller');

        dispatch(setAlert("Successfully loaded products", "success"));
        

    } catch (error) {
        dispatch(setAlert("You don't have any products to sell!", "danger"));
        
    }
};

export const addNewProduct = () => async dispatch => {
    try {
        const res = await axios.post('"https://localhost:5001/api/seller');
    } catch (error) {
        dispatch(setAlert("Something went wrong!", "danger"));
    }
};

