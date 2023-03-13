/* eslint-disable camelcase */
import SlideOver from './SlideOver'

type TakeActionsProp = {
  setShowSlider: (flag: boolean) => void
}

function TakeActions({ setShowSlider }: TakeActionsProp) {
  const TakeActions = [
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
      id: 5,
      trip_id: 41969087,
      load_id: 63796534,
      source: 'PL FRITO LAY PL CAMBRIDGE ON',
      destination: 'RP FLC RP ALLIANCE BRAMPTON',
      planned_start: '2023-01-17 11:05:00',
      is_subscribed: false,
    },
    {
      id: 10,
      trip_id: 42027647,
      load_id: 63870320,
      source: 'PL FRITO LAY PL KILLINGLY CT',
      destination: 'DC FRITO LAY DC N NEW JERSEY MEGA',
      planned_start: '2023-01-23 17:12:00',
      is_subscribed: false,
    },
    {
      id: 13,
      trip_id: 41972306,
      load_id: 63790752,
      source: 'PL FRITO LAY PL KERN CA',
      destination: 'PL FRITO LAY PL CUCAMONGA CA',
      planned_start: '2023-01-18 23:30:00',
      is_subscribed: false,
    },
  ]

  const component = (
    <div>
      <h1 className='mb-4 font-semibold'>Take Actions</h1>
      {TakeActions.map((trips) => (
        <>
          <div className='p-2 flex'>
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

export default TakeActions
