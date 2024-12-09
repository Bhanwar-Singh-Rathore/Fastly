
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { Toaster } from 'sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body
        
      > <Toaster />
      
        {children}
      </body>
    </html>
      </ClerkProvider>
  );
}
