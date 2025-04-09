import React from 'react'
import Logo from '@/components/logo'
const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="min-h-screen w-full flex-1 flex items-center justify-center bg-gray-50">
        <div className="absolute top-[20px] left-[10px]">
            <Logo/>
        </div>
        {children}
    </div>
  )
}

export default Layout