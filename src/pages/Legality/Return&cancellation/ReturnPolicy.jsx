import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Return Policy</h2>
        <div className="text-gray-700">
          <p className="mb-6">
            At UniqueBajar, we strive to ensure your satisfaction with every
            purchase. If you are not entirely satisfied with your purchase,
            we're here to help.
          </p>
          <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
          <p className="mb-4">
            To be eligible for a return, your item must be unused and in the
            same condition that you received it. It must also be in the original
            packaging.
          </p>
          <p className="mb-6">
            Certain types of items cannot be returned, such as perishable goods
            (e.g., food, flowers), personalized items, and gift cards.
          </p>
          <h3 className="text-xl font-semibold mb-4">Return Process</h3>
          <p className="mb-4">
            To initiate a return, please contact us at support@uniquebajar.com
            within <b>14 days</b> of receiving your item. Please provide your
            order number and details about the product you would like to return.
            We will respond promptly with instructions for returning the item(s)
            from your order.
          </p>
          <p className="mb-4">
            Once your return is received and inspected, we will send you an
            email to notify you that we have received your returned item. We
            will also notify you of the approval or rejection of your refund.
          </p>
          <p className="mb-4">
            If your return is approved, we will initiate a refund to your
            original method of payment. You will receive the credit within
            <b>7 days,</b> depending on your card issuer's policies.
          </p>
          <h3 className="text-xl font-semibold mb-4">Return Shipping</h3>
          <p className="mb-4">
            Return shipping costs are the responsibility of the customer unless
            the return is due to an error on our part (e.g., wrong item shipped,
            defective product). In such cases, we will provide a prepaid
            shipping label for your return.
          </p>
          <h3 className="text-xl font-semibold mb-4">Exchanges</h3>
          <p className="mb-4">
            We only replace items if they are defective or damaged. If you need
            to exchange it for the same item, please contact us at
            support@uniquebajar.com.
          </p>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>
            If you have any questions about our return policy, please contact us
            at support@uniquebajar.com or give us a call at +91 9690413556.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
