import { HeartIcon, HomeIcon, TvIcon, BookmarkIcon, BellIcon, ClockIcon, CalendarDaysIcon} from '@heroicons/react/24/solid'
import logo from '../assets/logo.png'
import Button from './Button'
import { useNavigate } from "react-router";
const Sidebar =()=>{
    const navigate = useNavigate();
    return(
        <div className="text-zinc-200 min-w-60 border-r-1 border-r-[#34321f] py-2 px-4
        h-lvh 
        flex flex-col justify-between
        ">
            <img className='w-30 mx-auto' src={logo} alt="Company Logo" />
            <div className='space-y-3'>
                <p className='text-sm text-zinc-400 pl-3'>Navigation</p>
                <div className='flex space-x-4 items-center cursor-pointer pl-3 border-l-2 border-amber-400 text-amber-400' onClick={() => navigate('/')}><HomeIcon className='size-5 text-amber-400'/> <span>Home</span></div>
                <div className='flex space-x-4 items-center cursor-pointer pl-3 '><BookmarkIcon className='size-5' /> <span>WatchList</span></div>
                <div className='flex space-x-4 items-center cursor-pointer pl-3'><TvIcon className='size-5' /> <span>Watched</span></div>
                <div className='flex space-x-4 items-center cursor-pointer pl-3'><HeartIcon className='size-5' /> <span>Recommended</span></div>
            </div>
            <div className='space-y-3'>
                <p className='text-sm text-zinc-400 pl-3'>Alerts</p>
                <div className='flex space-x-4 items-center cursor-pointer pl-3'><BellIcon className='size-5' /> <span>Notification</span></div>
                <div className='flex space-x-4 items-center cursor-pointer pl-3'><ClockIcon className='size-5' /> <span>Reminder</span></div>
                <div className='flex space-x-4 items-center cursor-pointer pl-3'><CalendarDaysIcon className='size-5' /> <span>Upcomming</span></div>
            </div>
            <div>
                <p className='text-sm text-zinc-400'>Details:</p>
                <p className='text-green-300'>53 Watched</p><p className='text-red-300'>72 on Watch-List</p>
            </div>
            <Button>
                Log in
            </Button>
            {/* <button className='w-full cursor-pointer rounded-sm
                            bg-[#ffcc00] hover:bg-[#a9a686] text-[#28273d] 
                            font-bold text-[18px] p-1
                            ease-in-out duration-500'>
                Log in
            </button> */}
        </div>
    )
}
export default Sidebar