import { HeartIcon, HomeIcon, TvIcon, BookmarkIcon, BellIcon, ClockIcon, CalendarDaysIcon} from '@heroicons/react/24/solid'
import logo from '../assets/logo.png'
import Button from './Button'
import { useNavigate, useLocation } from "react-router";
const Sidebar =()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    const activeStyle = 'border-l-2 border-amber-400 text-amber-400';
    return(
        <div className="text-zinc-200 min-w-60 border-r-1 border-r-[#34321f] bg-[#140e1b]
                        py-2 px-4
                        h-lvh 
                        flex flex-col justify-between 
                        top-0 left-0 
        ">
            <img className='w-30 mx-auto' src={logo} alt="Company Logo" />

            <div className='space-y-3'>

                <p className='text-sm text-zinc-400 pl-3'>Navigation</p>

                <div 
                className={`flex space-x-4 items-center cursor-pointer pl-3
                ${isActive('/') ? activeStyle : ''}`} 
                onClick={() => navigate('/')}>
                    <HomeIcon className='size-5'/>
                    <span>Home</span>
                </div>

                <div 
                className={`flex space-x-4 items-center cursor-pointer pl-3
                ${isActive('/watchlist') ? activeStyle : ''}`}
                onClick={() => navigate('/watchlist')}>
                    <BookmarkIcon className='size-5' />
                    <span>WatchList</span>
                </div>

                <div 
                className={`flex space-x-4 items-center cursor-pointer pl-3
                ${isActive('/watched') ? activeStyle : ''}`}
                onClick={() => navigate('/watched')}>
                    <TvIcon className='size-5' />
                    <span>Watched</span>
                </div>

                <div 
                className={`flex space-x-4 items-center cursor-pointer pl-3
                ${isActive('/recommended') ? activeStyle : ''}`}
                onClick={() => navigate('/recommended')}>
                    <HeartIcon className='size-5' />
                    <span>Recommended</span>
                </div>

            </div>

            <div className='space-y-3'>

                <p className='text-sm text-zinc-400 pl-3'>Alerts</p>

                <div 
                className={`flex space-x-4 items-center cursor-pointer pl-3
                ${isActive('/notification') ? activeStyle : ''}`}
                onClick={() => navigate('/notification')}>
                    <BellIcon className='size-5' />
                    <span>Notification</span>
                </div>

                <div 
                className={`flex space-x-4 items-center cursor-pointer pl-3
                ${isActive('/reminder') ? activeStyle : ''}`}
                onClick={() => navigate('/reminder')}>
                    <ClockIcon className='size-5' />
                    <span>Reminder</span>
                </div>

                <div 
                className={`flex space-x-4 items-center cursor-pointer pl-3
                ${isActive('/upcoming') ? activeStyle : ''}`}
                onClick={() => navigate('/upcoming')}>
                    <CalendarDaysIcon className='size-5' />
                    <span>Upcomming</span>
                </div>

            </div>

            <div>
                <p className='text-sm text-zinc-400'>Details:</p>
                <p className='text-green-300'>53 Watched</p>
                <p className='text-red-300'>72 on Watch-List</p>
            </div>

            <Button onClick={() => navigate('/login')}>
                Log in
            </Button>

        </div>
    )
}
export default Sidebar