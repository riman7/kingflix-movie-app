import Skeleton from 'react-loading-skeleton';
const Skeletion = () =>{
    return(
        <div className="bg-[#1b1d2b] border-1 border-[#525252] rounded-xl z-100
                    flex-none w-[48vw] md:w-[15.5%] px-2 pt-2 pb-4 
                    cursor-pointer
                    ransition duration-300 ease-in-out">
                {/* Poster Skeleton */}
                <Skeleton height={250} className="w-full border-1 border-[#424242] rounded-xl"
                baseColor="#2b2c37" 
                highlightColor="#3a3b4e" />

                {/* Text Skeleton */}
                <div className="pt-2 text-center">
                    <Skeleton height={20} width={`80%`} className="m-auto mb-2"
                    baseColor="#3C3658FF" 
                    highlightColor="#3a3b4e" /> {/* Title */}
                    <Skeleton height={15} width={`60%`} className="m-auto mb-1"
                    baseColor="#3C3658FF" 
                    highlightColor="#3a3b4e" /> {/* Release date */}
                    <Skeleton height={15} width={`40%`} className="m-auto"
                    baseColor="#3C3658FF" 
                    highlightColor="#3a3b4e" /> {/* Rating */}
                </div>
            </div>
    )
}
export default Skeletion;