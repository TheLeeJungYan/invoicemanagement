import React from 'react'
import Sidebar from '@/components/sidebar'
const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="flex h-full flex-1">
        <Sidebar/>
        <div>{children}</div>
    </div>
 
  )
}

export default layout