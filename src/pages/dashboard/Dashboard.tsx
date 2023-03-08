import CardItem from 'components/Card/CardItem'
import TripsTable from 'components/TripsTable';

import { useAppSelector } from "hooks/store-hooks";

const cards =
  [
    { number: 23, stage: "Pick Start" },
    { number: 33, stage: "Pick End" },
    { number: 18, stage: "Load Completed" },
    { number: 3, stage: "Pick Tracking Depart" },
    { number: 9, stage: "Drop Tracking Arrival" },
    { number: 10, stage: "Unload" }
  ];

export default function Dashboard() {
  const { stages, trips, tripStages, } = useAppSelector((state) => state.inbound);

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
