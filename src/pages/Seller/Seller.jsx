import React from "react";
import banner from "../../assets/SELLER/businessman-explaining-the-strategy.png";
import { Link } from "react-router-dom";
function Seller() {
  return (
    <>
      {/* topbar start */}
      <div className="topbar bg-blue-700 py-2" id="myHeader">
        <div className="container py-3 px-3 mx-auto">
          <div className="flex items-center justify-around">
            <div className="left">
              <Link
                to="/seller/auth"
                className="btn1 rounded-full px-3 py-2 first:bg-pink-500 hover:bg-pink-600 text-white"
              >
                Start Selling
              </Link>
            </div>
            <div className="right ml-auto">
              <a
                href="/seller/login"
                className="btn  rounded-full  py-2 px-5 font-bold text-sm bg-yellow-500 hover:bg-yellow-600 text-blue-900"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* topbar end */}

      {/* banner start */}
      <div className="banner bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="left   w-1/2">
              <div className="heading my-4">
                <h1 className="text-4xl font-bold mb-4">
                  Become a Unique Bajar Seller
                </h1>
                <p className="text-lg">
                  Start your selling journey on Unique Bajar and become a part
                  of our 2 Lakh+ seller community
                </p>
              </div>
              <Link
                to="/seller/auth"
                className="btn1 rounded-full px-3 py-2    bg-pink-500 hover:bg-pink-600 text-white"
              >
                Start Selling
              </Link>
            </div>
            <div className="right    w-1/2">
              <figure>
                <img
                  src={banner}
                  alt="Image Developer"
                  className="w-full rounded-lg shadow-lg"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* start your seller start */}
      <div className="startjourney-section section py-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto">
          <div className="heading text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start your Seller Journey
            </h2>
            <p className="text-lg mb-4">
              Join our family of 2 Lakh+ businesses who sell on Amazon.in
            </p>
            <Link
              to="/seller/auth"
              className="btn1 rounded-full px-3 py-2    bg-pink-500 hover:bg-pink-600 text-white"
            >
              Start Selling
            </Link>
            <h5 className="mt-4">
              It takes only 15 minutes to set up your account
            </h5>
          </div>
        </div>
      </div>
      {/* start your seller end */}
      <div className="custom-section bg-gray-200 py-12">
        <div className="container mx-auto">
          <div className="heading text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Unique Bajar?</h2>
            <p className="text-lg mb-4">
              Join thousands of successful sellers who trust Unique Bajar for
              their business. We offer a seamless selling experience and
              excellent support.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="custom-section bg-blue-400 py-12 text-white">
        <div className="container mx-auto">
          <div className="heading text-center">
            <h2 className="text-3xl font-bold mb-4">Easy Setup, Quick Start</h2>
            <p className="text-lg mb-4">
              Getting started is a breeze! With our user-friendly platform, you
              can set up your seller account in just 15 minutes and start
              selling to a vast audience.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="custom-section bg-green-500 py-12 text-white">
        <div className="container mx-auto">
          <div className="heading text-center">
            <h2 className="text-3xl font-bold mb-4">Exclusive Seller Community</h2>
            <p className="text-lg mb-4">
              Become part of our thriving community of over 2 Lakh sellers.
              Connect, learn, and grow together with Unique Bajar.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="custom-section bg-purple-600 py-12 text-white">
        <div className="container mx-auto">
          <div className="heading text-center">
            <h2 className="text-3xl font-bold mb-4">Sell with Confidence</h2>
            <p className="text-lg mb-4">
              Our secure platform ensures a safe and reliable selling
              environment. Focus on your products, and we'll handle the rest.
            </p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="custom-section bg-yellow-400 py-12">
        <div className="container mx-auto">
          <div className="heading text-center">
            <h2 className="text-3xl font-bold mb-4">Diverse Product Range</h2>
            <p className="text-lg mb-4">
              Whether you sell handmade crafts or tech gadgets, Unique Bajar
              welcomes sellers with a diverse range of products. Start your
              journey with us!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seller;
