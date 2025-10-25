// src/components/htmlpage/Html.jsx
import React, { useState, useEffect } from "react";
import HtmSid from "../htmlpage/HtmSid";
import HtmMain from "../htmlpage/HtmMain";
import { MenuIcon } from "lucide-react";
import { X } from "lucide-react";
const Html = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // stop scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll again
    }
    // Cleanup on unmount
    return () => (document.body.style.overflow = "auto");
  }, [open]);
  return (
    <div className="mt-12 flex  lg:flex-row h-full w-full">
      <div
        className={`mt-3 ml-3 absolute lg:hidden ${
          open ? "hidden" : "block"
        } cursor-pointer  `}
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon />
      </div>
      <div
        className={`mt-3 ml-3 absolute lg:hidden ${
          open ? "block" : "hidden"
        } cursor-pointer `}
        onClick={() => {
          setOpen(false);
        }}
      >
        <X size={32} />
      </div>

      <HtmSid open={open} setOpen={setOpen} />

      <HtmMain />
    </div>
  );
};

export default Html;
