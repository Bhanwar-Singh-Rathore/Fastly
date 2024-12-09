import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center md:mt-40 ">
      {children}
    </div>
  )
}

export default AuthLayout
