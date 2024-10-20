import { Route, Switch } from "react-router-dom";

import Headers from "./components/Headers";
import Pagination from "./components/Pagination";
import ThankYouCard from "./components/ThankYouCard";
import AddtoCartModal from "./components/AddtoCartModal";
import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <Headers />
      <Pagination />
      <Switch>
        <Route exact path="/thank-you" component={ThankYouCard} />
        <Route exact path="/add-to-cart" component={AddtoCartModal} />
      </Switch>
    </div>
  );
};

export default App;
