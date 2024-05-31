import React, { useState } from "react";
import ListBanner from "../../../../components/Sections/MapList";
import Refund from "./Refund/Refund";
import Order from "./Order/Order";
const MyOrder = () => {
  const list = [{ text: "My Orders" }, { text: "My Refunds" }];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedVal = (val) => {
    setSelectedIndex(val);
  };
  return (
    <div>
      <ListBanner
        textInCenter={true}
        selectedVal={selectedVal}
        className="flex gap-x-4 bg-slate-200 rounded-full justify-around items-center"
        list={list}
      />
      <div>{selectedIndex == 0 ? <Order /> : <Refund />}</div>
    </div>
  );
};
export default MyOrder;
