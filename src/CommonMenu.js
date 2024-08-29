import React from "react";
import { Link } from "react-router-dom";
import "./CommonMenu.css";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from "reactstrap";

/**
 * CommonMenu Component
 * Displays a list of snack or drink items as links in a menu format.
 */
function CommonMenu({ items, title, itemType }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${itemType}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default CommonMenu;
