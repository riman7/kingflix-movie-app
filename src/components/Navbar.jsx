import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState} from "react";
import { useNavigate } from "react-router";
import logo from '../assets/logo.png'
const Navbar =({isOpen, setIsOpen})=>{
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit= (e) =>{
        e.preventDefault();
        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        setSearchTerm("");
    }
    return(
        <div>
            <div className='flex justify-between items-center md:hidden py-2 px-4'>
                <img src={logo} alt="logo" className='w-15' />
                {isOpen?<XMarkIcon className='size-8 text-amber-400' onClick={() => setIsOpen(!isOpen)} />:
                        <Bars3Icon className='size-8 text-amber-400' onClick={() => setIsOpen(!isOpen)} />}
            </div>
            <header className="text-white flex pt-3">
                <div className="relative w-full flex pl-3 md:justify-center">
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder='Search'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='outline-none border-1 rounded-3xl px-3 py-1 border-[#383838] w-90 max-w-[80vw]'
                        />
                        <button type='submit'>

                        </button>
                    </form>
                    

                    <div>
                        <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            alt="Profile"
                            className="w-9 h-9 rounded-full object-cover border-2 border-amber-400
                                    absolute right-4 top-0
                                        "
                        />
                    </div>
                </div>
            </header>
        </div>
        
    )
}
export default Navbar