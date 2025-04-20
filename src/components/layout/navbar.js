"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Drawer } from "antd";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const items = [
    {
      label: "Home",
      route: "/",
      key: "1",
    },
    {
      label: "About",
      route: "/about",
      key: "2",
    },
    {
      label: "Contact",
      route: "/contact",
      key: "3",
    },
  ];

  useEffect(() => {
    onClose();
  }, [pathname]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex items-center md:gap-[9rem] sticky top-0 right-0 w-full transition-all duration-300 z-[1000] bg-white border-b border-b-gray-300">
      <div className="p-4 cursor-pointer" onClick={showDrawer}>
        <Image
          src="./images/menu.svg"
          height={24}
          width={24}
          alt="menu"
          className="w-[1.5rem]"
        />
      </div>
      <Drawer
        title={
          <Image
            src="./images/logo.svg"
            height={24}
            width={24}
            alt="menu"
            className="w-[8.597rem]"
          />
        }
        placement={"left"}
        closable={true}
        onClose={onClose}
        open={open}
        key={"left"}
        width={"20rem"}
      >
        <div className="flex flex-col gap-2">
          {items?.map((item) => (
            <Link href={item?.route} key={item?.key}>
              <div
                className={`text-primary hover:bg-lightgray hover:font-semibold p-2 rounded-xl ${
                  pathname === item?.route && "bg-lightgray font-semibold"
                }`}
              >
                {item?.label}
              </div>
            </Link>
          ))}
        </div>
      </Drawer>
      <Link href={"/"}>
        <Image
          src="./images/logo.svg"
          height={24}
          width={24}
          alt="menu"
          className="w-[8.597rem]"
        />
      </Link>
    </div>
  );
};

export default Navbar;
