import React from "react";
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';

function Header() {
  return (
    <div className="bg-white px-4 py-3 flex items-center w-full">
      <div className="flex items-center w-[50%]">
        <div className="text-3xl text-themeBlue3">SENSE</div>
      </div>
      <div className="flex items-center w-[50%] justify-end px-3 pr-5">
        <div className="float-right flex gap-4">
          <div className="cursor-pointer">
            <StarIcon sx={{ color: "#003668" }} />
          </div>
          <div className="cursor-pointer">
            <NotificationsIcon sx={{ color: "#003668" }} />
          </div>
          <div className="cursor-pointer">
            <HelpIcon sx={{ color: "#003668" }} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;