import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    let nextVal = quantity + 1;
    setQuantity(nextVal);
    props.onChange(nextVal);
  }

  function decreaseQuantity() {
    let nextVal = quantity - 1;
    if (nextVal > 0) {
      setQuantity(nextVal);
      props.onChange(nextVal);
    }
  }

  return (
    <div className="quantity-picker">
      <button className="btn-qty" onClick={decreaseQuantity}>-</button>
      <span className="qty-value">{quantity}</span>
      <button className="btn-qty" onClick={increaseQuantity}>+</button>
    </div>
  );
}

export default QuantityPicker;
