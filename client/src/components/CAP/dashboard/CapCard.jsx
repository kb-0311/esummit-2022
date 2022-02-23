import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const CapCard = (props) => {
  return (
    <div className="w-full lg:w-fit">
      <div className="justify-center flex">
        <div className="border border-sky-500 bg-black space-y-5 lg:space-y-10 w-full lg:w-4/5 flex flex-col justify-center items-center">
          <div className="font-Montserrat text-3xl text-white font-bold mt-4 lg:my-2 lg:mt-8">
            <span className="text-sky-500 italic">HELLO, </span>
            <span>{props.name}</span>
          </div>

          <div>
            <div className="font-Poppins text-white font-bold grid grid-cols-2 gap-32 lg:gap-12 content-center items-center justify-center flex">
              <div>
                <div className="text-sky-500 text-5xl">#{props.rank}</div>
                <div className="text-center">POSITION</div>
              </div>
              <div>
                <div className="text-sky-500 text-5xl">{props.points}</div>
                <div className="text-center">POINTS</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col pb-4 lg:pb-0 justify-center items-center">
            <div className="font-Poppins text-white font-bold m-1">
              YOUR REFERRAL CODE
            </div>
            <div className="bg-sky-500 w-fit p-2 px-4 rounded-full flex flex-row">
              <div className="font-Poppins font-bold">{props.refcode}</div>
              <div className="ml-2">
                <FontAwesomeIcon icon={faCopy} />
              </div>
            </div>
          </div>

          <div className="hidden lg:inline-block">
            <img src="src\assets\chatbot2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapCard;