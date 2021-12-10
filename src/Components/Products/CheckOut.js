import React from "react";
import "./CheckOut.css";
import SubTotal from "./SubTotal";
function CheckOut() {
   return (
      <div className='checkOut'>
         <div className='checkOut_left'>
            <img
               className='checkOut_add'
               alt=''
               src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            />
            <div>
               <h2 className='checkOut_title'>Your shopping Cart</h2>
               {/*Cart_Items*/}
            </div>
         </div>

         <div className='checkOut_right'>
            <SubTotal />
         </div>
      </div>
   );
}

export default CheckOut;
