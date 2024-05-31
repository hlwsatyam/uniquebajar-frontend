import React, { useEffect } from "react";
import loadingGif from "../../assets/Background/Loading.gif";
const LoadingFullPage = () => {
  const [isTimeOver, setIsTimeOver] = React.useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimeOver(true);
    }, 5000);
    return () => clearTimeout(timer);
  });
  return (
    <div className=" w-full">
      <img
        src={
          isTimeOver
            ? "https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696458.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1715990400&semt=ais_user"
            : loadingGif
        }
        className="m-auto sm:w-[300px] w-[100px]  "
        alt="loaidng Image"
      />
    </div>
  );
};

export default LoadingFullPage;
