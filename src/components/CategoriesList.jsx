import React from 'react'
import { categoriesList } from '../constants'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { list } from 'postcss'
const CategoriesList = () => {
  return (
    <div className=" mx-4">
        <div className="flex my-3 gap-2 items-center">
            <button> 
                <Link to={"/market"}>
                    <ArrowLeft/>
                </Link>
            </button>
            <input type="text" className=" w-[80%] py-1 rounded-full px-2 border outline-none  focus:shadow-p1 focus:border-blue-400" placeholder="Que voulez-vous chercher?"/>
        </div>
        {
            categoriesList.map((categorielist, index) => (
                
                <div className="flex gap-2 items-center py-2 hover:bg-blue-200 hover:border hover:rounded-md" key={index}>
                    <div className="bg-neutral-300 rounded-full p-3 flex items-center ">{categorielist.icon}</div>
                    <h2>
                        <Link>
                            {categorielist.name}
                        </Link>
                     </h2> 
                </div>
            ))
        }
    </div>
  )
}

export default CategoriesList