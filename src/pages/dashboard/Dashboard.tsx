import CardItem from 'components/Card/CardItem'

const cards = [{ number: 23, stage: "Pick Start" },
{ number: 33, stage: "Pick End" },
{ number: 18, stage: "Load Completed" },
{ number: 3, stage: "Pick Tracking Depart" },
{ number: 9, stage: "Drop Tracking Arrival" },
{ number: 10, stage: "Unload" }]

export default function Dashboard() {
  return (
    <div className="">
      <div className="min-h-[110vh]">
        Load Overview
        <div className="flex justify-between">
          {cards.map((card) => <CardItem stageStatus={card.number} stage={card.stage} />)}
        </div>
        Dashboard Test
      </div>
    </div>
  );
}
