import React from 'react'
import { menuFooters } from '../constants'
import { ChevronDown } from 'lucide-react'

const MenuFooter = () => {
  return (
    <div className="flex flex-col mx-4"> 

        <div className="border-b mb-1 py-3">
            <button className="bg-neutral-100 hover:bg-neutral-300  py-2 px-2 w-full border rounded-lg">Voir plus</button>
        </div>
        <div className="flex flex-col">
            {
                menuFooters.map ((menuFooter,index)=>(
                    <div className="flex justify-between my-2 border-b pb-3" key={index}>
                        <div className="flex gap-2">
                            
                            <span>{menuFooter.mIcon}</span>
                            
                            <h4> {menuFooter.mName}   </h4>
                        </div>
                        <button>
                            <ChevronDown/>
                        </button>
                    </div>
                ))
            }
        </div>
        <div className="border-b mb-1 py-3">
            <button className="bg-neutral-100 hover:bg-neutral-300 py-2 px-2 w-full border rounded-lg">Deconnexion</button>
        </div>
    </div>
  )
}

export default MenuFooter