import React from 'react'
import checkout from '../../Assets/checkout.jpeg'
import contactlogo from '../../Assets/a74736d502746301ed573ed8940fc322.png'
import style from './CheckOut.module.css'

export default function CheckOut() {
  return (
    <div>
      <div className="container">
  <img src={checkout} className={`${style.CkeckOut}`}/>
  <div className={`${style.content}`}>
  <img src={contactlogo} className={`${style.contactlogo}`}/>
  <p className={`${style.p}`}>CheckOut</p>
  Home <i class="fas fa-angle-right"></i> CheckOut
  </div></div>
  <div class="container">
        <div class="billing-details">
            <h2>Billing details</h2>
            <form>
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name"/>
                
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name"/>
                
                <label for="company-name">Company Name (Optional)</label>
                <input type="text" id="company-name" name="company-name"/>
                
                <label for="country">Country / Region</label>
                <select id="country" name="country">
                    <option value="sri-lanka">Sri Lanka</option>
                </select>
                
                <label for="street-address">Street address</label>
                <input type="text" id="street-address" name="street-address"/>
                
                <label for="city">Town / City</label>
                <input type="text" id="city" name="city"/>
                
                <label for="province">Province</label>
                <input type="text" id="province" name="province" value="Western Province"/>
                
                <label for="zip-code">ZIP Code</label>
                <input type="text" id="zip-code" name="zip-code"/>
                
                <label for="phone">Phone</label>
                <input type="text" id="phone" name="phone"/>
                
                <label for="email">Email address</label>
                <input type="email" id="email" name="email"/>
                
                <label for="additional-info">Additional Information</label>
                <textarea id="additional-info" name="additional-info"></textarea>
            </form>
        </div>
       
        <div class="order-summary">
            <h2>Product</h2>
            <table>
                <tr>
                    <th>Aggregated 1 x 1</th>
                    <td>Rs. 250,000.00</td>
                </tr>
                <tr>
                    <th>Subtotal</th>
                    <td>Rs. 250,000.00</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td class="total">Rs. 250,000.00</td>
                </tr>
            </table>
            <div class="payment-methods">
                <label>
                    <input type="radio" name="payment-method" value="bank-transfer" checked/>
                    Direct Bank Transfer
                </label>
                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                <label>
                    <input type="radio" name="payment-method" value="cash-on-delivery"/>
                    Cash on Delivery
                </label>
            </div>
            <div class="place-order">
                <button type="button">Place order</button>
            </div>
            <p class="privacy-policy">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#">privacy policy</a>.</p>
        </div>
    </div>
    </div>
  )
}
