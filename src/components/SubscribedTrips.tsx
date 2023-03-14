import StarIcon from '@mui/icons-material/Star'
import { InboundObject, TripStagesDataObject } from "pages/dashboard/types";
import SlideOver from './SlideOver'


type SubscribedTripsProp = {
  setShowSlider: (flag: boolean) => void;
  trips: InboundObject[];
  tripStages: TripStagesDataObject;
}

function SubscribedTrips({ setShowSlider, trips, tripStages}: SubscribedTripsProp) {
  const subscribedTrips = trips.filter((trip)=>trip.is_subscribed);

  const component = (
    <div>
      <h1 className='text-indigo-900 mb-4 font-semibold'>Subscribed Trips</h1>
      {subscribedTrips.map((trips) => (
        <div key={trips.id}>
          <div className='p-2 flex'>
            <StarIcon sx={{ color: '#000080' }} className='p-0.5' />
            <div>
              <p className='p-1 text-sm text-slate-500'>Trip ID: {trips.trip_id}</p>
              <p className='p-1 text-sm text-slate-500'>Source: {trips.source}</p>
              <p className='p-1 text-sm text-slate-500'>
                Destination: {trips.destination}
              </p>
            <span className={tripStages[trips.id].status ==="Delayed" ? "text-sm bg-red-300 p-1" : "text-sm bg-green-500 p-1"}>{tripStages[trips.id].status}</span>
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

export default SubscribedTrips
