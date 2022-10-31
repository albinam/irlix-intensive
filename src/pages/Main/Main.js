import React, {useEffect, useState} from 'react';
import './Main.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import {getDrinks} from "../../assets/utils/getData";
import {useDispatch, useSelector} from "react-redux";

function Main() {
    const dispatch = useDispatch();
    const drinks = useSelector(state => state.drinks.filteredDrinks);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            dispatch(getDrinks());
        }
        if (drinks.length !== 0) {
            setLoading(false);
        }
    }, [drinks])

    return (
        <div>
            {loading ? <div>Loading</div> : <div>
                <Header/>
                <main className="main">
                    <div className="container">
                        <section className='cards'>
                            {drinks.map(drink => {
                                console.log(drink)
                                return (
                                    <Card key={drink.id} drink={drink}/>
                                )
                            })}
                        </section>
                    </div>
                </main>
                <Footer/>
            </div>
            }
        </div>
    )
}

export default Main;