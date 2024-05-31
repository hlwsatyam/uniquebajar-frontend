import React, { useState, useRef, useEffect } from "react";
import logo from "../../../../assets/AuthIMG/Unique Bazar.png";
import { IoIosNotifications } from "react-icons/io";

const SellerHeader = () => {
  const [notificationList, setNotificationList] = useState([
    "hey you Got One Order Recently",
    "password updated",
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const notificationButtonRef = useRef();

  const handleNotificationClick = (event) => {
    // event.stopPropagation();
    setShowNotifications(true);
  };

  const handleOutsideClick = (event) => {
    if (
      notificationButtonRef.current &&
      !notificationButtonRef.current.contains(event.target)
    ) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex gap-x-4 items-center">
      <img src={logo} className="w-[50px] h-[50px] rounded-full" alt="logo" />

      <div className="flex items-center gap-x-3">
        <img src="" alt="author image" /> <span>Admin</span>
      </div>
      <div
        ref={notificationButtonRef}
        onClick={handleNotificationClick}
        className="relative"
      >
        <IoIosNotifications className="text-2xl cursor-pointer" />
        {showNotifications && (
          <div className="absolute top-12 right-0 bg-white shadow-md p-2">
            {notificationList.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerHeader;
