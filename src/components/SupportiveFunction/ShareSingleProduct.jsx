import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { MdCopyAll } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
export const ShareProduct = () => {
  toast(
    (t) => (
      <div className="toast-content">
        <p className="text-right">
          {/* <button onClick={() => >❌</button>} */}
        </p>
        <LogOut clickToCancel={() => toast.dismiss()} />
      </div>
    ),
    {
      duration: 3000000,
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        boxShadow: "none",
        background: "transparent",
        height: "100vh",
        width: "100vw",
      },
    }
  );
};

const LogOut = ({ clickToCancel }) => {
  const [selected, setIsSelected] = useState(true);

  let CurrentIcon = (icon) => icon;
  const LogoutHandler = () => {
    setIsSelected(!selected);

    // Assuming you have the URL you want to copy
    const urlToCopy = window.location; // Replace with your actual URL

    // Copy the URL to the clipboard
    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        // Handle success (e.g., show a success message)
        console.log("URL copied to clipboard:", urlToCopy);
      })
      .catch((error) => {
        // Handle error (e.g., show an error message)
        console.error("Error copying URL to clipboard:", error);
      });
  };
  return (
    <div className=" bg-neutral-600 p-5 bg-transparent border shadow text-white rounded-[12px] ">
      <p className="font-bold text-sm my-2">
        {" "}
        Share This Product To Your Relative!
      </p>
      <button
        onClick={LogoutHandler}
        className="flex justify-center items-center gap-x-2 hover:bg-slate-950 bg-green-500 text-white font-bold  w-full py-3 rounded-full"
      >
        Copy{" "}
        {selected
          ? CurrentIcon(<MdCopyAll />)
          : CurrentIcon(<MdOutlineDoneAll />)}
      </button>
      <button
        onClick={clickToCancel}
        className=" text-green-500 border my-4 font-bold  w-full py-3 rounded-full"
      >
        Cancel
      </button>
    </div>
  );
};
