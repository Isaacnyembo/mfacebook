import React from 'react'
import { userInfo } from '../constants'
import { friendsList } from '../constants'
import { Plus,Ellipsis,Pencil } from 'lucide-react'
const UserInfo = () => {
  return (
    <div className="mx-4 flex flex-col gap-2 ">
        {
            userInfo.map ((userInfo,index) =>(
                <div className="px-4 flex flex-col" key={index}>
                    <h1 className=" font-bold tracking-wider">{userInfo.name}</h1>
                    <h4>{friendsList.length} Amis</h4>
                </div>
                
            ))
        }
        <div className="flex flex-col">
          <button className="bg-blue-700 text-white w-full py-3 rounded-md flex justify-center hover:bg-blue-800"> <Plus/>Ajouter a la story</button>

          <div className="flex mt-3 gap-2">
          <button className="bg-neutral-300 text-black font-semibold w-full py-3 rounded-md flex justify-center gap-2 hover:bg-slate-400"> <Pencil/>Modifier le profil</button>
          <button className="bg-neutral-300 w-20 flex justify-center items-center rounded-md hover:bg-slate-400"><Ellipsis/></button>
          </div>
        </div>
    </div>
  )
}

export default UserInfo