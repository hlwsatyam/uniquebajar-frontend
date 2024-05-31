import React, { useEffect, useState } from "react";
import SellerTabHead from "../../../../../components/Reusable/SellerTabHead";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../../components/SupportiveFunction/FormatDate";
import axios from "axios";
import { BaseApiUrl } from "../../../../../components/Fetchings/OnlineData";

function SellerAnalytic() {
  return (
    <div>
      <SellerTabHead title={"Analytic"} />
      <SupportAnalytic />
    </div>
  );
}

export default SellerAnalytic;

function SupportAnalytic() {
  const [myOrder, setMyOrder] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchOrders();
  });
  const fetchOrders = async () => {
    await axios
      .post(`${BaseApiUrl}/api/seller/order/orderlist`, {
        sellerToken: localStorage.getItem("SellerToken"),
      })
      .then((res) => {
        setMyOrder(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`p-4 shadow my-6 bg-blue-950 `}>
      <div className="flex justify-center flex-wrap gap-x-4 gap-y-4">
        {myOrder &&
          myOrder.map((item) => (
            <div className="border rounded shadow p-4 ">
              <div className="p-6 border-b-2 ">
                <h1 className="flex justify-between my-3 ">
                  {" "}
                  <span className="font-bold ">
                    {item.product.product_brand}
                  </span>
                  <span className="font-bold ">
                    {" "}
                    ₹ {item.product.discount_price}{" "}
                  </span>
                </h1>
                <div className="flex items-center gap-x-6 ">
                  <img
                    onClick={() =>
                      navigate(
                        `/${item.product.product_title}/${item.product.product_id}`
                      )
                    }
                    className="cursor-pointer w-[100px] h-[100px]"
                    src={`${BaseApiUrl}/uploads/${
                      JSON.parse(item.product.image_urls)[0]
                    }`}
                    alt="cart_image"
                  />
                  <div>
                    <p
                      onClick={() =>
                        navigate(
                          `/${item.product.product_title}/${item.product.product_id}`
                        )
                      }
                      className="text-[14px] cursor-pointer my-2"
                    >
                      {item.product.product_title}
                    </p>
                    <p className="text-[14px] my-2">
                      ₹{item.product.discount_price}
                    </p>
                    <p className="text-[14px] line-through font-bold my-2">
                      ₹{item.product.real_price}
                    </p>
                  </div>
                </div>
                <p className=" my-3">No Of Item:{item.order.product_count} </p>
                <p className="mt-4 border-b-2 text-sm pb-2">Delivery Status:</p>
                <div>
                  <p className="my-5">
                    {" "}
                    Order Status:{" "}
                    <span className="text-sm py-2 rounded-full text-white font-bold px-3 bg-green-500">
                      {" "}
                      {item.order.delivery_status}
                    </span>{" "}
                  </p>

                  <p> Order Date: {formatDate(item.order.order_date)} </p>
                  {item.order.delivery_status != "cancelled" ? (
                    <p>
                      {" "}
                      Delivery Date: {formatDate(item.order.reaching_time)}{" "} 
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <p className="mt-4 border-b-2 text-sm pb-2">
                  Customer Details :
                </p>
                <div>
                  <p>
                    {" "}
                    Full Name:{" "}
                    {`${item.customer.first_name} ${item.customer.last_name}`}{" "}
                  </p>
                  <p> Phone Number: {item.customer.phone_number} </p>
                </div>
                <p className="mt-4 border-b-2 text-sm pb-2">
                  Delivery Address:
                </p>
                <div>
                  <p>Pin Code: {item.address.pin_code}</p>
                  <p>House No: {item.address.house_no}</p>
                  <p>Floor No: {item.address.floor_no}</p>
                  <p>Building Name: {item.address.building_name}</p>
                  <p>Tower No: {item.address.tower_no}</p>
                  <p>Address: {item.address.address}</p>
                  <p>City: {item.address.city}</p>
                  <p>State: {item.address.state}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
