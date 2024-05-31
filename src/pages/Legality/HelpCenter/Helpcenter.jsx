import { useState } from "react";
import React from "react";
import { useSpring, animated } from 'react-spring';
function Helpcenter() {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
      });
    
      const [isSubmitted, setSubmitted] = useState(false);
    
      const props = useSpring({
        opacity: isSubmitted ? 1 : 0,
        transform: isSubmitted ? 'translateY(0)' : 'translateY(-10px)',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    
        // For demo purposes, let's simulate a submission
        // In a real application, you would send the data to a server
        setSubmitted(true);
      };
    
  return (
    <div className="my-3 p-4">
      <p className="text-2xl font-light border-b-gray-500 border-b-[1px] pb-2 ">
        Submit customer service request
      </p>
      <p className="text-[12px] font-light mt-2 ">
        If you have a question about our service or have an issue to report,
        please send a request and we will get back to you as soon as possible.
      </p>
      <p className="text-[12px] font-light mt-2 ">
        All fields with an asterisk ({" "}
        <span className="text-red-500 font-bold text-xl">*</span> ) are
        mandatory
      </p>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-green-900 to-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </form>
      ) : (
        <animated.div style={props} className="text-green-600">
          <p className="text-lg mb-4">Thank you for your submission!</p>
          <p className="text-sm">We will get back to you soon.</p>
        </animated.div>
      )}
    </div>
    </div>
  );
}

export default Helpcenter;
