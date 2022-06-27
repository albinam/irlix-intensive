import React from 'react';
import './main.scss';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Main() {
    return (
        <div>
            <Header/>
            <main className="main">
                <div className="container"/>
            </main>
            <Footer/>
        </div>
    )
}

export default Main;