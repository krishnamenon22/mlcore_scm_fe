import StarIcon from '@mui/icons-material/Star'
import SlideOver from './SlideOver'

type SubscribedTripsProp = {
  setShowSlider: (flag: boolean) => void
}

function SubscribedTrips({ setShowSlider }: SubscribedTripsProp) {
  const subscribedTrips = [
    {
      id: 2,
      trip_id: 41941116,
      load_id: 63746108,
      source: 'RP FRITO LAY RP TECH PKG NORTH PA',
      destination: 'DC FRITO LAY DC CRANBERRY PA',
      planned_start: '2023-01-13 07:38:00',
      is_subscribed: true,
    },
    {
      id: 4,
      trip_id: 41911487,
      load_id: 63654363,
      source: 'RP FL RP QUAL PAC KANSAS CITY',
      destination: 'DC FRITO LAY DC KANSAS CITY',
      planned_start: '2023-01-12 06:16:00',
      is_subscribed: true,
    },
    {
      id: 8,
      trip_id: 41977067,
      load_id: 63794579,
      source: 'PL FRITO LAY PL ORLANDO REG WHSE',
      destination: 'DC FRITO LAY DC JACKSONVILLE FL',
      planned_start: '2023-01-18 05:01:00',
      is_subscribed: true,
    },
  ]

  const component = (
    <div>
      <h1 className='text-indigo-900 mb-4 font-semibold'>Subscribed Trips</h1>
      {subscribedTrips.map((trips) => (
        <>
          <div className='p-2 flex'>
            <StarIcon sx={{ color: '#000080' }} className='p-0.5' />
            <div>
              <p className='p-1 text-sm text-slate-500'>Trip ID: {trips.trip_id}</p>
              <p className='p-1 text-sm text-slate-500'>Source: {trips.source}</p>
              <p className='p-1 text-sm text-slate-500'>
                Destination: {trips.destination}
              </p>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  )

  return (
    <SlideOver closeOnClick={() => setShowSlider(false)}>{component}</SlideOver>
  )
}

export default SubscribedTrips
