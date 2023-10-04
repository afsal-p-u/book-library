"use client";

import { BooksType } from "@/utils/types";
import { useSession } from "next-auth/react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentOrder = ({ cartItems }: { cartItems: any }) => {
  const { data: session } = useSession() || "";

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    const response = await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({ total }),
    });
    const data = await response.json();

    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEYID!,
      name: "BookElysium",
      currency: data.data.currency,
      amount: data.data.amount,
      order_id: data.data.id,
      description: "Thankyou for your valuable time",
      image: "https://manuarora.in/logo.png",
      handler: async function (response: any) {
        const res = await fetch("/api/collection", {
          method: "POST",
          body: JSON.stringify({ email: session?.user?.email }),
        });
        const deleteCart = await fetch("/api/cart", {
          method: "DELETE",
          body: JSON.stringify({ email: session?.user?.email }),
        }); 

        if (res.ok) { 
          console.log("Success");
        } else {
          console.log("Error");
        }
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: session?.user?.name,
        email: session?.user?.email,
        // contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const total =
    cartItems &&
    cartItems.reduce((acc: number, item: BooksType) => acc + item.price, 0);

  return (
    <>
      {total > 0 && (
        <div className="px-[30px] py-[15px] w-[50%] max-h-[275px] book-shadow shadow-sm rounded max-md:w-[100%]">
          <h1 className="text-2xl font-semibold">Order Summary</h1>

          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between text-md font-medium">
              <p>MRP</p>
              <p>${total}</p>
            </div>
            <div className="flex justify-between text-md font-medium">
              <p>Coupon</p>
              <p className="text-red">-$0</p>
            </div>
            <hr className="opacity-25 mt-2" />
            <div className="flex justify-between text-xl font-medium">
              <p>Total</p>
              <p className="">${total}</p>
            </div>
            <button
              className="mt-5 bg-blue text-white text-md rounded px-7 py-2"
              onClick={() => makePayment()}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentOrder;
