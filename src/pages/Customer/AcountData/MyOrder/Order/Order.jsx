import React, { useEffect, useState } from "react";

import OrderTruck from "../../../../../assets/Background/Truck delivery service.gif";
import { Link, useNavigate } from "react-router-dom";
 
import { formatDate } from "../../../../../components/SupportiveFunction/FormatDate";
import { CancelOrder } from "../../../../../components/SupportiveFunction/CancelOrder";
import { BaseApiUrl } from "../../../../../components/Fetchings/OnlineData";
import axios from "axios";
import toast from "react-hot-toast";

const Order = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getAllOrder();
  }, [page]);

  const getAllOrder = async () => {
    console.log("Againnnn");
    const response = await axios.post(
      `${BaseApiUrl}/api/customer/order/orderlist`,
      {
        customerId: localStorage.getItem("customerToken"),
        page,
      }
    );
    if (response.status === 200) {
      setMyOrder(response.data);
    } else {
      toast.error(response.data?.message || "Something went wrong", {
        position: "top-right",
      });
    }
  };
  return (
    <div>
      {myOrder.length == 0 ? (
        <BlankOrder />
      ) : (
        <OrderList page={page} setPage={setPage} myOrder={myOrder} />
      )}
    </div>
  );
};

export default Order;

const BlankOrder = () => {
  return (
    <div>
      <img className="m-auto w-[400px] " src={OrderTruck} alt="" />
      <p className="text-center font-bold">
        We’re waiting for your first order
      </p>
      <p className="text-center font-bold">
        No orders placed yet. Shop from our categories and grab the best deals
        on your order.
      </p>
      <div className="text-center my-4">
        <button className="bg-green-500 text-white py-2 px-12  rounded-full font-bold text-sm">
          <Link to="/"> Explore Category</Link>
        </button>
      </div>
    </div>
  );
};
const OrderList = ({ myOrder, page, setPage }) => {
  const navigate = useNavigate();
  const orderCancel = (id) => {
    CancelOrder(id);
  };
  return (
    <div className="my-4">
      <div className="flex justify-center flex-wrap gap-x-4 gap-y-4">
        {myOrder.map((item) => (
          <div className="border rounded shadow p-4 ">
            <div className="p-6 border-b-2 ">
              <h1 className="flex justify-between my-3 ">
                {" "}
                <span className="font-bold  ">{item?.product_brand}</span>
                <span className="font-bold "> ₹ {item?.discount_price} </span>
              </h1>
              <div className="flex items-center gap-x-6 ">
                <img
                  onClick={() =>
                    navigate(`/${item?.product_title}/${item?.product_id}`)
                  }
                  className="cursor-pointer w-[100px] h-[100px]"
                  src={`${BaseApiUrl}/uploads/${
                    JSON.parse(item?.image_urls)[0]
                  }`}
                  alt="cart_image"
                />
                <div>
                  <p
                    onClick={() =>
                      navigate(`/${item?.product_title}/${item?.product_id}`)
                    }
                    className="text-[14px] cursor-pointer my-2"
                  >
                    {item?.product_title}
                  </p>
                  <p className="text-[14px] my-2">₹{item?.discount_price}</p>
                  <p className="text-[14px] line-through font-bold my-2">
                    ₹{item?.real_price}
                  </p>
                  <p className="text-[14px] my-2 text-green-900 font-bold inline px-3 py-1 text-left bg-green-300 rounded-[100px]">
                    You Save ₹
                    {(
                      Number(item?.real_price) - Number(item?.discount_price)
                    ).toFixed(2)}{" "}
                    {/* Fixed to 2 decimal places for currency */}
                  </p>
                </div>
              </div>
              <p className=" my-3">No Of Item:{item?.product_count} </p>
              <p className="mt-4 border-b-2 text-sm pb-2">Delivery Status:</p>
              <div>
                <p className="my-5">
                  {" "}
                  Order Status:{" "}
                  <span className="text-sm py-2 rounded-full text-white font-bold px-3 bg-green-500">
                    {" "}
                    {item?.delivery_status}
                  </span>{" "}
                </p>

                <p> Order Date: {formatDate(item?.order_date)} </p>
                {item?.delivery_status != "cancelled" ? (
                  <p> Delivery Date: {formatDate(item?.reaching_time)} </p>
                ) : (
                  ""
                )}
              </div>
              <p className="mt-4 border-b-2 text-sm pb-2">Customer Details :</p>
              <div>
                <p> Full Name: {`${item?.first_name} ${item?.last_name}`} </p>
                <p> Phone Number: {item?.phone_number} </p>
              </div>
              <p className="mt-4 border-b-2 text-sm pb-2">Delivery Address:</p>
              <div>
                <p>Pin Code: {item?.pin_code}</p>
                <p>House No: {item?.house_no}</p>
                <p>Floor No: {item?.floor_no}</p>
                <p>Building Name: {item?.building_name}</p>
                <p>Tower No: {item?.tower_no}</p>
                <p>Address: {item?.address}</p>
                <p>City: {item?.city}</p>
                <p>State: {item?.state}</p>
              </div>
            </div>
            {![
              "delivered",
              "cancelled",
              "tomorrow arriving",
              "today arriving",
            ].includes(item?.delivery_status) && (
              <p
                onClick={() => orderCancel(item?.order_id)}
                className="text-red-600 text-right cursor-pointer"
              >
                Cancel Order
              </p>
            )}
          </div>
        ))}
      </div>
      <PaginationButton page={page} setPage={setPage} />
    </div>
  );
};

const PaginationButton = ({ page, setPage }) => {
  const updatePage = (action) => {
    console.log("Inc");
    if (action === "Inc") {
      setPage(page + 1);
    } else if (action === "Dec") {
      if (page > 1) {
        setPage(page - 1);
      }
    }
  };

  return (
    <div className="my-3 p-2 bg-slate-400/20 flex justify-end items-center gap-x-2">
      <button
        onClick={() => updatePage("Inc")}
        className="text-sm bg-slate-50 rounded-full px-2 "
      >
        {" "}
        Prev{" "}
      </button>
      <button
        onClick={() => updatePage("Dec")}
        className="text-sm bg-slate-50 rounded-full px-2 "
      >
        {" "}
        Next{" "}
      </button>
    </div>
  );
};
