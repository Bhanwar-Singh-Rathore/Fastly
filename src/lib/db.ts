import { PrismaClient } from '@prisma/client'

declare global {
  let prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

// Assigning the PrismaClient to globalThis in non-production environments for singleton pattern
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db



// // db.ts or any appropriate file
// import { PrismaClient } from '@prisma/client'

// // Use the global `prisma` instance or initialize a new one if it's not present
// export const db = globalThis.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== 'production') {
//   globalThis.prisma = db
// }
