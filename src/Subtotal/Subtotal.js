<<<<<<< HEAD:Subtotal/Subtotal.js
import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
    return (
        <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal (vfdvffrd099rfefr  items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
    )
}

export default Subtotal
=======
import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
    return (
        <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal (01332344 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
    )
}

export default Subtotal
>>>>>>> e308817cddf6c02d5b336ccb006f4088981a0a2b:src/Subtotal/Subtotal.js
