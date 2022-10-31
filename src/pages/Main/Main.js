import React, {useEffect, useState} from 'react';
import './Main.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import {getDrinks} from "../../assets/utils/getData";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../components/Loading/Loading";
import EmptyCard from "../../components/Card/EmptyCard";
import {setDrinksLoading} from "../../redux/actions/actions";

function Main() {
    const dispatch = useDispatch();
    const drinks = useSelector(state => state.drinks.filteredDrinks);
    const loading = useSelector(state => state.drinks.loadingDrinks);

    useEffect(() => {
        console.log(loading)
        if (loading) {
            dispatch(getDrinks());
        }
    }, [loading])

    if (loading) {
        return (
            <Loading/>
        )
    } else if (drinks?.length === 0) {
        return (
            <div className="empty-card">
                <Header/>
                <EmptyCard/>
                <Footer/>
            </div>
        )
    } else {
        return (
            <div>
                <Header/>
                <main className="main">
                    <div className="container">
                        <section className='cards'>
                            {drinks?.map(drink => {
                                return (
                                    <Card key={drink.id} drink={drink}/>
                                )
                            })}
                        </section>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Main;