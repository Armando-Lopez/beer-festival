import React from "react";
import { Link } from "react-router-dom";
import { SubscribeForm } from "../components/global/home/SubscribeForm";
import { useBreakpoints } from "../hook/useBreakpoints";

const Home = () => {
  const { lg } = useBreakpoints();

  return (
    <div
      className="min-h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${require(!lg
          ? "../assets/background-mobile.jpg"
          : "../assets/background.jpg")})`,
      }}
    >
      <div className="container pt-7">
        <div className="flex justify-between">
          <img
            src={require("../assets/logo.png")}
            alt="Logo"
            className="w-28"
          />
          <Link className="uppercase bg-orange-bf text-xl font-bebas h-12 px-9 my-auto grid place-items-center text-cream-bf rounded-lg border-[1px] border-cream-bf">
            sponsor us
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between my-auto mt-12 lg:mt-28 container">
        <div>
          <div className="w-[260px] lg:w-[475px] text-cream-bf">
            <span className="font-bold">
              Get ready for the ultimate craft beer celebration!
            </span>
            <h1 className="text-6xl lg:text-[80px] font-bebas mt-4">
              Canyon Craft Beer Festival
            </h1>
            <p className="mt-4 border-text text-cream-bf">
              Join us at the Yale Historic Site as we raise a glass to craft
              breweries from all along the Fraser River. Enjoy local flavours,
              activities, and entertainment all weekend long. See you there!
            </p>
          </div>
          <SubscribeForm />
        </div> 
        <div className="mt-auto">
          <p className="text-center text-cream-bf font-bebas text-xl w-[268px] md:w-[320px] md:max-h-28 mx-auto mt-9 md:bg-coffee-bf/75 md:px-7 md:py-3">
            Location: 31187 Douglas Street, Yale, BC Dates: Aug 31 - Sept 1,
            2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
