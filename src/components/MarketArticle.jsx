import React from 'react'
import { marketArticles } from '../constants'
const MarketArticle = () => {
  return (
    <div className="mx-4 my-4">
        <div className="grid grid-cols-2 gap-2 ">
            {
                marketArticles.map ((marketArticle,index)=>(
                    <div className="flex items-center flex-col border rounded-md " key={index}>
                        <div className="w-fullh-full">
                            <img src={marketArticle.pic} alt="photo de l'article" className="w-40  h-40" />
                        </div>
                        
                        <div className="flex font-semibold gap-2 mt-2">
                            <h3>{marketArticle.name}</h3>
                            <h3>{marketArticle.Price}</h3>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default MarketArticle