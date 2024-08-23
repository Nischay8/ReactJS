import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");

  const { SetUser } = useContext(UserContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    SetUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => SetUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => SetPassword(e.target.value)}
      />
      <button onClick={handelSubmit}>submit</button>
    </div>
  );
}

export default Login;
