
import { MessageCircle,CirclePlus,Search, } from 'lucide-react'
import { Link } from 'react-router-dom'
const NavBar1 = () => {
  return (
    <div className="ml-4 mr-4">
        
        <div className="flex  justify-between items-center ">
            <div className=" flex mt-2 mb-2">
                <div className="">
                    <h1 className="  font-bold text-blue-800">facebook</h1>
                </div>
              
            </div>
            <div className="flex   gap-1">
                <Link href="#">
                    <CirclePlus className="bg-black text-white rounded-full"/>
                </Link>
                
                <Link href="">
                    <Search/>
                </Link>

                <Link href="">
                    <MessageCircle className=""/> 
                </Link>    
                    
            </div>
        </div>
        
        </div>
  )
}

export default NavBar1