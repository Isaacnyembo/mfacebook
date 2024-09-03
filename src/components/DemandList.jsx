
import { fDemands } from '../constants'

const DemandList = () => {
  return (
    <div className="md:mx-0 mx-4 flex flex-col flex-nowrap justify-between mt-3 md:sticky  ">
        <h3 className="text-xl font-semibold p-2 text-left">Invitations {}</h3>
        
        {fDemands.map ((fDemand,index) =>(
            <div className="flex gap-3  mb-2  border-b-2 p-2" key={index}>
                <div>
                  <img src={fDemand.fPic} alt="" className="max-w-20 max-h-20 rounded-full hover:border-2 border-blue-400 " />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg">{fDemand.fName}</h4>
                  <div className="flex md:gap-2  mt-3 gap-6 font-semibold">
                    <button className="text-center bg-blue-300 border-2 px-3 py-2 rounded-xl cursor-pointer hover:bg-blue-500 hover:transition-all hover:duration-200 hover:ease-in "> Confirmer</button>
                    <button className="text-center border-2 cursor-pointer px-3 py-2 rounded-xl hover:bg-red-500 hover:transition-all hover:duration-200 hover:ease-in "> Supprimer </button>
                  </div>
                </div>
            </div>
            

        )) }
    </div>
  )
}

export default DemandList