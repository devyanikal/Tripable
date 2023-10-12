import './App.css';
import React from 'react';
import ViewPlaces from './Components/pages/ViewPlaces';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewHotels from './Components/pages/ViewHotels';
import Home from './Components/pages/Home';
import Navbar from './Components/Navbar'
import About from './Components/pages/About';
import SignUp from './Components/pages/SignUp';
import Blogs from './Components/pages/Blogs';
// import ReactPlayer from 'react-player'

class App extends React.Component{
  render(){
    return(
      <div>
         <BrowserRouter>

         <Navbar/>
         {/* <ReactPlayer url={'./travelvideo.mp4'} controls={false} playing={true} /> */}

        <div>
        <Routes>  
          <Route exact path='/home' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/places' element={< ViewPlaces />}></Route>  
          <Route exact path='/hotels' element={< ViewHotels />}></Route> 
          <Route exact path='/blogs' element={< Blogs />}></Route>
          <Route exact path='/signup' element={< SignUp />}></Route> 
        </Routes>


        </div> 
      </BrowserRouter>

      </div>
    )
  }

}

export default App;
