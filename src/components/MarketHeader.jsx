
import { UserRound,Search,List,SquarePen,Ellipsis,MapPin } from 'lucide-react'
import laptop from '../assets/market-article/laptop.jpg'
import { Link } from 'react-router-dom'
const MarketHeader = () => {
  return (
    <div className="flex flex-col mx-4 border-b pb-2">
        <div className="flex justify-between mt-2">
            <h1 className="font-bold">Marketplace</h1>
            <div className="flex gap-2">
                <UserRound/>
                <Search/>
            </div>
        </div>
        <div className="flex justify-between mt-3 gap-2">
            <div className="cursor-pointer px-4 w-1/2 bg-neutral-100 justify-center flex  py-1 rounded-3xl gap-2">
                <span><SquarePen/></span>
                <button>  Vendre</button>
            </div>
            <div className="cursor-pointer px-4 w-1/2 bg-neutral-100 flex  justify-center  py-1 rounded-3xl gap-2">
            <span><List/></span>
                <Link to={"/categoriesList"}>
                <button  >Categories</button>
                </Link>
                
            </div>
        </div>
        <div className="flex justify-between mt-3 pb-2">
            <Link href="" className="font-semibold">
                Nouveaute
            </Link>
            <Link href="" className="font-normal text-blue-400 ">
                Voir tout()
            </Link>
        </div>
        <div className="flex justify-between gap-2">
            <img src={laptop} alt="" className="w-14 h-12 rounded-md"/>
            <p className="text-sm font-extralight tracking-tight">Decouvrez d autres annonces dans la categorie Electronique et ordinateurs pres d...</p>
            <Ellipsis/>
        </div>
        <div className="flex justify-between mt-3 pb-2">
            <Link href="" className="font-semibold">
                Selection du jour
            </Link>
            <Link href="" className="flex font-normal text-blue-400 ">
               <MapPin/> Lubumbashi
            </Link>
        </div>
    </div>
  )
}

export default MarketHeader