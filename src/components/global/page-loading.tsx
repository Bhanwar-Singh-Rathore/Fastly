'use client';

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonPageLoader: React.FC = () => {
  return (
    <div className="p-6 min-h-[1100px] bg-white">
      {/* Page Header */}
      <div className="mb-6">
        <Skeleton height={40} width={300} borderRadius="8px" />
      </div>
      {/* Search and Button */}
      <div className="flex justify-between mb-4 gap-2">
        <Skeleton height={40} width={280} borderRadius="8px" />
        <Skeleton height={40} width={120} borderRadius="8px" />
      </div>
      {/* Table Skeleton */}
      <div className="overflow-x-auto min-h-[700px] rounded-lg shadow-md border">
        <Skeleton height={50} count={8} borderRadius="8px" />
      </div>
    </div>
  );
};

export default SkeletonPageLoader;

// import React from 'react'

// function Pageloading() {
//   return (
//     <div>
//       <div className="space-y-4">
//           <div className="w-3/4 h-6 bg-gray-300 animate-pulse"></div>
//           <div className="w-1/2 h-4 bg-gray-300 animate-pulse"></div>
//         </div>
//     </div>
//   )
// }

// export default Pageloading
