import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

import { SidebarProps } from "./types";

function Sidebar({ menuItems, initialOpenState }: SidebarProps) {
  const [open, setOpen] = useState<boolean>(initialOpenState);
  return (

    <div
      className={`bg-themeBlue3 min-h-screen ${open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative h-[90vh]">
        {menuItems?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={`${menu?.name}-${i + 1}`}
            className={` ${menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${menu?.isBottom ? "mt-[auto]" : ""}`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
            >
              {menu?.name}
            </h2>
            {
              !menu?.isBottom && (
                <h2
                  className={`${open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              )
            }

          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;