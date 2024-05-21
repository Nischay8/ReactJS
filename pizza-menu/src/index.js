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
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style =
  //     { color: 'red', fontSize: '48px', textTransform: "uppercase" }

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <>
          <p>
            Authentic italian cuisine.6 Creative dishes to choose from.All from
            our stone oven,all organic,all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizz) => {
              return <Pizza pizzaObj={pizz} key={pizz.name} />;
              console.log(pizz);
            })}
          </ul>
        </>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(props)
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="Pizza spinaci" />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredient}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer(props) {
  console.log(props);
  const hour = new Date().getHours();
  const openHour = 1;
  const CloseHour = 24;
  const isOpen = hour >= openHour && hour <= CloseHour;
  console.log(isOpen);

  if (hour >= openHour && hour <= CloseHour) {
    alert("We are Currently Open");
  } else {
    alert("We are Closed!");
  }
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're open untill {CloseHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order Now</button>
        </div>
      )}
    </footer>
  );
}

// React  V18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React Before 18
