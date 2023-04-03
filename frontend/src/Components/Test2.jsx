
// import { useState, useEffect } from 'react';

// const Test = () => {
//   const [showData, setShowData] = useState(false);
//   const [dataOne, setDataOne] = useState("");
//   const [dataTwo, setDataTwo] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDataOne(getRandomDataForProfit());
//       setDataTwo(getRandomDataForLoss());
//     }, 900);
//     return () => clearInterval(interval);
//   }, []);

//   const handleHover = () => {
//     setShowData(true);
//   };

//   const handleLeave = () => {
//     setShowData(false);
//   };

//   const getRandomDataForProfit = () => {
//     const data = ["12.23", "23.24", "34.34", "43.345", "46.76"];
//     return data[Math.floor(Math.random() * data.length)];
//   };
//   const getRandomDataForLoss = () => {
//     const data = ["1.23", "2.24", "3.34", "4.345", "5.76"];
//     return data[Math.floor(Math.random() * data.length)];
//   };

//   return (
//     <div className="relative">
//       <div className="bg-blue-500 hover:bg-blue-600 p-4 rounded-lg cursor-pointer" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
//         Hover over me
//       </div>
//       {showData && (
//         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
//           <div className="bg-white p-1 rounded-lg">
//             <p>Net Profit: {dataOne}</p>
//             <p>Net Loss: {dataTwo}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;

import { useState, useEffect } from "react";

const Test = () => {
  const [showData, setShowData] = useState(false);
  const [dataOne, setDataOne] = useState("");
  const [dataTwo, setDataTwo] = useState("");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataOne(getRandomDataForProfit());
      setDataTwo(getRandomDataForLoss());
    }, 900);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        id: i + 1,
        name: getRandomName(),
        value: getRandomValue(),
      });
    }
    setTableData(data);
  }, []);

  const handleHover = (id) => {
    const data = tableData.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          valueOne: getRandomDataForProfit(),
          valueTwo: getRandomDataForLoss(),
        };
      } else {
        return row;
      }
    });
    setTableData(data);
    setShowData(id);
  };

  const handleLeave = () => {
    setShowData(false);
  };

  const getRandomName = () => {
    const names = ["John", "Jane", "Mike", "Alice", "Bob"];
    return names[Math.floor(Math.random() * names.length)];
  };

  const getRandomValue = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const getRandomDataForProfit = () => {
    const data = ["12.23", "23.24", "34.34", "43.345", "46.76"];
    return data[Math.floor(Math.random() * data.length)];
  };

  const getRandomDataForLoss = () => {
    const data = ["1.23", "2.24", "3.34", "4.345", "5.76"];
    return data[Math.floor(Math.random() * data.length)];
  };

  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr
              key={row.id}
              className="bg-gray-200 hover:bg-gray-300"
              onMouseEnter={() => handleHover(row.id)}
              onMouseLeave={handleLeave}
            >
              <td className="border px-4 py-2 flex">
                <div>{row.id}</div>
                <div>
                  {" "}
                  {showData === row.id && (
                    <td colSpan="3" className="bg-white p-1">
                      <p>Net Profit: {row.valueOne}</p>
                      <p>Net Loss: {row.valueTwo}</p>
                    </td>
                  )}
                </div>
              </td>
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
