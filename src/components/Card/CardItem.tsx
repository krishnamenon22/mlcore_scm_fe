import { CardObject } from 'pages/dashboard/types';

function CardItem({ number, stage }: CardObject) {
  return (
    <div className="mx-1 my-1 w-52 py-5 shadow-lg rounded flex flex-col justify-center items-center bg-white">
      <h1 className="text-themeBlue3 font-black text-2xl">{number}</h1>
      <p className="text-slate-700 font-medium text-[1rem] pt-2">{stage}</p>
    </div>
  );
}

export default CardItem;