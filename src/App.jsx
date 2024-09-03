import Home from './components/pages/Home';
import Friends from './components/pages/Friends';
import Market from './components/pages/Market';
import Menu from './components/pages/Menu';
import Notification from './components/pages/Notification';
import Profile from './components/pages/Profile';

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CategoriesList from './components/CategoriesList';

const App = () => {
  return (
    <div className="">
        <BrowserRouter>
            <Routes>
              <Route index element ={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/friends" element={<Friends/>}></Route>
                <Route path="/market" element={<Market/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/notifications" element={<Notification/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/categorieslist" element={<CategoriesList/>}/>
            </Routes>

        </BrowserRouter>
    </div>
  )
}

export default App
