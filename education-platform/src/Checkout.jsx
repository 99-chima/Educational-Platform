import React, { useContext, useState } from "react";
import { CardContext } from "./CardContext";
const Checkout = () => {
  const {
    card,
    removeFromCard,
    updateQuantity,
    totalprice,
  } = useContext(CardContext);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "save10") {
      setDiscount(0.1);
    } else if (coupon.toLowerCase() === "save20") {
      setDiscount(0.2);
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const discountedTotal = totalprice - totalprice * discount;

  return (
    <div className="container mt-5 mb-5">
      <h2 className="pt-5 text-primary fw-semibold">Checkout</h2>

      {card.length === 0 ? (
        <p className="fw-semibold fs-2 text-danger pt-5">Your cart is empty.</p>
      ) : (
        <>
          <div className="table-responsive-sm mt-5">
            <table className="table align-middle table-bordered">
              <thead className="table-light">
                <tr>
                  <th className="text-primary fw-bold text-center" scope="col">Course</th>
                  <th className="text-primary fw-bold text-center" scope="col">price</th>
                  <th className="text-primary fw-bold text-center" scope="col">Quantity</th>
                  <th className="text-primary fw-bold text-center" scope="col">Subtotal</th>
                  <th className="text-primary fw-bold text-center" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {card.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center ms-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px", borderRadius: "5px" }}
                        />
                        <span className="ms-2 fw-semibold">{item.name}</span>
                      </div>
                    </td>
                    <td className="text-center fw-semibold">${item.price}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="fw-semibold">{item.quantity}</span>
                        <button
                          className="btn btn-sm btn-outline-primary ms-2"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center fw-semibold">${item.price * item.quantity}</td>
                    <td>
                        <div className="d-flex align-items-center justify-content-center">
                      <button
                        className="btn btn-sm btn-danger fw-semibold"
                        onClick={() => removeFromCard(item.id)}
                      >
                        Remove
                      </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Coupon Input */}
          <div className="container pb-4">
          <div className="row mt-5 gy-3">
            <div className="col-md-6 col-sm-12">
              <label className="form-label mt-4 fs-3 fw-bold"  style={{color: "#00BFFF",}}>
                Have a coupon?
              </label>
              <div className="input-group mt-3">
                <input
                  type="text"
                  id="coupon"
                  className="form-control"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter coupon code"
                />
                <button className="btn btn-primary cupon fw-semibold" onClick={applyCoupon}>
                  Apply
                </button>
              </div>
           
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-primary">Order Summary</h5>
                  <p className="card-text">Subtotal: ${totalprice.toFixed(2)}</p>
                  <p className="card-text">Discount: -${(totalprice * discount).toFixed(2)}</p>
                  <hr />
                  <h5>Total: ${discountedTotal.toFixed(2)}</h5>
                  <button className="btn btn-primary fw-semibold mt-3 w-100"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#paymentAccordion"
                  aria-expanded="false"
                  aria-controls="paymentAccordion"
                  >Place Order</button>   
                  <div className="collapse mt-3" id="paymentAccordion">
  <div className="card card-body">
    <h5 className="mb-3 text-primary">Payment Information</h5>
    <form>
      <div className="mb-3">
        <label htmlFor="cardholderName" className="form-label">Cardholder Name</label>
        <input type="text" className="form-control" id="cardholderName" placeholder="Enter your Card Name" />
      </div>

      <div className="mb-3">
        <label htmlFor="cardNumber" className="form-label">Card Number</label>
        <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="expiry" className="form-label">Expiry Date</label>
          <input type="text" className="form-control" id="expiry" placeholder="MM/YY" />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input type="text" className="form-control" id="cvv" placeholder="123" />
        </div>
      </div>

      <button type="submit" className="btn btn-success w-100 mt-3">
        Complete Payment
      </button>
    </form>
  </div>
</div>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* price Summary */}
        </>
      )}
    </div>
  );
};
export default Checkout;
