import axios from "axios";
import {setDrinks, setFilteredDrinks} from "../../redux/actions/actions";

const myAxios = axios.create({
    baseURL: 'https://62e121d1fa99731d75cee987.mockapi.io/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getDrinks = () => {
    return (dispatch) => {
        myAxios.get('/drinks')
            .then((resp) => {
                dispatch(setDrinks(resp.data));
                dispatch(setFilteredDrinks(resp.data));
            })
    }
}