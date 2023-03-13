
function Notification() {

    const notification = {
        critical: 6,
        tripid: 19892244,
        source: "PL FRANKFORT EAST IN",
        trailerid: 32302,
        sourceid: 232
    }

    return (
        <div>
            <p className="text-base font-bold text-indigo-800">Notification</p>
            <div className="py-4 ">
                <p className="text-base text-black">Today</p>
                <div className="py-4 flex">
                    <div className="w-6 h-6 p-1 bg-red-50 rounded-full flex justify-center items-center">
                        <svg className="w-4 h-4 fill-current text-red-500 justify-center items-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" /></svg>
                    </div> <p className="mx-2 text-sm text-blue-500">{notification.critical} Critical load status </p>
                </div><hr />
                <div className="py-4 flex">
                    <div className="w-6 h-6 p-1 bg-green-50 rounded-full flex justify-center items-center">
                        <svg className="w-6 h-6 justify-center items-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="green" > <path d="M4.5 12.75l6 6 9-13.5" /> </svg>
                    </div>
                    <p className="mx-2 text-sm">Alert message sent for load not started for Trip ID <span className="text-sm text-blue-500 underline">{notification.tripid}</span></p>
                </div><hr />
                <div className="py-4 flex">
                    <div className="w-6 h-6 p-1 bg-grey-50 rounded-full flex justify-center items-center">
                        <svg className="fill-grey h-6 w-6 text-slate-500  justify-center items-center" fill="grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
                    </div>
                    <p className="text-sm mx-2">Acknowledged message received for Trailer ID {notification.trailerid} from source ID {notification.sourceid} {notification.source}</p>
                </div><hr className="border-1 border-slate-400 border-solid" />

            </div>
            <div className="py-4 ">
                <div className="flex justify-between">
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"> <path d="M15.75 19.5L8.25 12l7.5-7.5" /> </svg>
                        <p className="text-base text-black">Yesterday</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>

                    <p className="text-base font-bold text-indigo-800 underline">Clear All</p>
                </div>
                <div className="py-4 flex">
                    <div className="w-6 h-6 p-1 bg-green-50 rounded-full flex justify-center items-center">
                        <svg className="w-6 h-6 justify-center items-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="green" > <path d="M4.5 12.75l6 6 9-13.5" /> </svg>
                    </div> <p className="mx-2 text-sm">{notification.critical} Critical load status </p>
                </div><hr />
                <div className="py-4 flex">
                    <div className="w-6 h-6 p-1 bg-green-50 rounded-full flex justify-center items-center">
                        <svg className="w-6 h-6 justify-center items-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="green" > <path d="M4.5 12.75l6 6 9-13.5" /> </svg>
                    </div>
                    <p className="mx-2 text-sm">Alert message sent for load not started for Trip ID {notification.tripid}</p>
                </div><hr />
                <div className="py-4 flex">
                    <div className="w-6 h-6 p-1 bg-green-50 rounded-full flex justify-center items-center">
                        <svg className="w-6 h-6 justify-center items-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="green" > <path d="M4.5 12.75l6 6 9-13.5" /> </svg>
                    </div>
                    <p className="text-sm mx-2">Acknowledged message received for Trailer ID {notification.trailerid} from source ID {notification.sourceid} {notification.source}</p>
                </div>

            </div>
        </div>
    )
}

export default Notification;
