import React, { useState } from "react";
import { phonesData } from "./product.data";
import { Card, Button } from "react-bootstrap";

const Products = () => {
  const [items, setItems] = useState(phonesData);

  const decrementQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(newItem);
  };

  const incrementQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem);
  };



  return (
    <div>
      <h1 className="  text-center shadow p-2 m-2 bg-body-tertiary text-primary rounded">
        Products
      </h1>
      <div className="bg-light  p-3">
        {items.map((item, index) => (
          <div key={index} className="d-inline-flex">
            <Card
              className="shadow p-2 m-2 bg-body-tertiary rounded"
              style={{ width: "12rem" }}
            >
              <Card.Img
                style={{ height: "15rem" }}
                className="p-2"
                variant="top"
                src={require(`./assets/${item.image}.png`)}
              />
              <Card.Body>
                <Card.Title className="text-primary" >{item.model}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <h5>Price: ₹ {item.price}</h5>
                <div>
                  <p>
                    Qty:
                    <Button
                      onClick={() => decrementQty(item.id)}
                      className="m-1"
                    >
                      <b>-</b>
                    </Button>
                    {item.qty}
                    <Button onClick={() => incrementQty(item.id)} className="m-1">
                      +
                    </Button>
                  </p>
                </div>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
