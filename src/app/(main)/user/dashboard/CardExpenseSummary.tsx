// import React, { useEffect, useState } from 'react';
// import { TrendingUp } from 'lucide-react';
// import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

// const colors = ["#00C49F", "#0088FE", "#FFBB28"];

// const CardUserSummary = () => {
//   const [totalUsers, setTotalUsers] = useState(0);

//   // Fetch total number of users (replace this with actual API or prop passing)
//   useEffect(() => {
//     const fetchTotalUsers = async () => {
//       try {
//         const response = await fetch('/api/users'); // Your API endpoint
    
//         if (!response.ok) {
//           throw new Error(`Error fetching users: ${response.statusText}`);
//         }
    
//         const contentType = response.headers.get("Content-Type");
//         if (contentType && contentType.includes("application/json")) {
//           const usersData = await response.json();
//           setTotalUsers(usersData.length);
//         } else {
//           throw new Error("Expected JSON, but received non-JSON data.");
//         }
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };
    

//     fetchTotalUsers();
//   }, []);

//   return (
//     <div className="bg-white shadow-md rounded-lg flex flex-col justify-between p-5">
//       {/* Header */}
//       <div className="mb-2">
//         <h3 className="text-lg font-semibold">User Summary</h3>
//       </div>

//       <div className="border-t py-5">

//         {/* Chart */}
//         <div className="relative">
//           <ResponsiveContainer width="100%" height={140}>
//             <PieChart>
//               <Pie
//                 data={[{ name: 'Users', value: totalUsers }]}  // Use total users data
//                 innerRadius={50}
//                 outerRadius={60}
//                 fill="#8884d8"
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//               >
//                 <Cell fill={colors[0]} />
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//             <span className="font-bold text-xl"></span>
//           </div>
//         </div>

//         {/* Labels */}
//         <ul className="flex flex-col gap-3 py-5">
//           <li className="flex items-center text-xs">
//             <span className="mr-2 w-3 h-3 rounded-full" style={{ backgroundColor: colors[0] }}></span>
//             Total Users
//           </li>
//         </ul>
//       </div>

//       {/* Footer */}
//       <div className="flex justify-between items-center px-5 py-3 border-t">
//         <p className="text-sm">
//           Total Users: <span className="font-semibold">{totalUsers}</span>
//         </p>
//         <div className="flex items-center gap-1 text-green-500 text-xs">
//           <TrendingUp className="w-4 h-4" /> 30%
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardUserSummary;


import React, { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const colors = ["#00C49F", "#0088FE", "#FFBB28"];

const CardUserSummary = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  // Simulating API fetch with dummy data
  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        // Simulate fetching users from an API with a delay
        const dummyData = [
          { id: 1, name: "User A" },
          { id: 2, name: "User B" },
          { id: 3, name: "User C" },
          { id: 4, name: "User D" },
        ];

        // Mimic async API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        setTotalUsers(dummyData.length);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchTotalUsers();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col justify-between p-5">
      {/* Header */}
      <div className="mb-2">
        <h3 className="text-lg font-semibold">User Summary</h3>
      </div>

      <div className="border-t py-5">
        {/* Chart */}
        <div className="relative">
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie
                data={[{ name: 'Users', value: totalUsers }]} // Use total users data
                innerRadius={50}
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
              >
                <Cell fill={colors[0]} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="font-bold text-xl">{totalUsers}</span>
          </div>
        </div>

        {/* Labels */}
        <ul className="flex flex-col gap-3 py-5">
          <li className="flex items-center text-xs">
            <span
              className="mr-2 w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[0] }}
            ></span>
            Total Users
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-5 py-3 border-t">
        <p className="text-sm">
          Total Users: <span className="font-semibold">{totalUsers}</span>
        </p>
        <div className="flex items-center gap-1 text-green-500 text-xs">
          <TrendingUp className="w-4 h-4" /> 30%
        </div>
      </div>
    </div>
  );
};

export default CardUserSummary;
