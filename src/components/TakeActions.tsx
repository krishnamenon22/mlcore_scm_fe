/* eslint-disable camelcase */
import _ from "lodash";
import { InboundObject, TripStagesDataObject } from "pages/dashboard/types";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import SlideOver from './SlideOver'

type TakeActionsProp = {
  setShowSlider: (flag: boolean) => void;
  trips: InboundObject[];
  tripStages: TripStagesDataObject;
}

function TakeActions({ setShowSlider ,trips , tripStages}: TakeActionsProp) {
  
  const partitions = _.partition(trips, (trip) => tripStages[trip.id]?.status === "Delayed");
  const TakeActions = partitions[0];

  const component = (
    <div>
      <h1 className='mb-4 font-semibold'>Take Actions</h1>
      <p className="my-2"><span className="text-sm">Today</span> <span className="text-sm text-rose-600 font-semibold">{TakeActions.length} Critial Status</span></p>
      {TakeActions.map((trip) => (
        <div key={trip.id}>
          <div className='p-2 flex '>
          <div className="w-6 h-6 p-1 bg-red-50 rounded-full flex justify-center items-center">
          <svg className="w-4 h-4 fill-current text-red-500 justify-center items-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" /></svg>
          </div>
            <div className="px-1">
              <p className='p-1 text-sm text-slate-500'>Trip ID: {trip.trip_id} <span>
              {
              trip.is_subscribed ? (
                <StarIcon sx={{ color: "#003668", fontSize: "1.5rem" }} />
              ) : (
                <StarBorderIcon sx={{ color: "#003668", fontSize: "1.5rem" }} />
              )
              }
              </span></p>  
              <p className='p-1 text-sm text-slate-500'>Source: {trip.source}</p>
              <p className='p-1 text-sm text-slate-500'>Destination: {trip.destination}</p>
            </div>
            <div>
            <span className="text-sm bg-red-300 ml-8 p-1">{tripStages[trip.id].status}</span>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )

  return (
    <SlideOver closeOnClick={() => setShowSlider(false)}>{component}</SlideOver>
  )
}

export default TakeActions
