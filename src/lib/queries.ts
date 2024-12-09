
'use server'
import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";


export const getAuthUserDetails = async () => {
  const user = await currentUser();

  if (!user || !user.emailAddresses || user.emailAddresses.length === 0) {
    return; 
  }
  const email = user.emailAddresses[0].emailAddress;

  const userData = await db.Admin.findUnique({
    where: { email },
  });
  if (userData) {
    return userData; 
  }
  const userCreate = await db.Admin.create({
    data: {
      email,
      name: user.fullName,
    },
  });
  return userCreate;
};



export const getCurrentAdmin = async () => {
  const currenUser = await currentUser(); // Fetch the current user
  if (currenUser) {
    const data = await db.Admin.findUnique({
      where: {
        email: currenUser.emailAddresses[0].emailAddress, // Ensure the field names match your database schema
      },
    });
    return data; 
  }
  return null; 
};



// export const CreateUser = async (user) => {
//   // Ensure the input has necessary properties
//   if (!user || !user.email || !user.name) {
//     throw new Error("Invalid user data. 'email' and 'name' are required.");
//   }
//   const admin = await getCurrentAdmin();
//   if (!admin) {
//     throw new Error("Admin not found for the current user.");
//   }
//   const newUser = await db.User.create({
//     data: {
//       ...user,
//       adminId: admin.id, 
//     },
//   });
//   return newUser;
// };

export const CreateUser = async (user) => {

  if (!user || !user.email || !user.name) {
    throw new Error("Invalid user data. 'email' and 'name' are required.");
  }

  const admin = await getCurrentAdmin();
  if (!admin) {
    throw new Error("Admin not found for the current user.");
  }


  const existingUser = await db.User.findUnique({
    where: { email: user.email },
  });

  let result;

  if (existingUser) {
    // Update the existing user
    result = await db.User.update({
      where: { email: user.email },
      data: {
        ...user,
        // premisson:
        adminId: admin.id, // Ensure adminId is updated if relevant
      },
    });
 
  } else {
    // Create a new user
    result = await db.User.create({
      data: {
        ...user,
        adminId: admin.id,
      },
    });
  }

  return result;
};



export const getAllUser=async ()=>{
  const admin = await getCurrentAdmin();
  if (!admin) {
    throw new Error("Admin not found for the current user.");
  }

  const allUser=await db.user.findMany({
    where:{
    adminId:admin.id,
    }
  })
  return allUser
}

export const getCurrenUser=async (userId) =>{
  const currentUser=db.user.findUnique({
where:{
  id:userId,
}
  })
  return currentUser;
}

// export const upsertPremisson=async ()=>{
//   const updatePremisson=await db.premisson.update({
//     where
//   })}
// }