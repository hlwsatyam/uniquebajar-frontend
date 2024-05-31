import React from "react";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import PanCardInformation from "./PANCardInformation/PanCardInformation";
import AddressDetails from "./AddressDetails/AddressDetails";
import MyOrder from "./MyOrder/MyOrder";
import FAQ from "../../Legality/FAQ/FAQ";

const AccountData = ({ UserData, NavigationTabVal, ...style }) => {
  // Define a map for easier navigation
  const componentsMap = {
    userEditData: <ProfileDetails UserData={UserData} />,
    myOrder: <MyOrder />,
    panCardInformation: <PanCardInformation />,
    DeliveryAddress: <AddressDetails />,
    needHelp: <FAQ viewFromAbout={false} />
  };

  // Use the NavigationTabVal to select the appropriate component
  const selectedComponent = componentsMap[NavigationTabVal] || null;
 
  return (
    <div {...style}>
      {selectedComponent}
    </div>
  );
};

export default AccountData;
