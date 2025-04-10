import React from "react";
import Logo from "@/components/logo";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex-1 flex items-center justify-center bg-gray-50">
      <div className="fixed top-0 left-0 w-full px-6 py-4">
        <Logo />
      </div>
      {children}
    </div>
  );
};

export default Layout;
