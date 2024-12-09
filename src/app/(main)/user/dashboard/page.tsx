// // "use client";

// // import {
// //   CheckCircle,
// //   Package,
// //   Tag,
// //   TrendingDown,
// //   TrendingUp,
// // } from "lucide-react";
// // import CardExpenseSummary from "./CardExpenseSummary";
// // import CardPopularProducts from "./CardAllUser";
// // import BlurPage from "@/components/global/blur-page";
// // import CardUserSummary from "./CardUserSummary";

// // const Dashboard = () => {
// //   return (
// //     <BlurPage>
// //       <div className="relative -mt-12 sm:px-10 px-4 h-screen overflow-y-auto overflow-x-hidden">
// //         {/* Responsive grid layout */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-12 mb-12">
// //           {/* Popular Products Card */}
// //           <CardPopularProducts />
          
// //           {/* User Summary Card */}
// //           <CardUserSummary />
          
// //           {/* Expense Summary Card */}
// //           <CardExpenseSummary />
// //         </div>
// //       </div>
// //     </BlurPage>
// //   );
// // };

// // export default Dashboard;

// "use client";

// import {
//   CheckCircle,
//   Package,
//   Tag,
//   TrendingDown,
//   TrendingUp,
// } from "lucide-react";
// import CardExpenseSummary from "./CardExpenseSummary";
// import CardPopularProducts from "./CardAllUser";
// import BlurPage from "@/components/global/blur-page";
// import CardUserSummary from "./CardUserSummary";
// import { useState, useEffect } from "react";

// const Dashboard = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading process (e.g., fetching data for cards)
//     const fetchData = async () => {
//       try {
//         // Simulate async data loading (replace with actual API call if needed)
//         await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate delay
//       } catch (error) {
//         console.error("Error loading data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="text-center">
//           <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"></div>
//           <p className="mt-4 text-lg">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <BlurPage>
//       <div className="relative -mt-12 sm:px-10 px-4 h-screen overflow-y-auto overflow-x-hidden">
//         {/* Responsive grid layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-12 mb-12">
//           {/* Popular Products Card */}
//           <CardPopularProducts />
          
//           {/* User Summary Card */}
//           <CardUserSummary />
          
//           {/* Expense Summary Card */}
//           <CardExpenseSummary />
//         </div>
//       </div>
//     </BlurPage>
//   );
// };

// export default Dashboard;

"use client";


import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardAllUser";
import BlurPage from "@/components/global/blur-page";
import CardUserSummary from "./CardUserSummary";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton"; // Import the skeleton loader
import "react-loading-skeleton/dist/skeleton.css"; // Import the skeleton CSS for styling

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
       
        await new Promise((resolve) => setTimeout(resolve, 3000)); 
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="relative mt-12 sm:px-10 px-4 h-screen overflow-y-auto overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-12 mb-12">
       
          <Skeleton height={200} borderRadius="8px" />
          
        
          <Skeleton height={200} borderRadius="8px" />
          
         
          <Skeleton height={200} borderRadius="8px" />
        </div>
      </div>
    );
  }

  return (
    <BlurPage>
      <div className="relative -mt-12 sm:px-10 px-4 h-screen overflow-y-auto overflow-x-hidden">
       
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-12 mb-12">
         
          <CardPopularProducts />
          
          
          <CardUserSummary />
          
          
          <CardExpenseSummary />
        </div>
      </div>
    </BlurPage>
  );
};

export default Dashboard;
