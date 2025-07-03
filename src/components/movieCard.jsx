const MovieCard = ({movie}) =>{
    return(
        <div className=" bg-[#1b1d2b]
                        border-1 border-[#525252] rounded-xl
                        flex-none w-50 px-2 pt-2 pb-4 
                        cursor-pointer
                        ">
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
                <p className="text-yellow-400 font-bold">⭐ {movie.vote_average}/10</p>
            </div>
        </div>
    )
}
export default MovieCard