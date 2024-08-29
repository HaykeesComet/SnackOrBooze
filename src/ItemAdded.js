import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

/**
 * ItemAdded Component
 * Displays a confirmation message and a link back to the home page after an item is added.
 */
function ItemAdded() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h2>Item Successfully Added!</h2>
            <Link to="/">Go back to the homepage</Link>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemAdded;
