// import React, { useEffect, useState } from 'react';
// import Image from "next/image";
// import { getAllUser } from '@/lib/queries';

// const CardPopularUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Fetch users data asynchronously
//     const fetchUsers = async () => {
//       try {
//         const data = await getAllUser(); // assuming getAllUser() is an async function
//         setUsers(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setIsLoading(false); // Set loading to false even in case of error
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="bg-white shadow-md  scroll-m-0 overflow-auto max-h-[500px] rounded-lg p-5 pb-16 flex flex-col h-full">
//       {isLoading ? (
//         <div className="space-y-4">
//           <div className="w-3/4 h-6 bg-gray-300 animate-pulse"></div>
//           <div className="w-1/2 h-4 bg-gray-300 animate-pulse"></div>
//         </div>
//       ) : (
//         <>
//           <div className="mb-5 px-7 ">
//             {/* <div className="text-sm text-gray-500">All Users</div> */}
//             <h2 className="text-lg font-semibold  text-gray-700">All Users</h2>
//           </div>

//           <div className="border-t  ">
//             {users.map((user) => (
//               <div
//                 key={user.userId}
//                 className="flex items-center  justify-between gap-3 px-5 py-7 border-b"
//               >
//                 <div className="flex items-center gap-3">
//                   <Image
//                     src={user.avatarUrl || "/default-avatar.png"} // fallback avatar in case URL is missing
//                     alt={user.name}
//                     width={48}
//                     height={48}
//                     className="rounded-full"
//                   />
//                   <div className="flex flex-col gap-1">
//                     <div className="font-bold text-gray-700">{user.name}</div>
//                     <div className="text-sm text-gray-500">{user.email}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CardPopularUsers;


import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { getAllUser } from '@/lib/queries';

const CardPopularUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUser(); // assuming getAllUser() is an async function
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-white shadow-md sm:overflow-hidden md:overflow-auto rounded-lg p-5 pb-16 flex flex-col h-full max-h-[500px]">
      {isLoading ? (
        <div className="space-y-4">
          <div className="w-3/4 h-6 bg-gray-300 animate-pulse"></div>
          <div className="w-1/2 h-4 bg-gray-300 animate-pulse"></div>
        </div>
      ) : (
        <>
          <div className="mb-5 px-7">
            <h2 className="text-lg font-semibold text-gray-700">All Users</h2>
          </div>

          <div className="border-t">
            {users.map((user) => (
              <div
                key={user.userId}
                className="flex flex-wrap items-center justify-between gap-3 px-5 py-7 border-b"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={user.avatarUrl || "/default-avatar.png"} // fallback avatar in case URL is missing
                    alt={user.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="font-bold text-gray-700">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularUsers;
