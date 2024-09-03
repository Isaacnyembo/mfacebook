
import { menuContents } from '../constants'

const MenuContent = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:flex md:flex-col md:bg-slate-100 ">
        
        
            {
                menuContents.map ((menuContent,index)=> (
                    <div className="flex flex-col border-2 rounded-xl  shadow-xl p-4 cursor-pointer md:border-none md:flex md:flex-row md:gap-2 " key={index}>
                            <div className="text-blue-500 flex md:flex-col">
                                <span>
                                    {menuContent.mIcon}
                                </span>
                            </div>
                            <div>
                                <button className="text-xs">{menuContent.mName}</button>
                            </div>
                    </div>
                )) 
            }
        
    </div>
  )
}

export default MenuContent