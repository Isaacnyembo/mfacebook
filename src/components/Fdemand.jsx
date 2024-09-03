
import { SearchIcon } from 'lucide-react'
const Fdemand = () => {
  return (
    <div className="mr-4 ml-4 mt-3 border-b-2 pb-3">
        <div className="flex justify-between mb-3">
            <div>
                <h1 className="font-semibold">Amies</h1>
            </div>
            <div>
                <SearchIcon></SearchIcon>
            </div>
        </div>
        <div className="flex justify-between ">
            <div className="bg-slate-100 rounded-full py-1 px-3">
                <p className="font-thin">91 en ligne</p>
            </div>
            <div className="bg-slate-100 rounded-full px-3">
                <p className="font-thin">Suggestions</p>
            </div>
            <div className="bg-slate-100 rounded-full px-3">
                <p className="font-thin">Vos amis</p>
            </div>
        </div>
        
    </div>
  )
}

export default Fdemand