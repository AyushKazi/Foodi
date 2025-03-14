import React from "react";
import Chef from "../../assets/chef.png";
const CustomerFeedback = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  mx-6 p-4">
        {/* image */}
        <div className=" mb-4  flex flex-col items-end ">
          <div className="h-52 w-full"></div>
          <div className="bg-green-400 flex justify-center relative h-52 w-full  rounded-b-3xl rounded-t-3xl">
            <img
              src={Chef}
              alt=""
              className="absolute bottom-0 h-[400px] w-[300px]"
            />
          </div>
        </div>

        {/* description */}
        <div className=" flex flex-col gap-4 md:ml-8 border border-black">
          <p className="uppercase text-red-400 font-semibold tracking-widest text-xs">
            testimonoals
          </p>
          <h1 className="text-2xl font-semibold">
            What Our Customers Say About Us
          </h1>
          <p>
            “I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </p>
          <div className="border border-red-300 grid grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww"
                alt=""
                className="h-20 w-20 rounded-full z-20"
              />
              <img
                src="https://media.istockphoto.com/id/980664232/photo/close-up-portrait-of-young-man-laughing-and-covering-his-mouth-with-hand-over-white-background.jpg?s=612x612&w=0&k=20&c=wcT2XSfBmjcHbhD8YX_GJV9HDTduDiJChFsRB-s0TpQ="
                alt=""
                className="h-20 w-20 rounded-full z-10 "
              />
              <img
                src="https://media.istockphoto.com/id/1157139819/photo/guy-closed-eyes-put-hands-on-chest-sincerely-requesting.jpg?s=612x612&w=0&k=20&c=YjvxhTL_YdM40FWeAa8QKz3K-qdn300BYQPAYZ-KWx8="
                alt=""
                className="h-20 w-20 rounded-full z-0"
              />
            </div>
            <div>Feedback</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerFeedback;
