import user11 from '../assets/profile-pictures/user11.jpg'
import user10 from '../assets/profile-pictures/user10.jpg'
import user9 from '../assets/profile-pictures/user9.jpg'
import user8 from '../assets/profile-pictures/user8.jpg'
import user7 from '../assets/profile-pictures/user7.jpg'
import user1 from '../assets/profile-pictures/user1.jpg'


const Story = () => {
  return (
    <div className=" max-w-[92%] max-h-64 flex flex-col flex-wrap gap-2 overflow-scroll overflow-y-auto overflow-x-auto mt-3 mx-4 border-b-2 md:justify-between  p-4 ">
        
        <button className="relative w-24 transition-all duration-200 hover:border-4 hover:border-gray-300 rounded-2xl">
        <span className="">
        <img src={user1} alt=""  className=" w-24 h-48 rounded-2xl object-center  "/>
        <img src={user11} alt=""  className=" absolute top-1 border-2 border-blue-500 w-10 h-10 rounded-full  object-cover  "/>
        </span>
        </button>
        
        <button className="relative w-24 hover:border-4 hover:border-gray-300 rounded-2xl">
        <span >
        <img src={user9} alt=""  className=" w-24 h-48 rounded-2xl object-center  "/>
        <img src={user10} alt=""  className=" absolute top-1 border-2 border-blue-500 w-10 h-10 rounded-full  object-cover  "/>
        </span>
        </button>
        
        <button className="relative w-24 hover:border-4 hover:border-gray-300 rounded-2xl">

        <span >
        <img src={user7} alt=""  className=" w-24 h-48 rounded-2xl object-center  "/>
        <img src={user8} alt=""  className=" absolute top-1 border-2 border-blue-500 w-10 h-10 rounded-full  object-cover  "/>
        </span>
        </button>
        
        <button className="relative w-24 hover:border-4 hover:border-gray-300 rounded-2xl">
        <span >
        <img src={user7} alt=""  className=" w-24 h-48 rounded-2xl object-center  "/>
        <img src={user11} alt=""  className=" absolute top-1 border-2 border-blue-500 w-10 h-10 rounded-full  object-cover  "/>
        </span>
        </button>
        
        <button className="relative w-24 hover:border-4 hover:border-gray-300 rounded-2xl">
        <span >
        <img src={user7} alt=""  className=" w-24 h-48 rounded-2xl object-center  "/>
        <img src={user11} alt=""  className=" absolute top-1 border-2 border-blue-500 w-10 h-10 rounded-full  object-cover  "/>
        </span>
        </button>
        
          
              
              
      
        




       
        
        
  </div>
  )
}

export default Story