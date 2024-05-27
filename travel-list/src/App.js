import { useState } from "react";
import { PackingList } from "./PackingList";
import { Form } from "./Form";

export const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];



export default function App() {
  const [items, setItems] = useState([]);
  function HandelAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  return <div className="app">
    <Logo />
    <Form onAddItems={HandelAddItems} />
    <PackingList items={items} onDeleteItem={handelDeleteItem} onToggleItem={handleToggleItem} />
    <Stats />
  </div>
}

function Logo() {
  return <h1>Far away</h1>;
}

export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}{item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌&times;</button>
    </li>
  )
}

function Stats() {

  return (
    <footer className="stats">
      <em>You have x Items in Your List,and you already packed X </em>
    </footer>
  )
}