import React from "react";

const CheckoutPage = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT SIDE - Billing Form */}
        <div className="md:col-span-2  p-6">
          <h2 className="text-4xl text-gray-600 mb-6">Billing Details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
            {/* First & Last Name */}
            <div>
              <label className="block text-gray-700 mb-2">First Name *</label>
              <input className="w-full border border-gray-300 p-2 rounded" type="text" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name *</label>
              <input className="w-full border border-gray-300 p-2 rounded" type="text" />
            </div>

            {/* Company */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">
                Company Name (Optional)
              </label>
              <input className="w-full border border-gray-300 p-2 rounded" type="text" />
            </div>

            {/* Country */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Country / Region *</label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>United States</option>
                <option>Nigeria</option>
                <option>Canada</option>
              </select>
            </div>

            {/* Street */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Street Address *</label>
              <input
                className="w-full border border-gray-300 p-2 rounded mb-3"
                placeholder="House number and street name"
                type="text"
              />
              <input
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Apartment, suite, etc. (optional)"
                type="text"
              />
            </div>

            {/* Town & State */}
            <div>
              <label className="block text-gray-700 mb-2">Town / City *</label>
              <input className="w-full border border-gray-300 p-2 rounded" type="text" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">State *</label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Florida</option>
                <option>Texas</option>
                <option>California</option>
              </select>
            </div>

            {/* Zip */}
            <div>
              <label className="block text-gray-700 mb-2">Zip Code *</label>
              <input className="w-full border border-gray-300 p-2 rounded" type="text" />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 mb-2">Phone *</label>
              <input className="w-full border border-gray-300 p-2 rounded" type="text" />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Email Address *</label>
              <input className="w-full border border-gray-300 p-2 rounded" type="email" />
            </div>

            {/* Order Notes */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">
                Order Notes (Optional)
              </label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded"
                rows="4"
                placeholder="Notes about your order, like special delivery notes"
              />
            </div>
          </form>
        </div>

        {/* RIGHT SIDE - Cart Totals & Payment */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-4xl text-gray-700  mb-6">Cart Totals</h2>
          <div className="flex justify-between py-2 border-b border-gray-300 p-2">
            <span className="font-black text-4xl">SUBTOTAL</span>
            <span className="text-2xl">$1,500.00</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-300 p-2 mb-6">
            <span className="font-black text-4xl">TOTAL</span>
            <span className="text-2xl ">$1,500.00</span>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <div>
              <input type="radio" name="payment" id="bank" />
              <label htmlFor="bank" className="ml-2 font-bold text-xl">
                Direct Bank Transfer
              </label>
              <p className="text-lg text-gray-600 mt-1">
                Make your payment directly into our bank account. Use your Order
                ID as payment reference.
              </p>
            </div>

            <div>
              <input type="radio" name="payment" id="check" />
              <label htmlFor="check" className="ml-2 font-bold text-2xl">
                Check Payments
              </label>
              <p className="text-lg text-gray-600 mt-1">
                Please send a check to Store Name, Store Street, Store Town.
              </p>
            </div>

            <div>
              <input type="radio" name="payment" id="cod" />
              <label htmlFor="cod" className="ml-2 font-bold text-2xl">
                Cash on Delivery
              </label>
              <p className="text-lg text-gray-600 mt-1">
                Pay with cash upon delivery.
              </p>
            </div>

            <div>
              <input type="radio" name="payment" id="paypal" />
              <label htmlFor="paypal" className="ml-2 font-bold text-2xl">
                PayPal
              </label>
              <p className="text-lg text-gray-600 mt-1">
                Pay via PayPal; you can pay with your credit card if you don’t
                have a PayPal account.
              </p>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-6 bg-pink-500 text-white py-3 rounded hover:bg-pink-600">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
