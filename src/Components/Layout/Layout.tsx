import React from "react";

import Footer from "./Footer";
import MobileNav from "./MobileNav";

const NavLinks = [
  { title: "Home", Url: "/", children: [] },
  {
    title: "Departures",
    Url: "/page2",
  },
];

const Layout = ({ title, children }) => {
  return (
    <div className="max-w-maxWidth mx-auto text-center">
      <MobileNav mobileitems={NavLinks} />
      {children}

      <Footer getInTouchLinks={""} pages={""} />
    </div>
  );
};

export default Layout;
