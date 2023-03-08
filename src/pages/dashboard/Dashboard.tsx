import { useEffect } from 'react';
import CardItem from 'components/Card/CardItem'
import TripsTable from 'components/TripsTable';

import { useAppSelector, useAppDispatch } from "hooks/store-hooks";
import { setStagesInbound, setTripsInbound, setTripStagesInbound } from 'store/slice/inboundSlice';
import { cards, StagesData, InboundData, TripStagesData } from './dummyData';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { stages, trips, tripStages, } = useAppSelector((state) => state.inbound);

  const setDummyData = () => {
    dispatch(setStagesInbound(StagesData));
    dispatch(setTripsInbound(InboundData));
    dispatch(setTripStagesInbound(TripStagesData));
  }

  useEffect(() => {
    setDummyData();
  }, []);

  return (
    <div className="">
      <div className="min-h-[110vh]">
        <p className='text-xl pb-3'>
          Load Overview
        </p>
        <div className="flex justify-between">
          {cards.map((card) => <CardItem stageStatus={card.number} stage={card.stage} />)}
        </div>
        <div className="pt-5 pb-4">
          <TripsTable stages={stages} trips={trips} tripStages={tripStages} />
        </div>
      </div>
    </div>
  );
}
