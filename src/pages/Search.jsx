import { useEffect, useState} from "react";
import MovieCard from "../components/movieCard"
import { useSearchParams } from "react-router"
import MainLayout from "../layout/MainLayout";
import Button from "../components/Button";
import { useNavigate } from "react-router";

const Search = () =>{
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    
    useEffect(()=>{
        const fetchResult = async()=>{
            setLoading(true);
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API}`
                }};
            const url = `https://api.themoviedb.org/3/search/movie?query=${query.replace(/ /g, "+")}`
            try{
                const res = await fetch(url, options)
                const data = await res.json()
                setResults(data.results)
            }
            catch(err){
                console.log(err)
            }
            setLoading(false); 
        }
        fetchResult();
    }, [])
    return (
        <MainLayout>
            <div className="text-white">
                <div className="flex justify-between pr-10 py-5">
                    <p className="py-3 text-3xl">Result for: {query}</p>
                    <Button className="w-30" onClick={() =>  navigate('/')}>Go Back</Button>
                </div>
                
                <div className=" flex flex-wrap gap-4">
                    {results.map((movie)=><MovieCard movie={movie} />)}
                </div>
            </div>

        </MainLayout>
        
        
    )
}

export default Search