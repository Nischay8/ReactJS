import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTables2 from "../features/cabins/CabinTables2";

function Cabins() {
  useEffect(function () {
    getCabins().then((date) => console.log(date));
  }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter /Sort</p>
      </Row>

      <Row>
        <CabinTables2 />
      </Row>
    </>
  );
}

export default Cabins;
