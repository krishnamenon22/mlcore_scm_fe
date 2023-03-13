import React from 'react'
import {TripStagesDataObject} from "pages/dashboard/types";

type AlertsProp={
  setShowSlider:(flag:boolean)=>void
  tripStages: TripStagesDataObject
}

function Alerts({setShowSlider, tripStages} :AlertsProp)
{      let delayedCount=0;
       const tripsCount=Object.keys(tripStages).length;
       for(let i=1;i<=tripsCount;i+=1){
       if(tripStages[i].status==="Delayed") delayedCount+=1;
       }
       
       return(
        <div className="flex items-center mt-6">
        <span className="text-rose-600 text-sm mr-2 font-medium font-semibold">Alerts:</span>
        <div className="flex justify-between w-96 bg-white .border-red-300 p-0.5 px-4 rounded border-t-2 border-rose-600	">
            <span className="text-sm text-rose-600"> <span className="font-semibold">{delayedCount}</span> Critical Items</span>
        <span
         className='text-sky-700 text-sm underline cursor-pointer'
         onClick={() => setShowSlider(true)}
        >Take Action</span>
        </div>
        </div>
    );
}

export default Alerts;