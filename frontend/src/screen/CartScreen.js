import React from 'react';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.serach? Number(props.location.serach.split('=')[1]): 1;
  return (
    <>
    <h1>hello i´m CartScreen</h1>
    <p>
     ADD TO CART : ProductId: {productId} Qty: {qty}
    </p>
    </>
  );
}
