
import { UserDatas } from '../constants';
import {  Globe2Icon,X, Ellipsis} from 'lucide-react';
import AddLikes from '../components/AddLikes'
import MenuNav from '../components/MenuNav'
import MenuContent from '../components/MenuContent'


const Contenu = () => {

  return (
    <div className="flex flex-col mr-4 ml-4 md:grid-cols-3">
      
     

        {UserDatas.map ((UserData, index) =>(
              <div key={index} className="flex flex-col mt-3 border-b border-slate-400 pb-3">
                <div className="flex justify-between ">
                  <div className="flex gap-1">
                    <img src={UserData.Img} alt="" className="w-10 h-10 border rounded-full"/>
                    <div className="flex flex-col">
                        <h2 className="font-semibold">{UserData.user}</h2>
                        <div className="flex items-center gap-1">
                        <p className="text-sm text-neutral-500 ">il y a 30 min.</p>
                        <Globe2Icon className="text-neutral-500"/>
                        </div> 
                    </div>
                  </div>
                  <div className="flex ">
                        <Ellipsis/>
                        <X className="w-10"/>
                    </div>
                  </div>
                  <div>
                    <p className="text-justify pb-1">{UserData.text}</p>
                  </div>
                  <div>
                    <img src={UserData.postPic} alt="" />
                  </div>

                    <div className="flex justify-between">
                      <AddLikes likeCount={UserData.likeCount}/>        
                    </div>

                  
                </div>
            ))}
        
    </div>
  )
}

export default Contenu