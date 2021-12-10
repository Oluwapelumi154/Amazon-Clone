import React from "react";
import CurrencyFormat from "react-currency-format";
import "./CheckOut.css";
function SubTotal() {
   return (
      <div className='subTotal'>
         <CurrencyFormat>
            renderText=
            {(value) => (
               <>
                  <p>
                     Subtotal(0 items):<strong>0</strong>
                  </p>
                  <small className='subtotal_gift'>
                     <input type='checkbox' />
                     This Order Contains a gift
                  </small>
               </>
            )}
         </CurrencyFormat>
      </div>
   );
}
export default SubTotal;
