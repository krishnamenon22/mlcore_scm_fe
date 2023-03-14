import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HelpIcon from '@mui/icons-material/Help'
import { useAppSelector } from 'hooks/store-hooks'
import SubscribedTrips from './SubscribedTrips'
import SlideOver from "./SlideOver";
import Notification from "./Notification";

function Header() {
  const [showSlider, setShowSlider] = useState<boolean>(false)
  const [notificationSlider, setNotificationSlider] = useState<boolean>(false)
  const {trips, tripStages} = useAppSelector((state)=> state.inbound);
  return (
    <div className="bg-white px-4 py-3 flex items-center w-full">
      <div className="flex items-center w-[50%]">
        <div className="text-3xl text-themeBlue3 tracking-widest">SENSE</div>
      </div>
      <div className="flex items-center w-[50%] justify-end px-3 pr-5">
        <div className="float-right flex gap-4">
          <div className="cursor-pointer">
            <StarIcon sx={{ color: "#003668" }} onClick={() => setShowSlider(true)} />
            {showSlider && <SubscribedTrips setShowSlider={setShowSlider} trips={trips} tripStages={tripStages}/>}
          </div>
          <div className="cursor-pointer">
            <NotificationsIcon sx={{ color: "#003668" }} onClick={() => setNotificationSlider(true)} />
            {
              notificationSlider && (
                <SlideOver closeOnClick={() => setNotificationSlider(false)} >
                  <Notification />
                </SlideOver>
              )
            }
          </div>
          <div className="cursor-pointer">
            <HelpIcon sx={{ color: "#003668" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
