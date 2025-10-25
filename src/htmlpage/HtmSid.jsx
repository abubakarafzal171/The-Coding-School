import React from "react";
import { Link } from "react-scroll";

const HtmSid = ({ open, setOpen }) => {
  return (
    <div
      className={`lg:w-[250px] lg:block lg:border-r lg:border-gray-700 
                lg:mt-20 lg:fixed lg:top-0 lg:left-0  lg:overflow-y-auto lg:bg-white lg:z-50 lg:h-[78vh] w-[300px] py-5 px-5 h-screen mt-10 absolute bg-gray-300 ${
                  open ? "block" : "hidden"
                }`}
    >
      <h1 className="font-semibold text-center text-lg text-blue-700">
        HTML COURSE OUTLINE
      </h1>
      <div className=" mt-5">
        <div className="flex flex-col gap-2 text-md font-semibold uppercase pl-4">
          <Link
            to={"introduction"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            {" "}
            HTML Introduction
          </Link>
          <Link
            to={"document"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            {" "}
            simple html document
          </Link>
          <Link
            to={"formatting"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            text formatting tags
          </Link>
          <Link
            to={"lists"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            Html lists
          </Link>
          <Link
            to={"others"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            some other tags
          </Link>
          <Link
            to={"img"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            Image and Iframe
          </Link>
          <Link
            to={"links"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            html links
          </Link>
          <Link
            to={"tables"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            html tables
          </Link>
          <Link
            to={"meta"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            Html media tags
          </Link>
          <Link
            to={"form"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            form and input tags
          </Link>
          <Link
            to={"semantic"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            html semantic tags
          </Link>
          <Link
            to={"seo"}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            HTml and seo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HtmSid;
