import { useEffect, useState} from "react";
import MovieCard from "../components/movieCard"
import Search from "./Search";
import MainLayout from "../layout/MainLayout";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () =>{
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);

    const [allMovies, setAllMovies] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

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
                console.log(data1.results)

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
    const fetchAllMovies = async () =>{
        const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API}`
                }};
        const url = `https://api.themoviedb.org/3/discover/movie?page=${page}`
        try{
            const res = await fetch(url, options);
            const data = await res.json();
            setAllMovies((prev)=> {
                const existingIds = new Set(prev.map(movie => movie.id));
                const newMovies = data.results.filter(movie => !existingIds.has(movie.id));
                return [...prev, ...newMovies];
            });
            if (data.results.length === 0) {
                setHasMore(false);
            }
        }
        catch(err){
            console.log(err)
            setHasMore(false);
        }

    }
    useEffect(() => {
        fetchAllMovies();
        }, [page]);

    return(
        <MainLayout >
            <h2 className="text-white text-4xl mt-4 ">Popular</h2>
            <div className="mt-4 flex overflow-x-auto gap-4 scroll-container">
                {
                    popular.map((movie) => {
                                return ( 
                                    <MovieCard movie={movie} key={`popular-${movie.id}`} />
                                );
                        })
                }
            </div>
            <h2 className="text-white text-4xl mt-4 font-mono">Top Rated</h2>
            <div className="mt-4 flex overflow-x-auto gap-4 scroll-container">
                {
                    topRated.map((movie) => {
                                return ( 
                                    <MovieCard movie={movie} key={`toprated-${movie.id}`} />
                                );
                        })
                }
            </div>
            <h2 className="text-white text-4xl mt-4">All Movies: Enjoy Unlimited Movies Here</h2>
            <InfiniteScroll
                dataLength={allMovies.length} // This is important field to render the next data
                next={() => setPage((prev) => prev + 1)}
                hasMore={hasMore}
                loader={<h4 className="text-zinc-400 text-center">Loading...</h4>}
                endMessage={
                <p style={{ textAlign: "center", color: "#aaa" }}>
                    <b>Yay! You have seen it all.</b>
                </p>
                }
            >
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                    {allMovies.map((movie) => (
                        
                        <MovieCard movie={movie} key={`all-${movie.id}`} />
                    ))}
                </div>
            </InfiniteScroll>
        </MainLayout>
        
    )
}
export default Home