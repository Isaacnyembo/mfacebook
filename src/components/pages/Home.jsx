import NavBar1 from "../NavBar1"
import NavBar from "../NavBar"
import Poster from "../Poster"
import Story from "../Story"
import Contenu from "../Contenu"
import MenuNav from "../MenuNav"
import MenuContent from "../MenuContent"
import DemandList from "../DemandList"

const Home = () => {
  return (
    <div className="">
      
        <NavBar1/>
        <NavBar/>
        <Poster/>
        
      
       <div className="md:flex">
            <div className="md:w-1/4 hidden md:flex md:flex-col">
                  <MenuNav/>
                  <MenuContent/>
            </div>
            <div className="md:w-2/4">
            <Story/>
            <Contenu/>
            </div>
            <div className=" md:w-1/4 hidden md:flex md:flex-col">
                  <DemandList/>
                  
            </div>
            
       </div>
        
    </div>
  )
}

export default Home