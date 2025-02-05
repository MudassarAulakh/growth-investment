import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[85%] mx-auto flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2 text-xl">
          <img src="./footer/Nectaro_.jpg" className="w-34" alt="" />
          <p>A licensed European investment platform.</p>
          <p>
            Investing in financial instruments involves risk. Keep in <br />{" "}
            mind that there's no absolute guarantee of getting back <br /> the
            full invested amount.
          </p>
          <div>About</div>
        </div>
        <div className="flex flex-col gap-3 text-xl">
          <h1 className="text-2xl font-semibold">Invest</h1>
          <div className="text-[#7A7D85] hover:underline">How to start</div>
          <div className="text-[#7A7D85] hover:underline">How it works</div>
          <div className="text-[#7A7D85] hover:underline">
            Lending companies
          </div>
          <div className="text-[#7A7D85] hover:underline">Investment risks</div>
        </div>
        <div className="flex flex-col gap-3 text-xl">
          <h1 className="text-2xl font-semibold">Help</h1>
          <div className="text-[#7A7D85] hover:underline">FAQ</div>
          <div className="text-[#7A7D85] hover:underline">
            support@nectaro.eu
          </div>
          <h2 className="font-semibold">Follow us</h2>
          <div className="flex gap-1">
            <span className="cursor-pointer">
              <ImLinkedin />
            </span>
            <span className="cursor-pointer">
              <FaFacebook />
            </span>
            <span className="cursor-pointer">
              <FaTwitter />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-xl">
          <h1 className="text-2xl font-semibold">Legal</h1>
          <div className="text-[#7A7D85] hover:underline">Privacy policy</div>
          <div className="text-[#7A7D85] hover:underline">
            Terms & conditions
          </div>
          <div className="text-[#7A7D85] hover:underline">
            Investor protection
          </div>
          <div className="text-[#7A7D85] hover:underline">Legal documents</div>
        </div>
      </div>
      <div className="border"></div>
      <div className="text-[14px] text-[#7A7D85] flex flex-col gap-5">
        <div>
          SIA Nectaro (registration nr. 40203016025; legal address: Jeruzalemes
          1, Riga, LV-1010, Latvia; phone: +371 67783589) is an authorized
          investment platform with an IBF license Nr. 27-55/2023/3 supervised by
          <span className="text-blue-600 hover:underline cursor-pointer">
            Latvijas Banka
          </span>{" "}
          (address: K. Valdemara 2A, Riga, LV-1050, Latvia; phone: +371
          67022300)
        </div>
        <div>
          Nectaro is a member of the national investor compensation scheme
          established under EU Directive 97/9/EC. The scheme protects investors
          by providing compensation if Nectaro fails to return financial
          instruments or cash to investors. The maximum compensation an investor
          can claim under the scheme is 90% of their net loss, up to a maximum
          of €20 000
        </div>
        <div>© 2024 Nectaro. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
