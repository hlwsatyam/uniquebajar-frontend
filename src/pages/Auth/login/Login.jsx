import React, { useState, useEffect } from "react";
import loginImg from "../../../assets/AuthIMG/login_girl.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../Redux/Action";
import { BaseApiUrl } from "../../../components/Fetchings/OnlineData";
const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const phtoken = params.get("phtoken");
  const [input, setInput] = useState({
    mobileNumber: "",
    otp: "",
  });
  const [isNumberEntered, setIsNumberEntered] = useState(true);
  useEffect(() => {
    setIsOtpComing(input.mobileNumber.length >= 10);
    if (phtoken) {
      axios
        .post(`${BaseApiUrl}/api/customerMob/verification`, {
          token: phtoken,
        })
        .then((res) => {
          if (res.data.customerToken) {
            localStorage.setItem("customerToken", res.data.customerToken);
            dispatch(
              loginAction({
                isLogged: true,
              })
            );
            navigate("/");
          }
        })
        .catch((err) => {
          console.error("Error Fetching Data", err);
        });
    } else {
    }
  }, [input.mobileNumber]);
  const InputChangeHandler = (e) => {
    setInput((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };
  const [isOtpComing, setIsOtpComing] = useState(
    input.mobileNumber.length < 10 ? false : true
  );
  const handleClick = async () => {
    const loginWindow = window.open(
      `https://www.phone.email/auth/sign-in?countrycode=+91&phone_no=8059424475&redirect_url=http://localhost:3000/account/login`,
      // `https://www.phone.email/auth/sign-in?countrycode=+91&phone_no=8059424475&redirect_url=https://uniquebajar.com/account/login`,
      "peLoginWindow",
      "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0, width=500, height=560, top=500, left=400"
    );
  };
  return (
    <div className="grid col-span-1 place-items-center my-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Image (hidden on mobile) */}
        <img
          src={loginImg}
          className="w-[450px] h-[450px] md:block lg:block hidden"
          alt="Login Img"
        />
        <div className="md:col-span-1 rounded-[20px] shadow p-10 bg-slate-50 lg:col-span-1 flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-3xl w-full  ">
            Verify Your Account
          </h1>
          <p className="  mt-2 text-[12px] w-full ">
            We are Not Sharing Your Information
          </p>
          <div className="mt-8 w-full relative ">
            {/* <input
                name="otp"
                type="text"
                onChange={InputChangeHandler}
                className="border-none px-4 py-3 font-bold text-[14px]   placeholder:text-center placeholder:font-bold placeholder:text-[13px] w-full outline-none"
                placeholder="Please Enter ONE TIME PASSWORD*"
              /> */}
          </div>

          {/* <button
              className={
                isOtpComing
                  ? `bg-slate-800 text-white font-semibold w-full rounded-full py-3 mt-4`
                  : `bg-slate-300 cursor-default text-white font-semibold w-full rounded-full py-3 mt-4`
              }
            >
              Verify
            </button> */}

          <button
            className="flex items-center justify-between px-4 py-3 bg-green-500 font-bold text-white border-none rounded-md text-base cursor-pointer"
            id="btn_ph_login"
            name="btn_ph_login"
            type="button"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 fill-current text-white"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
            </svg>
            Sign in with Phone Number
          </button>
          <p className="  mt-2 text-[12px] w-full ">
            By continuing, you agree to our{" "}
            <Link to="/terms-conditions">
              <span className="cursor-pointer font-semibold text-blue-400">
                Terms of Service
              </span>
            </Link>{" "}
            and
            <Link to="/privacy-policy">
              {" "}
              <span className="cursor-pointer font-semibold text-blue-400">
                {" "}
                Privacy & Legal Policy
              </span>
            </Link>
          </p>
        </div>
        {/* {isNumberEntered ? (
          <div className="md:col-span-1 rounded-[20px] shadow p-10 bg-slate-50 lg:col-span-1 flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-3xl w-full  ">
              Verify Your Account
            </h1>
            <p className="  mt-2 text-[12px] w-full ">
              We are Not Sharing Your Information
            </p>
            <div className="mt-8 w-full relative ">
              
            </div>

            <button
              className="flex items-center justify-between px-4 py-3 bg-green-500 font-bold text-white border-none rounded-md text-base cursor-pointer"
              id="btn_ph_login"
              name="btn_ph_login"
              type="button"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 fill-current text-white"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
              </svg>
              Sign in with Phone Number
            </button>
            <p className="  mt-2 text-[12px] w-full ">
              By continuing, you agree to our{" "}
              <Link to="/terms-conditions">
                <span className="cursor-pointer font-semibold text-blue-400">
                  Terms of Service
                </span>
              </Link>{" "}
              and
              <Link to="/privacy-policy">
                {" "}
                <span className="cursor-pointer font-semibold text-blue-400">
                  {" "}
                  Privacy & Legal Policy
                </span>
              </Link>
            </p>
          </div>
        ) : (
          <div className="md:col-span-1 rounded-[20px] shadow p-10 bg-slate-50 lg:col-span-1 flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-3xl w-full  ">
              Login To UniqueBazar
            </h1>
            <p className="  mt-2 text-[12px] w-full ">
              to access your Addresses, Orders & Accounts.
            </p>
            <div className="mt-8 w-full relative border border-b-orange-400">
              <input
                name="mobileNumber"
                type="text"
                onChange={InputChangeHandler}
                className="border-none px-4 py-3 font-bold text-[14px]   placeholder:text-center placeholder:font-bold placeholder:text-[13px] w-full outline-none"
                placeholder="Enter your mobile number"
              />
            </div>

            <button
              className={
                isOtpComing
                  ? `bg-slate-800 text-white font-semibold w-full rounded-full py-3 mt-4`
                  : `bg-slate-300 cursor-default text-white font-semibold w-full rounded-full py-3 mt-4`
              }
            >
              Get OTP
            </button>
            <p className="  mt-2 text-[12px] w-full ">
              By continuing, you agree to our{" "}
              <span className="cursor-pointer font-semibold text-blue-400">
                Terms of Service
              </span>{" "}
              and
              <span className="cursor-pointer font-semibold text-blue-400">
                {" "}
                Privacy & Legal Policy
              </span>
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Login;
