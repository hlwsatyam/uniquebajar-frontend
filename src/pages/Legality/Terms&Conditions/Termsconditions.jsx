import React from "react";
import logo from "../../../assets/AuthIMG/Unique Bazar.png";
const Termsconditions = () => {
  return (
    <div className="p-2 w-[90%] sm:w-[70%] border my-2 mx-auto">
      <p className="text-2xl font-light">Terms & Condtions</p>
      <div className="flex items-center font-semibold">
        {" "}
        <p className="text-[13px]">
          Innovative Retail Concepts Pvt Ltd (“IRCPL”) is the licensed owner of
          the brand uniquebajar.com and the website uniquebajar.com (”The Site”)
          from Supermarket Grocery Supplies Pvt Ltd (“SGSPL”). As a visitor to
          the Site/ Customer you are advised to please read the Term &
          Conditions carefully. By accessing the services provided by the Site
          you agree to the terms provided in this Terms & Conditions document.
        </p>
        <img src={logo} className="w-[100px] h-[100px]" alt="" />{" "}
      </div>
      <p className="text-[13px] mt-6 border-t-2 pt-2">
        <p className="font-light my-2 text-2xl">Personal Information</p>
        As part of the registration process on the Site, IRCPL may collect the following personally identifiable information about you: Name including first and last name, alternate email address, mobile phone number and contact details, Postal code, Demographic profile (like your age, gender, occupation, education, address etc.) and information about the pages on the site you visit/access, the links you click on the site, the number of times you access the page and any such browsing information.
      </p>
      <p className="text-[13px] mt-6 border-t-2 pt-2">
        <p className="font-light my-2 text-2xl">Eligibility</p>
        Services of the Site would be available to only select geographies in India. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872 including un-discharged insolvents etc. are not eligible to use the Site. If you are a minor i.e. under the age of 18 years but at least 13 years of age you may use the Site only under the supervision of a parent or legal guardian who agrees to be bound by these Terms of Use. If your age is below 18 years your parents or legal guardians can transact on behalf of you if they are registered users. You are prohibited from purchasing any material which is for adult consumption and the sale of which to minors is prohibited
      </p>
      <p className="text-[13px] mt-6 border-t-2 pt-2">
        <p className="font-light my-2 text-2xl">License & Site access</p>
        IRCPL grants you a limited sub-license to access and make personal use of this site and not to download (other than page caching) or modify it, or any portion of it, except with express written consent of IRCPL. This license does not include any resale or commercial use of this site or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of this site or its contents; any downloading or copying of account information for the benefit of another merchant; or any use of data mining, robots, or similar data gathering and extraction tools. This site or any portion of this site may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of IRCPL. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of the Site or of IRCPL and its affiliates without express written consent. You may not use any meta tags or any other "hidden text" utilizing the Site’s or IRCPL’s name or SGSPL’s name or trademarks without the express written consent of IRCPL. Any unauthorized use terminates the permission or license granted by IRCPL
      </p>
      <p className="text-[13px] mt-6 border-t-2 pt-2">
        <p className="font-light my-2 text-2xl">Account & Registration Obligations</p>
        All shoppers have to register and login for placing orders on the Site. You have to keep your account and registration details current and correct for communications related to your purchases from the site. By agreeing to the terms and conditions, the shopper agrees to receive promotional communication and newsletters upon registration. The customer can opt out either by unsubscribing in "My Account" or by contacting the customer service. 
      </p>
      <p className="text-[13px] mt-6 border-t-2 pt-2">
        <p className="font-light my-2 text-2xl">Pricing</p>
        All the products listed on the Site will be sold at MRP unless otherwise specified. The prices mentioned at the time of ordering will be the prices charged on the date of the delivery. Although prices of most of the products do not fluctuate on a daily basis but some of the commodities and fresh food prices do change on a daily basis. In case the prices are higher or lower on the date of delivery not additional charges will be collected or refunded as the case may be at the time of the delivery of the order.
      </p>
    </div>
  );
};

export default Termsconditions;
