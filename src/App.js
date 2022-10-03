import './App.css';
import NavScrollExample from './Components/Header'
import Body from './Components/Body'
import Tittle from './Components/Tittle'
import {Routes,Route} from 'react-router-dom'
import Docs from './Components/Docs';
import Tutorial from './Components/Tutorial';
import Blog from './Components/Blog';
import Community from './Components/Community';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Tittle />
       <NavScrollExample/> 
       <Routes>
        <Route path='' element={<Body />}></Route>
        <Route path='docs' element={<Docs />}></Route>
        <Route path='tutorial' element={<Tutorial />} ></Route>
        <Route path='blog' element={<Blog />} ></Route>
        <Route path='community' element={<Community />} ></Route>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
