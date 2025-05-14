import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex-1 flex items-center justify-center bg-gray-50">
      {children}
    </div>
  );
};

export default Layout;
