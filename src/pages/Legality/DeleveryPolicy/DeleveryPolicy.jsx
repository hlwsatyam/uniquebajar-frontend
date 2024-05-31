import React from "react";

const DeliveryPolicy = () => {
  return (
    <div className="my-8 mx-auto max-w-3xl p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">
        Shipping & Delivery Policy
      </h2>

      <div className="text-lg mb-6">
        <p className="mb-4">
          The Information and Communication revolution has brought enormous
          changes in the way we organize our lives, our economies, industries,
          and institutions. These spectacular developments in modern times have
          undoubtedly enhanced the quality of our lives, but at the same time,
          have led to manifold problems including the problem of a massive
          amount of hazardous waste and other waste generated from electric
          products. Such waste poses a serious threat to human health and the
          environment. The issue of proper management of such hazardous E-Waste
          is, therefore, critical to the protection of livelihood, health, and
          the environment.
        </p>
        <p className="mb-4">
          To deal with this ever-rising problem of E-Waste, the government of
          India, through its Ministry of Environment and Forest, formulated the
          E-Waste (Management and Handling) Rules in 2011.
        </p>
        <p className="mb-4">
          UniqueBajar STANDS COMMITTED TO IMPLEMENT THE E-WASTE RULES.
        </p>
        <p className="mb-4">
          At UniqueBajar, we are dedicated to providing a seamless shipping and
          delivery experience for our customers. Our shipping policies are
          designed to ensure that your products reach you in a timely and secure
          manner.
        </p>
        <p className="mb-4">
          Our standard shipping time within the domestic regions of India is{" "}
          <b>7 business days</b>, depending on the location. For international
          orders, shipping times may vary based on the destination and customs
          regulations.
        </p>
        <p className="mb-4">
          To ensure the safety of your products during transit, we partner with
          reliable shipping carriers who adhere to strict packaging and handling
          protocols. Additionally, we provide shipment tracking facilities so
          you can monitor the status of your order from dispatch to delivery.
        </p>
        <p className="mb-4">
          Please note that shipping costs may vary based on the weight and
          dimensions of your order, as well as the shipping destination. You can
          view the estimated shipping costs during the checkout process before
          finalizing your purchase.
        </p>
        <p className="mb-4">
          For any inquiries regarding our shipping and delivery policies, feel
          free to reach out to our customer support team. We are here to assist
          you with any questions or concerns you may have regarding your
          shopping experience at UniqueBajar.
        </p>
      </div>
      <p className="text-sm text-gray-600 text-center">
        *Please review our{" "}
        <a href="/terms-conditions" className="text-blue-500 hover:underline">
          Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="/returns" className="text-blue-500 hover:underline">
          Returns Policy
        </a>{" "}
        for more information.
      </p>
    </div>
  );
};

export default DeliveryPolicy;
