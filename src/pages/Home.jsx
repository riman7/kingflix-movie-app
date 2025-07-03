import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard"
import MainLayout from "../layout/MainLayout";

const Home = () =>{
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [allMovies, setAllMovies] = useState([]);

    useEffect(()=>{
        const fetchMovies = async () =>{
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API}`
                }};
            const url1 = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
            const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

            // fetch(url1, options)
            //     .then(res=> res.json())
            //     .then((data)=>{
            //         setPopular(data.results);})
            //     .catch(err => console.error(err));
            try{
                const res1 = await fetch(url1, options);
                const data1 = await res1.json();
                setPopular(data1.results);

                const res2 = await fetch(url2, options);
                const data2 = await res2.json();
                setTopRated(data2.results);
            }
            catch(err){
                console.error("Failed to fetch movies:", err);
            }
        }
        fetchMovies();
    }, [])
    return(
        <MainLayout>
            <h2 className="text-white text-4xl mt-4 ">Popular</h2>
            <div className="mt-4 flex overflow-x-auto gap-4 scroll-container">
                {
                    popular.map((movie) => {
                                return ( 
                                    <MovieCard movie={movie} />
                                );
                        })
                }
            </div>
            <h2 className="text-white text-4xl mt-4 font-mono">Top Rated</h2>
            <div className="mt-4 flex overflow-x-auto gap-4 scroll-container">
                {
                    topRated.map((movie) => {
                                return ( 
                                    <MovieCard movie={movie} />
                                );
                        })
                }
            </div>
            <h2 className="text-white text-4xl mt-4">All Movies: Enjoy Unlimited Movies</h2>
        </MainLayout>
        
    )
}
export default Home