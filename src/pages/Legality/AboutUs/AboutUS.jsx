import React, { useState } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import QuestionList from "./QuestionList/QuestionList";
import Footer from "../../footer/Footer";
const AboutUS = () => {
  return (
    <div className="p-4 ">
      <p className="text-xl font-bold ">About Us</p>
      <p className="text-sm mt-5 mx-5 ">
        Welcome to UniqueBajar, an innovative e-commerce platform brought to you
        by RVBM Universe Pvt Ltd. We're excited to offer you a unique shopping
        experience with a wide range of products and services. Before you begin
        exploring our portal, please take a moment to review the terms and
        conditions outlined below
      </p>

      <div className="mt-3 border-t-2 pt-5">
        <p className="font-bold">Introduction</p>
        <p className="font-semibold mt-4 text-sm">
          Welcome to UniqueBajar, your premier destination for online shopping,
          where we prioritize not only your shopping experience but also the
          privacy and security of your data. Operating under the meticulous care
          of RVBM Universe Pvt Ltd, we ensure that every aspect of your
          interaction with UniqueBajar is protected, maintained, and optimized
          for your benefit.
        </p>
        <p className="mt-2 text-sm" >
        At UniqueBajar, your trust and satisfaction are paramount. With RVBM Universe Pvt Ltd at the helm, you can shop with confidence, knowing that your data privacy is rigorously protected, and every effort is made to maximize the benefits of your online shopping experience. Join us today and discover the unparalleled convenience and security of UniqueBajar.
        </p>
        <p className="mt-2 text-sm font-light" >
        As the guardian of UniqueBajar's operations, RVBM Universe Pvt Ltd takes full responsibility for the maintenance, management, and security of the ecommerce portal. We understand the significance of maintaining the integrity of the platform, and we are committed to upholding the highest standards of reliability and trustworthiness.
        </p>
      </div>
      <div className="mt-3 border-t-2 pt-5">
        <p className="font-bold">Data Privacy</p>
        <p className="font-semibold mt-4 text-sm">
          RVBM Universe Pvt Ltd values the privacy of its users and is committed
          to protecting their personal information. We collect and process data
          in accordance with our Privacy Policy, which outlines the types of
          information we collect, how we use it, and the measures we take to
          ensure its security.
        </p>
      </div>

      <QuestionList />
    </div>
  );
};

export default AboutUS;
