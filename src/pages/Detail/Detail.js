import React, {useEffect, useState} from 'react';
import DetailCard from "../../components/DetailCard/DetailCard";
import {useDispatch, useSelector} from "react-redux";
import {getDrink} from "../../assets/utils/getData";
import {useParams} from "react-router-dom";

function Detail() {
    const dispatch = useDispatch();
    const drink = useSelector(state => state.drinks.drink);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        if (loading) {
            dispatch(getDrink(id));
        }
        console.log(drink)
        if (drink !== null) {

            setLoading(false);
        }
    }, [drink])

    return (
        <div>
            {loading ? <div>Loading</div> : <div>
                <DetailCard key={drink.id} drink={drink}/>
            </div>

            }
        </div>
    )
}

export default Detail;