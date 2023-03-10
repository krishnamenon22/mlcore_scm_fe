import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { CardProfileObject } from 'pages/dashboard/userprofile/types';

function CardProfile({ username, userid, gender, dob, location, language, phone, email }: CardProfileObject) {
    return (
        <div className="w-full h-full p-2 px-4 rounded overflow-hidden shadow-lg bg-white" >
            <div className="my-2 mx-2  flex justify-between">
                <div><span className='text-lg pb-3 font-bold'>User Profile</span><EditOutlinedIcon color='primary' sx={{ width: 15, height: 15, marginLeft: 2 }} /><span className='text-xs pb-2 text-blue-600 underline'>Edit</span></div>
                <div className='flex justify-center'><SettingsOutlinedIcon fontSize='medium' sx={{ paddingTop: 0.2, color: '#1e40af' }} /><span className='text-base pb-3 text-blue-800 flex justify-center'>Settings</span></div>
            </div>
            <div className="my-2 mx-2 grid grid-cols-6 gap-8">
                <div ><span className='text-sm text-slate-500'>User Name:</span> <span className='text-sm font-bold'>{username}</span></div>
                <div><span className='text-sm text-slate-500'>User ID:</span> <span className='text-sm font-bold'>{userid}</span></div>
                <div><span className='text-sm text-slate-500'>Gender:</span> <span className='text-sm font-bold'>{gender}</span></div>
                <div><span className='text-sm text-slate-500'>Date of Birth:</span> <span className='text-sm font-bold'>{dob}</span></div>
                <div><span className='text-sm text-slate-500'>Location:</span> <span className='text-sm font-bold'>{location}</span></div>
                <div><span className='text-sm text-slate-500'>Language:</span> <span className='text-sm font-bold'>{language}</span></div>
                <div className="col-span-2"><span className='text-sm text-slate-500'>Phone number:</span> <span className='text-sm font-bold'>{phone}</span></div>
                <div className="col-span-2"><span className='text-sm text-slate-500'>Email ID:</span> <span className='text-sm font-bold'>{email}</span></div>

            </div>
            <div className="my-2 mx-2 flex justify-end">
                <button type="button" className="bg-indigo-900 hover:bg-blue-700 text-xs font-medium uppercase text-white font-bold py-2 px-4 rounded">
                    Save & Continue
                </button>
            </div>
        </div>
    );
}

export default CardProfile;