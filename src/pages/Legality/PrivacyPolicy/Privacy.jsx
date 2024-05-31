import React from "react";
import logo from "../../../assets/AuthIMG/Unique Bazar.png";
const Privacy = () => {
  return (
    <div className="p-2 w-[90%] sm:w-[70%] border my-2 mx-auto">
      <div className="flex items-center font-bold">
        {" "}
        <p className="text-[13px]">
          Innovative Retail Concepts Private Limited (“IRCPL” or “we”) takes the
          privacy of your information seriously. This privacy notice (“Privacy
          Notice”) describes the types of personal information we collect from
          you, through our stores, other premises, website (including
          sub-domains and microsites) mobile applications, or other means. It
          describes the purposes for which we collect that personal information,
          the other parties with whom we may share it, and the measures we take
          to try and protect it. It also tells you about some of your rights and
          choices with respect to your personal information, and how you can
          contact us about our privacy practices.
        </p>
        <img src={logo} className="w-[100px] h-[100px]" alt="" />{" "}
      </div>

      <p className="text-[13px] my-3">
        You are advised to carefully read this Privacy Notice before using or
        availing any of our products and/or services. By doing so you are
        consenting to the collection and processing of your Data (including
        SPDI) in accordance with the practices and policies outlined in this
        Privacy Notice.
      </p>
      <p className="text-[13px] my-3">
        . Our products and services are targeted at users in India, and this
        Privacy Notice is intended to comply with the laws of India. If you are
        accessing or using the website or mobile application from an overseas
        location, you are requested to independently validate the impact of any
        applicable local laws. If you do not agree with this Privacy Notice at
        any time, in part or as a whole, write to our Grievance Office at the
        address specified below.
      </p>

      <p className="text-[13px] my-0 font-bold ">1.Defination</p>
      <p className="text-[12px]">
        In this Privacy Notice, the following definitions are used:
      </p>
      <p className="text-[13px] mt-4 font-bold ">Cookies</p>
      <p className="text-[12px]">
      a small file placed on your device by our website or mobile application when you either visit or use certain features of our website or mobile application. A cookie generally allows a website to remember your actions or preference for a certain period of time.
      </p>
      <p className="text-[13px] mt-4 font-bold ">Data</p>
      <p className="text-[12px]">
      means personal information and SPDI about you, which either directly or indirectly in combination with other information, could allow you to be identified when you visit our [stores, website and/or mobile application].
      </p>
      <p className="text-[13px] mt-4 font-bold ">Data Protection Laws</p>
      <p className="text-[12px]">
      any applicable law for the time being in force relating to the processing of Data, including the Information Technology Act, 2000 and Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011, as amended or replaced from time to time.
      </p>
      <p className="text-[13px] mt-4 font-bold ">Partners</p>
      <p className="text-[12px]">
      select third parties (including Tata Group Entities) with whom we have contracts or arrangements through which they may offer products or services to You or our other users, and to whom we may disclose your Data for a relevant purpose.
      </p>
      <p className="text-[13px] mt-4 font-bold ">Service Providers</p>
      <p className="text-[12px]">
      includes entities to whom we, or other Tata Group Entities, will disclose your Data in order for them to process it for the purpose of providing services to us pursuant to written contract.
      </p>
    </div>
  );
};

export default Privacy;
