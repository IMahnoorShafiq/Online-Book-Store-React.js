import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleOrderNow = () => {
    // Display the success message
    setSuccessMessage("Order successfully placed!");

    // Clear the success message and close the popup after 2 seconds
    setTimeout(() => {
      setSuccessMessage("");
      setOrderPopup(false);
    }, 2000);
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1>Thank You For Your Order ❤️ 
                  
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              {!successMessage ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                  <div className="flex justify-center">
                    <button
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                      onClick={handleOrderNow}
                    >
                      Order Now
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center text-green-600 font-bold">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;