import React, { useState } from "react"
import { Rotate as Hamburger } from 'hamburger-react'


const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    
    <div className="h-screen flex">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div
        className={`z-30 inset-y-0 left-0 h-64 w-64  overflow-auto lg:static  lg:inset-auto lg:translate-x-0 transform ${
          isOpen
            ? "translate-x-0 ease-out transition-medium"
            : "-translate-x-full ease-in transition-medium"
        }`}
        >
        
      </div>
    </div>
  );
};

export default Sidebar;


