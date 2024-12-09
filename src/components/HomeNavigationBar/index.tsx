// // import { ModeToggle } from '@/components/global/mode-toggle'
// import { UserButton } from '@clerk/nextjs'
// import { User } from '@clerk/nextjs/server'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// // type Props = {
// //   user?: null | User
// // }

// const Navigation = () => {
//   return (
//     <div className="fixed top-0  right-0 left-0 p-8 flex items-center justify-between z-10">
//       <Link href={'/'}> <aside className="flex items-center gap-2">
//        {/* <Image
//           src={'./assets/plura-logo.svg'}
//           width={40}
//           height={40}
//           alt="plur logo"
//         /> */}
//         <span className="text-xl font-bold"> ⚡ Fastly.</span>
//       </aside></Link>
      
//       <nav className="hidden text-1xl font-semibold md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
//         <ul className="flex items-center justify-center gap-8">
//           <Link href={'domain'}>Pricing</Link>
//           <Link href={'AboutUs'}>About</Link>
//           <Link href={'#'}>Documentation</Link>
//           <Link href={'#'}>Features</Link>
//         </ul>
//       </nav>
//       <aside className="flex gap-2 items-center">
//         <Link
//           href={`/user`}
//           className="bg-blue-600 text-white p-2 px-6 rounded-lg hover:bg-primary/80"
//         >
//           Login
//         </Link>
//         <UserButton />
       
//       </aside>
//     </div>
//   )
// }

// export default Navigation
import { useUser, UserButton } from '@clerk/nextjs';  // Import useUser and UserButton from Clerk
import Link from 'next/link'; // Import Link from Next.js

const Navigation = () => {
  const { isSignedIn } = useUser();  // Use Clerk's hook to get the user authentication status

  return (
    <div className="fixed top-0 right-0 left-0 p-8 flex items-center justify-between z-10">
      <Link href={'/'}>
        <aside className="flex items-center gap-2">
          <span className="text-xl font-bold"> ⚡ Fastly.</span>
        </aside>
      </Link>
      
      <nav className="hidden text-1xl font-semibold md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={'/domain'}>Pricing</Link>
          <Link href={'/AboutUs'}>About</Link>
          <Link href={'#'}>Documentation</Link>
          <Link href={'#'}>Features</Link>
        </ul>
      </nav>

      <aside className="flex gap-2 items-center">
        {isSignedIn ? (
          <Link
            href={`/user`}
            className="bg-blue-600 text-white p-2 px-6 rounded-lg hover:bg-primary/80"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            href={`/user/sign-in`}
            className="bg-blue-600 text-white p-2 px-6 rounded-lg hover:bg-primary/80"
          >
            Login
          </Link>
        )}
        <UserButton />
      </aside>
    </div>
  );
};

export default Navigation;
