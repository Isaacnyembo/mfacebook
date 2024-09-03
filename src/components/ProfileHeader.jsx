

import { UserPen } from 'lucide-react'

const ProfileHeader = () => {
  return (
    <div>
        <div className="relative mx-4">
            <div className="flex justify-between items-center mt-2">
                <h1 className="font-semibold">Marc Antoine</h1>
               <div className="bg-gray-300 border p-3 rounded-full hover:bg-blue-500"> 
                    <UserPen className=""/>
                </div> 
            </div>
         
        </div>
    </div>
  )
}

export default ProfileHeader