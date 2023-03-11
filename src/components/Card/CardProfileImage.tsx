import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { CardProfileImageObject } from 'pages/dashboard/userprofile/types';
import profile from '../../assets/images/profile.png'



function CardProfileImage({ username }: CardProfileImageObject) {
  return (
    <div className="w-50 h-full rounded overflow-hidden flex flex-col justify-center items-center shadow-lg bg-white">
      <div><img className="w-20 py-2" src={profile} alt="Profile" /></div>
      <div><EditOutlinedIcon color='primary' sx={{ width: 15, height: 15, }} /><span className='text-xs pb-2 text-blue-600 underline'>Edit</span></div>
      <div><span className='text-sm font-bold'>{username}</span></div>
    </div>
  );
}

export default CardProfileImage;