import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import { useStore } from '@/lib/store';
import { sendToWhatsApp } from '@/lib/whatsapp';

export default function CartPage() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  const [showCheckout, setShowCheckout] = useState(false);
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.customization.quantity), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = () => {
    if (!customer.name || !customer.phone) {
      alert('Please fill in your name and phone number!');
      return;
    }

    const orderData = {
      customer,
      items: cart,
      total,
      customizations: cart.reduce((acc, item) => {
        acc[item.id] = {
          text: item.customization.name + ' - ' + item.customization.customText,
          design: item.customization.selectedDesign,
        };
        return acc;
      }, {}),
    };

    sendToWhatsApp(orderData);
    clearCart();
    setShowCheckout(false);
    alert('Order sent to WhatsApp! We will confirm your order shortly.');
  };

  return (
    <>
      <Head>
        <title>Shopping Cart - NextGift</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-pastel-blue to-pastel-mint py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <p className="text-2xl text-gray-600 mb-4">Your cart is empty</p>
              <Link href="/">
                <button className="btn-primary">Continue Shopping</button>
              </Link>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-pastel-purple text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Product</th>
                        <th className="px-6 py-4 text-left">Customization</th>
                        <th className="px-6 py-4 text-center">Qty</th>
                        <th className="px-6 py-4 text-right">Price</th>
                        <th className="px-6 py-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id} className="border-b hover:bg-pastel-lavender transition">
                          <td className="px-6 py-4">
                            <p className="font-semibold text-gray-800">{item.name}</p>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            <p>Name: {item.customization.name}</p>
                            <p>Design: {item.customization.selectedDesign}</p>
                            {item.customization.customText && (
                              <p>Text: {item.customization.customText.substring(0, 30)}...</p>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">{item.customization.quantity}</td>
                          <td className="px-6 py-4 text-right font-bold">₹{item.price * item.customization.quantity}</td>
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 font-semibold"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Order Summary and Checkout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  {showCheckout && (
                    <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                      <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={customer.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border-2 border-pastel-lavender rounded-lg focus:outline-none focus:border-pastel-purple"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={customer.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border-2 border-pastel-lavender rounded-lg focus:outline-none focus:border-pastel-purple"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">WhatsApp Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={customer.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border-2 border-pastel-lavender rounded-lg focus:outline-none focus:border-pastel-purple"
                          placeholder="+91 9999999999"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Address</label>
                        <textarea
                          name="address"
                          value={customer.address}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full px-4 py-2 border-2 border-pastel-lavender rounded-lg focus:outline-none focus:border-pastel-purple"
                          placeholder="Your delivery address"
                        />
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={handleSubmitOrder}
                          className="btn-primary flex-1"
                        >
                          Send to WhatsApp 📱
                        </button>
                        <button
                          onClick={() => setShowCheckout(false)}
                          className="btn-secondary flex-1"
                        >
                          Edit Cart
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-xl shadow-lg p-8 h-fit">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6 pb-6 border-b-2 border-pastel-lavender">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Items ({cart.length})</span>
                      <span className="font-semibold">₹{total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold text-green-600">FREE</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-6 text-xl">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-pastel-purple">₹{total}</span>
                  </div>

                  {!showCheckout && (
                    <button
                      onClick={() => setShowCheckout(true)}
                      className="btn-primary w-full mb-3"
                    >
                      Proceed to Checkout
                    </button>
                  )}
                  
                  <Link href="/" className="block">
                    <button className="btn-secondary w-full mb-3">Continue Shopping</button>
                  </Link>
                  
                  <button
                    onClick={() => clearCart()}
                    className="w-full px-4 py-2 text-red-600 border-2 border-red-300 rounded-lg hover:bg-red-50 transition"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
