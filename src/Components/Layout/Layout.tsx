import React from "react";


import Footer from "./Footer";
import MobileNav from "./MobileNav";


const NavLinks = [
  { title: "Home", Url: "/", children: [] },
  {
    title: "Services",
    Url: "/",
    children: [
      { title: "Development", Url: "/development" },
      { title: "Maintenence", Url: "/maintenance" },
      { title: "Content Managment", Url: "/content-management" },
    ],
  },
]

const Layout = ({ title, children }) => {
  return (
    <div className="max-w-maxWidth mx-auto">
   
      <MobileNav mobileitems={NavLinks} />
      {children}
    
      <Footer getInTouchLinks={''} pages={''} />
    </div>
  );
};

export default Layout;
