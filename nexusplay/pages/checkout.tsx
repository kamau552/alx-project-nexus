import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa";



export default function Checkout() {
  const [selectedCard, setSelectedCard] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardType: '',
  });
   
  const handleCardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCard(e.target.value);
    setFormData((prev) => ({ ...prev, cardType: e.target.value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
  }

  return (
    <div>
      {/* Back Button */}
      <Link href="/cart">
          <button
            type="button"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            <FaChevronLeft />
            <span className="ml-2">Back</span>
          </button>
      </Link>
      <h2 className="p-4 font-bold text-2xl">Checkout</h2>
      <div className="p-4 sm:p-6 ">
      <h2 className="text-md sm:text-xl font-bold">Contact Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label className="text-xs text-black font-bold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          <div>
            <label className="text-xs text-black font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        

        {/* Payment Info */}
        <h2 className="text-md sm:text-xl font-bold mt-6">Pay with</h2>
        <div className="relative mt-2">
          <div className="relative">
            <input
              type="text"
              disabled
              placeholder=""
              className="mb-1 border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
              
              <div className="relative">
                <select
                  value={selectedCard}
                  onChange={handleCardChange}
                  className="appearance-none p-2 pr-2 rounded-lg text-sm text-gray-700"
                >
                  <option value="">credit or debit</option>
                  <option value="visa">Visa</option>
                  <option value="mastercard">MasterCard</option>
                  <option value="amex">American Express</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {selectedCard && (
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-xs text-black font-bold">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="border border-gray-500 p-2 w-full mt-2 rounded-lg"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div>
                  <label className="text-xs text-black font-bold">Expiration Date</label>
                  <input
                    type="text"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-xs text-black font-bold">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Billing Address */}
        <h2 className="text-lg sm:text-xl font-bold mt-6">Billing Address</h2>
        <div className="mt-2">
          <label className="text-xs text-black font-bold">Street Address</label>
          <input
            type="text"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div>
            <label className="text-xs text-black font-bold">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-xs text-black font-bold">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        <div className="pt-4">
          <div className="mt-4 pl-2 border-t border-gray-200">
      <h2 className="pt-6 text-lg font-bold">Cancellation policy</h2>
      <p className="mt-2 text-gray-900">
        <b>Free cancellation before 10 days are up.</b> Cancellation before the 10 days are up result in
        partial refund.
      </p>
    </div>
        </div>

        <div className="pt-8">
          <button
            type="submit"
            disabled={loading}
            className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg w-full sm:w-60 font-bold"
          >
            {loading ? 'confirmed' : 'Confirm & Pay'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-600 mt-2">Booking confirmed!</p>}
        </div>
      </form>
    </div>
    </div>
  );
}


