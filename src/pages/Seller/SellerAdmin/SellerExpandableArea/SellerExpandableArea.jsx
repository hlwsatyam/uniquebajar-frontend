import React from "react";
import { useSelector } from "react-redux";
import SellerHome from "./SellerHome/SellerHome";
import SellerAnalytic from "./SellerAnalytic/SellerAnalytic";
import SellerWidgets from "./SellerWidgets/SellerWidgets";
import UserManagement from "./Usermanagement/UserManagement";
import MyProfile from "./MyProfile/MyProfile";
import EditProfile from "./EditProfile/EditProfile";
import ChangePassword from "./ChangePassword/ChangePassword";
import ProductList from "./ProductList/ProductList";
import ProuctManagement from "./ProductManagement/ProuctManagement";

const SellerExpandableArea = () => {
  const currentTab = useSelector((state) => state.sellerTabValue);
  const RelaventComp = {
    SellerHome: SellerHome,
    SellerAnalytic: SellerAnalytic,
    SellerWidgets: SellerWidgets,
    UserManagement: UserManagement,
    MyProfile: MyProfile,
    EditProfile: EditProfile,
    ChangePassword: ChangePassword,
    ProductList: ProductList,
    ProductManagement: ProuctManagement,
  };

  const SelectedComponent = RelaventComp[currentTab];

  return (
    SelectedComponent && (
      <div className="w-[100%]">
        <SelectedComponent />
      </div>
    )
  );
};

export default SellerExpandableArea;
