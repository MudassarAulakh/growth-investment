import React from "react";
import { HomeMainTableArray } from "./HomeMainTableArray";

const HomeMainTableFeature = () => {
 

  return (
    <table className="w-full border-separate border-spacing-y-3">
      <thead>
        <tr>
          <th className="border-b border-gray-300 p-3 text-left">ID</th>
          <th className="border-b border-gray-300 p-3 text-center">Country</th>
          <th className="border-b border-gray-300 p-3 text-center">Interest</th>
          <th className="border-b border-gray-300 p-3 text-center">Remaining</th>
          <th className="border-b border-gray-300 p-3 text-center">Available</th>
          <th className="border-b border-gray-300 p-3 text-center"></th>
        </tr>
      </thead>
      <tbody>
        {HomeMainTableArray.map((row, index) => (
          <tr key={index}>
            <td className="p-2 border-b border-gray-300">{row.id}</td>
            <td className="p-2 border-b text-center border-gray-300">{row.country}</td>
            <td className="p-2 border-b text-center border-gray-300">{row.interest}</td>
            <td className="p-2 border-b text-center border-gray-300">{row.remaining}</td>
            <td className="p-2 border-b text-center border-gray-300">{row.available}</td>
            <td className="p-2 border-b flex justify-end border-gray-300">
              <button className="px-4 flex justify-center items-center rounded-full w-[120px] h-[40px] bg-[#A0F000] hover:bg-[#BBFE59]">
                Invest
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HomeMainTableFeature;
