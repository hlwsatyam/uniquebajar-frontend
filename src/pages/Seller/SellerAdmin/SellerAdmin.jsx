import React from "react";
import SellerFeatureList from "./SellerFeatureList/SellerFeatureList";
import SellerExpandableArea from "./SellerExpandableArea/SellerExpandableArea";
import SellerHeader from "./SellerHeader/SellerHeader";
import { SellerFooter } from "./SellerExpandableArea/SellerHome/SellerHome";
const SellerAdmin = () => {
  return (
    <div className=" bg-gradient-to-r   text-slate-300 from-blue-500 to-green-900">
      {/* <SellerHeader /> */}
      <div className="flex sm:flex-row flex-grow flex-col">
        <SellerFeatureList />
        <SellerExpandableArea />
      </div>
      <SellerFooter />
    </div>
  );
};
export default SellerAdmin;
