import React from 'react';
import './main.scss';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {drinks} from "../../assets/data/temporaryData";
import Card from "../../components/card/card";

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