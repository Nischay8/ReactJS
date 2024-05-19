import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (<div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
    )
}

function Header() {

    // const style =
    //     { color: 'red', fontSize: '48px', textTransform: "uppercase" }

    return (
        <header className="header">
            <h1 >Fast React Pizza Co.</h1>
        </header>
    );
}


function Menu() {

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza name='Pizza Spinaci' ingredient='Tomato, mozarella, spinach, and ricotta cheese' photo_link='pizzas/spinaci.jpg' price={10} />
            <Pizza name="pizza Funghi" ingredient="Tomato,mushrooms" price={12} photo_link='pizzas/funghi.jpg' />
        </main>
    )
}


function Pizza(props) {
    // console.log(props)
    return (
        <div className="pizza">
            <img src={props.photo_link} alt="Pizza spinaci" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.ingredient}</p>
                <span>{props.price}</span>
            </div>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const CloseHour = 18;

    if (hour >= openHour && hour <= CloseHour) {
        alert("We are Currently Open");
    } else {
        alert("We are Closed!");
    }
    return (
        <footer className="footer">{new Date().toLocaleTimeString()}.We're currently Open</footer>
    )
}




// React  V18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);




// React Before 18
