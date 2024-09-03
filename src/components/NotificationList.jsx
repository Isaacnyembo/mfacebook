
import { SearchIcon } from 'lucide-react'
import { notContent } from '../constants'
import { Aujourdhui } from '../constants'
import { Hier } from '../constants'
import { Link } from 'react-router-dom'
const NotificationList = () => {

  
  
  return (
    <div className="mx-4"> 
        <div className=" flex justify-between my-3">
            <div>
                <h1 className="font-semibold">Notifications</h1>
            </div>
            <div>
                <SearchIcon></SearchIcon>
            </div>
        </div>
        <div className="flex flex-col">

        <div className="">
                  <h1 className="text-xl">{notContent[0]}</h1>
                  <div className=''>
                    {Aujourdhui.map((aujourdhui,index) =>(
                      <div  className=" bg-blue-100" key={index} >
                      <Link className="flex items-center gap-2 border-b-2  p-3 cursor-pointer "  onClick={''}>
                          <div>
                            <img src={aujourdhui.sPic} alt="" className="w-20 h-20 rounded-full"/>
                          </div>
                          <div>
                            <h4 className="font-semibold">{aujourdhui.sender}</h4> <p>{aujourdhui.msg}</p>
                          </div>
                      </Link>
                      </div>
                      
                    ))}
                  </div>

                  <h1 className="text-xl ">{notContent[1]}</h1>
                  <div>
                    {
                      Hier.map((hier,index)=>(
                        <Link className="flex items-center gap-2 border-b-2 bg-blue-100 p-3 cursor-pointer" key={index}>
                        <div>
                          <img src={hier.sPic} alt="" className="w-20 h-20 rounded-full"/>
                        </div>
                        <div>
                          <h4 className="font-semibold">{hier.sender}</h4> <p>{hier.msg}</p>
                        </div>
                    </Link>
                      ))
                    }
                  </div>
         </div>

        </div>
</div>
  )
}

export default NotificationList