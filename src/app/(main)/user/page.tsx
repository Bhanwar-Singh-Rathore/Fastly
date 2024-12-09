
// import BlurPage from '@/components/global/blur-page';
// import Unauthorized from '@/components/unauthorized';
// import { getAuthUserDetails } from '@/lib/queries';
// // import { currentUser } from '@clerk/nextjs/server';
// import { redirect } from 'next/navigation';
// import React from 'react';

// export default async function Page() {

//   const authUser = await getAuthUserDetails();

//   if (!authUser) {
//    return (</Unauthorized>)
//   }else{
//     redirect('/user/dashboard')
//   }

 
//   return (
//     <>
    
    
//     <BlurPage>
//       <h1>Welcome, {authUser.name}!</h1>
//       <p>Your email: {authUser.email}</p>
//       <p>Your Premission: {authUser.permissions}</p>
//     </BlurPage>
//     </>
//   );

// }


import BlurPage from '@/components/global/blur-page';
import Unauthorized from '@/components/unauthorized';
import { getAuthUserDetails } from '@/lib/queries';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Page() {
  const authUser = await getAuthUserDetails();

  if (!authUser) {
    return redirect('/unauthorized')
  }

  redirect('/user/dashboard');

  return (
    <BlurPage>
      <h1>Welcome, {authUser.name}!</h1>
      <p>Your email: {authUser.email}</p>
      <p>Your Permissions: {authUser.permissions}</p>
    </BlurPage>
  );
}
