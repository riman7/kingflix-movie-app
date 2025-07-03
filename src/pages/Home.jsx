import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard"

const Home = () =>{
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API}`
                }};
        fetch(url, options)
            .then(res => res.json())
            .then(json => {console.log(json)
                return json
            })
            .then((data) => {
                setMovies(data.results);})
            .catch(err => console.error(err));

    }, [])
    return(
        <div>
            <h2 className="text-white text-4xl">Popular</h2>
            <div className="flex overflow-x-auto gap-4 ">
                {
                    movies.map((movie) => {
                                return ( 
                                    <MovieCard movie={movie} />
                                );
                        })
                }
            </div>

        </div>
    )
}
export default Home