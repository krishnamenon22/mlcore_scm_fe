import React from "react";
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';

function Header() {
  return (
    <div className="bg-themeBlue3 px-4 py-3 flex items-center w-full">
      <div className="flex items-center w-[50%]">
        <div className="text-2xl text-white">SENSE</div>
      </div>
      <div className="flex items-center w-[50%] justify-end px-3 pr-5">
        <div className="float-right flex gap-4">
          <div className="cursor-pointer">
            <StarIcon sx={{ color: "white" }} />
          </div>
          <div className="cursor-pointer">
            <NotificationsIcon sx={{ color: "white" }} />
          </div>
          <div className="cursor-pointer">
            <HelpIcon sx={{ color: "white" }} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;