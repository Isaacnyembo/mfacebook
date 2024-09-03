
import { userInfo } from '../constants'
import { CameraIcon } from 'lucide-react'
const UserPic = () => {
  return (
    <div>
           {
                userInfo.map ((userInfo,index) =>(
                    <div className="relative w-[92%] h-60 border-2 rounded-md mt-3 mb-24 mx-4" key={index}>
                        <div className=" rounded-md  " >
                            <img src={userInfo.ban} alt="" className="h-60 w-full object-cover  "/>
                        </div>
                        <div className="absolute left-10 top-40 w-40 border-2 rounded-full">
                            <img src={userInfo.pic} alt="" className="rounded-full"/>
                           
                        </div>
                        <div className="absolute top-60 left-40 bg-slate-300 w-16 text-center rounded-full border-2 hover:bg-blue-500 transition-all duration-300">
                            <button className="p-4"><CameraIcon/></button>
                        </div>
                        <div className="absolute top-40 left-72 bg-slate-300 w-16 text-center rounded-full border-2 hover:bg-blue-500">
                            <button className="p-4  "><CameraIcon/></button>
                        </div>
                    </div>
                ))
            }
    </div>
  )
}

export default UserPic