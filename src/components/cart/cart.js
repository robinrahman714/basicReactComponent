import React from "react";

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  for (const purchase of cart) {
    total = total + parseInt(purchase.budget);
  }
  return (
    <div className="rounded position-fixed bg-dark text-white me-5 p-5">
      <h3>Total Album Purchased </h3>
      <h3>Unit Order:{cart.length} </h3>
      <h3>Total Amount:${total}</h3>
    </div>
  );
};

export default Cart;
