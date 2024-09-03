import user1 from '../assets/profile-pictures/user1.jpg'
import { BookImage } from 'lucide-react'
const Poster = () => {
  return (
    <div className="mx-5 flex justify-between mt-3 items-center border-b pb-2">
        <div className="md:w-1/5">
            <img src={user1} alt="" className="w-10 h-10 rounded-full border"/>
        </div>
        <div className="md:w-3/5 ">
            <input type="text" className="border px-3 py-2 rounded-full border-slate-400 w-60 md:w-full outline-none focus:border-blue-500  focus:shadow-p1 " placeholder=" Quoi de neuf?"/>
        </div>
        <div className='md:w-1/5  flex justify-end'>
            <BookImage className="text-green-400 "></BookImage>
        </div>
    </div>
  )
}

export default Poster