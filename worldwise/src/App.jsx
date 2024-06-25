import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./Components/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CountryList from "./Components/CountryList";

import { useEffect, useState } from "react";
import CityList from "./Components/CityList";

function App() {
  const [cities, setCities] = useState([]);
  const [isloading, setIsloading] = useState(false);

  // const [username, setusername] = useState("");

  useEffect(function () {
    async function fetchCities() {
      try {
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data");
      } finally {
        setIsloading(true);
      }
    }

    fetchCities();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route index element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="Homepage" element={<Homepage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isloading={isloading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isloading={isloading} />}
            />
            <Route
              path="countries"
              element={<CountryList cities={cities} isloading={isloading} />}
            />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
