import { CardType } from './cardtypes'

function CardItem({ stageStatus, stage }: CardType) {
    return (
        <div className="mx-1 my-1 w-52 py-2 shadow-lg rounded flex flex-col justify-center items-center bg-white">
            <h1 className="text-blue-900 font-black text-xl">{stageStatus}</h1>
            <p className="text-slate-700 font-medium text-sm">{stage}</p>
        </div>
    );
}

export default CardItem;