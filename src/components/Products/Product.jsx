import React, { useState } from "react";
import Chair from "images/chair.png";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartEmpty } from "@heroicons/react/24/outline";

const ProductCard = ({ approved, favorite = false }) => {
  const [liked, setliked] = useState(favorite ? true : false);
  return (
    <div className="w-full h-[170px] flex border-2 p-2 space-x-2 border-[#EDEFF6]">
      <div className="bg-[#F6FBFF] flex w-3/4 lg:w-1/2 justify-center items-center">
        <img className=" lg:w-full lg:h-full" src={Chair} alt="" />
      </div>
      <div className="flex pr-4 w-full pt-4 justify-between">
        <div className="flex  flex-col space-y-2">
          <p className="text-xs lg:text-sm text-[#D6AD60]">Home and Goods</p>
          <p className="text-sm lg:text-base">Luxary Modern Chair</p>
          <p className="text-[#5F646F] text-sm lg:text-base">$350</p>
          <p className="text-[#798086] flex-col lg:flex-row flex w-full text-xs lg:text-sm">
            Approved Status:{" "}
            <span
              className={`px-2 lg:ml-1 py-1 mt-1 lg:mt-0 text-center ${
                approved
                  ? "text-[#34BF42] bg-[#2BDE1C]/10"
                  : "bg-[#FF0000]/5 text-[#FF7575]"
              }`}
            >
              {approved ? "Approved" : "Not approved"}
            </span>
          </p>
        </div>
        <div>
          <p className="text-[#798086] sm:text-xs lg:text-sm flex lg:space-x-2">
            <span className="hidden lg:block">
              {favorite ? "Remove from favorite" : "Add to favorite"}
            </span>
            {liked ? (
              <HeartIcon
                onClick={() => setliked(!liked)}
                className="text-[#FA5353] w-5 h-5"
              />
            ) : (
              <HeartEmpty
                onClick={() => setliked(!liked)}
                className=" w-5 h-5"
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
