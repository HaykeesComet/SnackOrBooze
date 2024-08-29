import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Home.css";

/**
 * Home Component
 * Displays a welcome message and the number of snacks and drinks available.
 */
function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h1>Snack or Booze</h1>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's hottest coding ...<br></br> ... and premier dive cafe!
            </h3>
            <h5>Right now, We have {snacks.length} snacks and {drinks.length} drinks available.</h5>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
