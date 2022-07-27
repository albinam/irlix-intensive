import React from 'react';
import './Main.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {drinks} from "../../assets/data/temporaryData";
import Card from "../../components/Card/Card";

function Main() {
    return (
        <div>
            <Header/>
            <main className="main">
                <div className="container">
                    <section className='cards'>
                        {drinks.map(drink => {
                            return (
                                <Card key={drink.id} image={drink.image} title={drink.title} degree={drink.degree}
                                      subtitle={drink.subtitle}/>
                            )
                        })}
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Main;