import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SnackOrBoozeApi from "./SnackOrBoozeApi";
import Home from "./Home";
import CommonMenu from "./CommonMenu";
import CommonItem from "./CommonItem";
import AddItemForm from "./AddItemForm";
import NotFound from "./NotFound";
import ItemAdded from "./ItemAdded"; // Import ItemAdded component
import NavBar from "./NavBar";
import './App.css';

/**
 * App Component
 * The main component that sets up routing and fetches the initial data for snacks and drinks.
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  /**
   * useEffect hook to fetch snacks and drinks data on component mount.
   */
  useEffect(() => {
    async function fetchData() {
      const snacksData = await SnackOrBoozeApi.getSnacks();
      const drinksData = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacksData);
      setDrinks(drinksData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  /**
   * Helper function to find an item by its ID.
   */
  const findItemById = (items, id) => items.find(item => item.id === id);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <CommonMenu items={snacks} title="Snacks" itemType="snacks" />
            </Route>
            <Route exact path="/drinks">
              <CommonMenu items={drinks} title="Drinks" itemType="drinks" />
            </Route>
            <Route path="/snacks/:id" render={({ match }) => {
              const { id } = match.params;
              const snack = findItemById(snacks, id);
              return snack ? (
                <CommonItem items={snacks} cantFind="/snacks" />
              ) : (
                <Redirect to="/not-found" />
              );
            }} />
            <Route path="/drinks/:id" render={({ match }) => {
              const { id } = match.params;
              const drink = findItemById(drinks, id);
              return drink ? (
                <CommonItem items={drinks} cantFind="/drinks" />
              ) : (
                <Redirect to="/not-found" />
              );
            }} />
            <Route exact path="/add-item">
              <AddItemForm />
            </Route>
            <Route exact path="/item-added">
              <ItemAdded /> {/* New route for item-added */}
            </Route>
            <Route path="/not-found">
              <NotFound />
            </Route>
            <Route>
              <Redirect to="/not-found" />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
