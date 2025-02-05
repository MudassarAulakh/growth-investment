const TableComponent = () => {
  return (
    <>
      <div className="w-[65%] mx-auto mt-6">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr>
              <th className="border-b border-gray-300 p-3 text-left">ID</th>
              <th className="border-b border-gray-300 p-3 text-center">
                Country
              </th>
              <th className="border-b border-gray-300 p-3 text-center">
                Interest
              </th>
              <th className="border-b border-gray-300 p-3 text-center">
                Remaining
              </th>
              <th className="border-b border-gray-300 p-3 text-center">
                Available
              </th>
              <th className="border-b border-gray-300 p-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "LVX0000D6RZ0",
                country: "🇷🇴 Romania",
                interest: "12.5%",
                remaining: "9m 10d",
                available: "€1 428.76",
              },
              {
                id: "LVX0000D6RZ0",
                country: "🇷🇴 Romania",
                interest: "12.5%",
                remaining: "1y 0m 28d",
                available: "€270.07",
              },
              {
                id: "LVX0000D6RZ0",
                country: "🇷🇴 Romania",
                interest: "13%",
                remaining: "1y 1m 14d",
                available: "€4 443.18",
              },
              {
                id: "LVX0000D6RZ0",
                country: "🇷🇴 Romania",
                interest: "12.5%",
                remaining: "1y 2m 4d",
                available: "€1 371.39",
              },
              {
                id: "LVX0000D6RZ0",
                country: "🇷🇴 Romania",
                interest: "13%",
                remaining: "1y 4m 20d",
                available: "€9 220.30",
              },
              {
                id: "LVX0000D6RZ0",
                country: "🇷🇴 Romania",
                interest: "12.5%",
                remaining: "1y 6m 28d",
                available: "€4 865.61",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td className="p-2 border-b border-gray-300">{row.id}</td>
                <td className="p-2 border-b text-center border-gray-300">
                  {row.country}
                </td>
                <td className="p-2 border-b text-center border-gray-300">
                  {row.interest}
                </td>
                <td className="p-2 border-b text-center border-gray-300">
                  {row.remaining}
                </td>
                <td className="p-2 border-b text-center border-gray-300">
                  {row.available}
                </td>
                <td className="p-2 border-b flex justify-end border-gray-300">
                  <button className="px-4 flex justify-center items-center rounded-full w-[120px] h-[40px] bg-[#A0F000] hover:bg-[#BBFE59]">
                    Invest
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col w-[70%] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-semibold">Investments opportunities</h1>
          <h3 className="flex justify-between items-center cursor-pointer hover:underline">
            Learn more
            <span className="p-2 rounded-full text-white bg-black border">
              <FaArrowRight />
            </span>
          </h3>
        </div>
          
      </div>
    </>
  );
};

export default TableComponent;
