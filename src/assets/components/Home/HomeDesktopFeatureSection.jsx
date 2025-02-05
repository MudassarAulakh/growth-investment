import React from "react";

const HomeDesktopFeatureSection = () => {
  return (
    <div className="bg-[#664CF6] mt-10 text-white w-[99%] relative rounded-2xl px-10 flex flex-col gap-11 py-28 mx-auto">
      <h1 className="text-6xl font-semibold pl-6">
        Licensed, profitable and <br /> credible
      </h1>
      <div className="flex text-xl gap-10 justify-around">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Licensed</h2>
          <p>
            IBF License Nr. 27-55/2023/3 provides assurance to investors that
            the platform is operating legally and in compliance with EU
            regulations.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Transparent</h2>
          <p>
            Nectaro is regulated by the central bank of Latvia, the competent
            authority for investment services supervision in Latvia.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Secure</h2>
          <p>
            In accordance with European Directive 97/9/EC, all retail
            investors on Nectaro are considered members of the investor
            protection scheme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDesktopFeatureSection;
