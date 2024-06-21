import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";
import AppNav from "../Components/AppNav";

function Homepage() {
  return (
    <div>
      <h1 className="test">WorldWise</h1>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>
      <Link to="/app">Go To THe App</Link>
    </div>
  );
}

export default Homepage;
