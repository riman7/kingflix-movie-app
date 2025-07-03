const MovieCard = ({movie}) =>{
    return(
        <div className="border-1 border-[#989696] flex-none w-50 px-2 pt-2 pb-4 rounded-xl">
            <img className="w-45 m-auto border-1 border-[#989696] rounded-xl" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className=" text-white text-center">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-sm text-gray-400">{movie.release_date}</p>
                <p className="text-yellow-400 font-bold">⭐ {movie.vote_average}/10</p>
            </div>
        </div>
    )
}
export default MovieCard