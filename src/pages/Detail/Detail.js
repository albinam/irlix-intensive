import React, {useEffect} from 'react';
import DetailCard from "../../components/DetailCard/DetailCard";
import {useDispatch, useSelector} from "react-redux";
import {getDrink} from "../../assets/utils/getData";
import {useParams} from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function Detail() {
    const dispatch = useDispatch();
    const drink = useSelector(state => state.drinks.drink);
    const loading = useSelector(state => state.drinks.loadingDrink);
    const {id} = useParams();

    useEffect(() => {
        if (loading) {
            dispatch(getDrink(id));
        }
    }, [loading])

    return (
        <div>
            {loading ? <Loading/> : <div>
                <DetailCard key={drink.id} drink={drink}/>
            </div>
            }
        </div>
    )
}

export default Detail;