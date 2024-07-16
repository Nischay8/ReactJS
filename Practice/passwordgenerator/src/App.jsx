/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);

  const [numberAllowed, setnumberAllowed] = useState(false);

  const [charAll, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (charAll) str += "!@#$%^&*(){}[]~`";

    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);

      setPassword(pass);
    }
  }, [length, numberAllowed, charAll, setPassword]);
  return (
    <>
      <h1 className="text-4-xl text-white text-center">Password Generator</h1>
    </>
  );
}

export default App;
