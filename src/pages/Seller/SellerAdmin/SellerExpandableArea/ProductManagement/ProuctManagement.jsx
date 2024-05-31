// Admin.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlusSquare, FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { BaseApiUrl } from "../../../../../components/Fetchings/OnlineData";
import cateGoryList from "../../../../../Data/Category.json";

const ProuctManagement = () => {
  const [formData, setFormData] = useState({
    token: localStorage.getItem("SellerToken"),
    product_brand: "",
    product_title: "",

    real_price: null,
    discount_price: null,
    feature_details: [{ key: "", value: "" }],
    category: "",
    subcategory: "",
    description: "",
    category: "",
    product_informations: [{ key: "", value: "" }],
    return_time: null,
    images: [],
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("SellerToken")) {
      navigate("/seller/login");
    }
  });

  useEffect(() => {
    filterSubcategories();
  }, [formData.category]);
  const [subcategories, setSubcategories] = useState([]);
  const filterSubcategories = () => {
    setSubcategories([]);
    const category = formData.category === "" ? "Groceries" : formData.category;
    const filteredCategory = cateGoryList.find(
      (cate) => cate.category === category
    );
    if (filteredCategory) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        subcategory: filteredCategory.subcategory[0],
      }));
      setSubcategories(filteredCategory.subcategory);
    } else {
      setSubcategories([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...newImages],
    }));
  };
  const removeImage = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData((prevFormData) => ({ ...prevFormData, images: updatedImages }));
  };
  const uploadProduct = async () => {
    const { images, ...restFormData } = formData;
    const formDataToSend = new FormData();

    Object.entries(restFormData).forEach(([key, value]) => {
      if (key === "feature_details" || key === "product_informations") {
        formDataToSend.append(key, JSON.stringify(value));
      } else {
        formDataToSend.append(key, value);
      }
    });

    images.forEach((image, index) => {
      formDataToSend.append(`images`, image);
    });

    try {
      const response = await axios.post(
        `${BaseApiUrl}/api/uploadProduct`,
        formDataToSend
      );
      if (response.status === 200) {
        toast.success(`${response.data?.message || "Product Uploaded!"}`, {
          position: "top-right",
          style: {
            marginTop: 100,
          },
        });
        setFormData({
          token: localStorage.getItem("SellerToken"),
          product_brand: "",
          product_title: "",
          category: "",
          real_price: 0,
          discount_price: 0,
          category: "",
          subcategory: "",
          feature_details: [{ key: "", value: "" }],
          description: "",
          product_informations: [{ key: "", value: "" }],
          return_time: "",
          images: [],
        });
      } else {
        toast.error(
          `${response.data?.message || "Product Uploading Failed!"}`,
          {
            position: "top-right",
            style: {
              marginTop: 100,
            },
          }
        );
      }
    } catch (error) {
      toast.error(`${error?.message || "Something Went Worng!"}`, {
        position: "top-right",
        style: {
          marginTop: 100,
        },
      });
    }
  };
  const featureDetailaddKeyValue = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      feature_details: [...formData.feature_details, { key: "", value: "" }],
    }));
  };
  const featureDetailDeleteKeyValue = (index) => {
    const newKeyValues = [...formData.feature_details];

    newKeyValues.splice(index, 1);

    setFormData((prevFormData) => ({
      ...prevFormData,
      feature_details: newKeyValues,
    }));
    // setKeyValues(newKeyValues);
  };
  const featureDetailEditKeyValue = (index, field, newValue) => {
    const newKeyValues = [...formData.feature_details];
    newKeyValues[index][field] = newValue;
    setFormData((prevFormData) => ({
      ...prevFormData,
      feature_details: newKeyValues,
    }));
  };
  const productInformationaddKeyValue = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      product_informations: [
        ...formData.product_informations,
        { key: "", value: "" },
      ],
    }));
  };
  const productInformationDeleteKeyValue = (index) => {
    const newKeyValues = [...formData.product_informations];

    newKeyValues.splice(index, 1);

    setFormData((prevFormData) => ({
      ...prevFormData,
      product_informations: newKeyValues,
    }));
    // setKeyValues(newKeyValues);
  };
  const productInformationEditKeyValue = (index, field, newValue) => {
    const newKeyValues = [...formData.product_informations];
    newKeyValues[index][field] = newValue;
    setFormData((prevFormData) => ({
      ...prevFormData,
      product_informations: newKeyValues,
    }));
  };
  return (
    <div className="container mx-auto   ">
      <h1 className="text-4xl font-bold mb-8 text-center">Product Upload</h1>
      <form className="max-w-md mx-auto text-black bg-white p-8 rounded-md shadow-md">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="mb-4">
            {key == "token" ? null : (
              <label
                htmlFor={key}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {key.replace(/_/g, " ").toUpperCase()}:
              </label>
            )}
            {key === "images" ? (
              <div>
                <input
                  type="file"
                  id={key}
                  name="productpic"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  className="border border-gray-300 p-2 w-full"
                  multiple
                />
                {formData.images.map((image, index) => (
                  <div key={index} className="mb-2 flex items-center">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Image ${index + 1}`}
                      className="mr-2 max-w-16 h-auto"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : key === "token" ? (
              ""
            ) : key === "feature_details" ? (
              <div className="border-2 border-green-500  ">
                {formData.feature_details.map((kv, index) => (
                  <div key={index} className="border py-2">
                    <p className="border my-2 flex items-center px-2 py-1">
                      <button
                        className="  "
                        onClick={() => featureDetailDeleteKeyValue(index)}
                      >
                        <FaMinusCircle className="m-auto text-2xl" />
                      </button>{" "}
                      <input
                        type="text"
                        className="border font-bold p-2"
                        placeholder="Key"
                        value={kv.key}
                        onChange={(e) =>
                          featureDetailEditKeyValue(
                            index,
                            "key",
                            e.target.value
                          )
                        }
                      />
                      <textarea
                        type="text"
                        className="border flex-1 p-2"
                        placeholder="Value"
                        value={kv.value}
                        onChange={(e) =>
                          featureDetailEditKeyValue(
                            index,
                            "value",
                            e.target.value
                          )
                        }
                      />
                    </p>
                  </div>
                ))}
                <button
                  className="w-full text-center"
                  onClick={featureDetailaddKeyValue}
                >
                  {" "}
                  <FaPlusSquare className="m-auto text-2xl" />
                </button>
              </div>
            ) : key === "product_informations" ? (
              <div className="border-2 border-green-500  ">
                {formData.product_informations.map((kv, index) => (
                  <div key={index} className="border py-2">
                    <p className="border my-2 flex items-center px-2 py-1">
                      <button
                        className="  "
                        onClick={() => productInformationDeleteKeyValue(index)}
                      >
                        <FaMinusCircle className="m-auto text-2xl" />
                      </button>{" "}
                      <input
                        type="text"
                        className="border font-bold p-2"
                        placeholder="Key"
                        value={kv.key}
                        onChange={(e) =>
                          productInformationEditKeyValue(
                            index,
                            "key",
                            e.target.value
                          )
                        }
                      />
                      <textarea
                        type="text"
                        className="border flex-1 p-2"
                        placeholder="Value"
                        value={kv.value}
                        onChange={(e) =>
                          productInformationEditKeyValue(
                            index,
                            "value",
                            e.target.value
                          )
                        }
                      />
                    </p>
                  </div>
                ))}
                <button
                  className="w-full text-center"
                  onClick={productInformationaddKeyValue}
                >
                  {" "}
                  <FaPlusSquare className="m-auto text-2xl" />
                </button>
              </div>
            ) : key === "category" ? (
              <p className="my-2 border px-2 py-1 ">
                <select
                  onChange={handleInputChange}
                  name="category"
                  className="w-full my-2"
                  id=""
                >
                  {cateGoryList.map((cate) => (
                    <option value={cate.category}>{cate.category}</option>
                  ))}
                </select>
              </p>
            ) : key === "subcategory" ? (
              <p className="my-2 border px-2 py-1 ">
                <select
                  onChange={handleInputChange}
                  name="subcategory"
                  value={formData.subcategory}
                  className="w-full my-2"
                  id=""
                >
                  {subcategories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </p>
            ) : (
              <input
                type={
                  key == "return_time" ||
                  key == "discount_price" ||
                  key == "real_price"
                    ? "number"
                    : "text"
                }
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={uploadProduct}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default ProuctManagement;
