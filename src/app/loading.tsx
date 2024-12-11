

import { Loader } from 'lucide-react'
import React from 'react'

const LoadingAgencyPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
     <Loader className="animate-spin text-gray-500 w-8 h-8 mx-auto " />
    </div>
 
   )
}

export default LoadingAgencyPage
