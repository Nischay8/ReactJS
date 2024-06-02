import { useState } from "react";

const initialFriends = [];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, SetShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    SetShowAddFriend((show) => !show);
  }

  function handelAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friend={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handelAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendsList({ friend }) {
  return (
    <ul>
      {friend.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You Owe {friend.name} {friend.balance}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} ownes You {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>You And {friend.name} are Even!</p>}
      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setname] = useState();
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function hanleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: crypto.randomUUID(),
    };

    onAddFriend(newFriend);

    console.log(newFriend);

    setname("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={hanleSubmit}>
      <label> Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
          console.log(e.target.value);
        }}
      />

      <label>Image URL </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>Bill Value</label>
      <input type="text" />

      <label>Your Exprense</label>
      <input type="text" />

      <label>X's</label>
      <input type="text" disabled />

      <label> Who is Paying the bill</label>
      <selec>
        <option value="user">You</option>
        <option value="friend">X</option>
      </selec>
      <Button>Split Bill</Button>
    </form>
  );
}
