import React, {useEffect} from 'react';
import DetailCard from "../../components/DetailCard/DetailCard";
import {useDispatch, useSelector} from "react-redux";
import {getDrink} from "../../assets/utils/getData";
import {useParams} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {setDrinkLoading} from "../../redux/actions/actions";

function Detail() {
    const dispatch = useDispatch();
    const drink = useSelector(state => state.drinks.drink);
    const loading = useSelector(state => state.drinks.loadingDrink);
    const {id} = useParams();

    useEffect(() => {
        if (drink?.id !== id) {
            dispatch(setDrinkLoading(true));
        }
        if (loading) {
            dispatch(getDrink(id));
        }
    }, [loading])

    if (loading) {
        return (
            <Loading/>
        )
    } else {
        return (
            <DetailCard key={drink.id} drink={drink}/>
        )
    }
}

export default Detail;