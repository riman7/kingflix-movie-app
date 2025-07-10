import { useNavigate } from "react-router"
const MovieCard = ({movie}) =>{
    const navigate = useNavigate()
    return(
        <div className=" bg-[#1b1d2b]
                        border-1 border-[#525252] rounded-xl z-100
                        flex-none w-[48vw] md:w-[15.5%] px-2 pt-2 pb-4 
                        cursor-pointer
                        ransition duration-300 ease-in-out
                        hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)]"
                        
             onClick={()=> navigate(`/movie/${movie.id}`)}>
            <img className="w-45 m-auto 
                        border-1 border-[#424242] rounded-xl" 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className=" text-white text-center
                            flex flex-col item-center justify-around
                            min-h-25
                            pt-2
                            ">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-sm text-gray-400">{movie.release_date}</p>
                <p className="text-yellow-400 font-bold">⭐ {Math.round(movie.vote_average * 10) / 10}/10</p>
            </div>
        </div>
    )
}
export default MovieCard