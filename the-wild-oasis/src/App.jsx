import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Heading>Wild Oasis</Heading>
        <Button onClick={() => alert("Working")}>Check In </Button>

        <Input type="number" placeholder="Nummber of your Choice"></Input>
      </div>
    </>
  );
}

export default App;
