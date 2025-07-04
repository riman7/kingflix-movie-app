import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MainLayout from "../layout/MainLayout";
const MovieDetails = () =>{
    const { id } = useParams();
    console.log(id)
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
                {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API}`
                }
                }
            );
            const data = await res.json();
            setMovie(data);
        };
        fetchMovie();
        }, [id]);

    if (!movie) {
        return (
            <MainLayout>
            <p className="text-white p-6">Loading movie details...</p>
            </MainLayout>
        );
    }
    return (
        <MainLayout>
        <div className="text-white p-6 flex gap-8">
            <img
            className="w-64 rounded-2xl"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            />
            <div>
                <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                <p className="mb-4">{movie.overview}</p>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Rating:</strong> {movie.vote_average}</p>
                <p><strong>Runtime:</strong> {movie.runtime} minutes</p>

                <div className="flex mt-4 space-x-4 font-bold text-zinc-800">
                    <div className="bg-amber-300 rounded-3xl py-1 px-3 cursor-pointer hover:bg-amber-100 ease-in-out duration-300">Add to Watch-list</div>
                    <div className="bg-amber-300 rounded-3xl py-1 px-3 cursor-pointer hover:bg-amber-100 ease-in-out duration-300">Watched</div>
                </div>
            </div>
        </div>
        </MainLayout>
    );
}
export default MovieDetails