
import { Search,Settings,ChevronDown } from 'lucide-react'
import user1 from '../assets/profile-pictures/user1.jpg'
import { Link } from 'react-router-dom'
const MenuNav = () => {
  return (
    <div className="md:flex md:flex-col md:bg-slate-100 ">
        <div className="mx-4 flex  justify-between items-center pb-4">
            <div className=" flex mt-2 mb-2">
                <div className="">
                    <h1 className="  font-bold text-black ">Menu</h1>
                </div>
              x
            </div>
            <div className="flex   gap-1">
                <Link href="#">
                    <Settings className="  text-black rounded-full"/>
                </Link>
                
                <Link href="">
                    <Search/>
                </Link>         
            </div>
        </div>
        <div className="flex justify-between p-2 border-2 mx-4 rounded-xl shadow-md items-center">
            <div className="flex gap-2 items-center">
                <img src={user1} alt="" className="border border-neutral-500 h-14 w-14 rounded-full"/>
                <h3 className="font-semibold ">Marc Antoine</h3>
            </div>
            <div className="hover:bg-slate-400 bg-gray border p-2 bg-slate-100 rounded-full  border-gray-400 cursor-pointer">
                <Link href="" className=" ">
                    <ChevronDown className=" "/>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default MenuNav