import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Auth/login/Login";
import Cart from "./pages/Cart/Cart";
import Items from "./pages/Items/Items";
import SignleItem from "./pages/SignleItem/SignleItem";
import AboutUS from "./pages/Legality/AboutUs/AboutUS";
import Contact from "./pages/Legality/Contact/Contact";
import FAQ from "./pages/Legality/FAQ/FAQ";
import Helpcenter from "./pages/Legality/HelpCenter/Helpcenter";
import Privacy from "./pages/Legality/PrivacyPolicy/Privacy";
import Termsconditions from "./pages/Legality/Terms&Conditions/Termsconditions";
import Admin from "./pages/admin/Admin";
import RecylingPolicy from "./pages/Legality/RecyclingPolicy/RecylingPolicy";
import DeleveryPolicy from "./pages/Legality/DeleveryPolicy/DeleveryPolicy";
import ReturnPolicy from "./pages/Legality/Return&cancellation/ReturnPolicy";
import Customer from "./pages/Customer/Customer";
import { CookieConsent } from "./components/SupportiveFunction/CookieConsent";
import Category from "./pages/Category/Category";
import Seller from "./pages/Seller/Seller";
import WishList from "./pages/Wishlist/WishList";
import "./scss/main.scss";

import SellerAuth from "./pages/Seller/SellerAuth/SellerAuth";
import SellerLogin from "./pages/Seller/SellerAuth/SellerLogin";
import SellerAdmin from "./pages/Seller/SellerAdmin/SellerAdmin";
import RefundPolicy from "./pages/Legality/Refund/RefundPolicy";
import toast, { Toaster } from "react-hot-toast";
import UpdateProduct from "./pages/Seller/SellerAdmin/UpdateProduct/UpdateProduct";
const App = () => {
  useEffect(() => {
    CookieConsent();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/:category" element={<Items />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/categories" element={<Category />} />

          <Route path="/:itemname/:itemno" element={<SignleItem />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/checkout/cart" element={<Cart />} />
          <Route path="/search/:searchableText" element={<Items />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<Termsconditions />} />
          <Route path="/recycling-policy" element={<RecylingPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route
            path="/shipping&delivery-policy"
            element={<DeleveryPolicy />}
          />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="return-policy" element={<ReturnPolicy />} />
          <Route path="/helpcentre" element={<Helpcenter />} />
          {/* Customer */}
          <Route path="/customer/profile" element={<Customer />} />
          <Route path="/customer/whishlist" element={<WishList />} />
          {/* product upload By Admin */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/seller/dashboard" element={<SellerAdmin />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/seller/auth" element={<SellerAuth />} />
          <Route path="/seller/updateProduct" element={<UpdateProduct />} />
          <Route path="/seller/login" element={<SellerLogin />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
