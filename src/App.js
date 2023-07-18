import React from 'react'
import Signin from './Signin'


import Sidebar from './Components/Sidebar'
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Signup from './Signup';
import Home from './Components/Home';
import Playlist1 from './Playlist1';

import NewPlayList from './Components/NewPlayList'
import UserProfile from './Components/Userprofile'
import EditPlayList from './Components/EditPlayList'
import Demo from './Components/Demo';
import Embed2 from './Components/Embed2';



function App() {
  return (
    <div>
      <Router>
    <div className="App"> 
        <Switch>
       
        <Route exact path="/" component={Signin}></Route>
        <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/Signin" component={Signin}></Route>
        <Route exact path="/Sidebar" component={Sidebar}></Route>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/NewPlayList" component={NewPlayList}></Route>
        <Route exact path="/Playlist1" component={Playlist1}></Route>
        <Route exact path="/UserProfile" component={UserProfile}></Route>
        <Route exact path="/EditPlayList" component={EditPlayList}></Route>
        <Route exact path="/Embed2" component={Embed2}></Route>
  
    
       </Switch>
    </div> 
  </Router> 
  {/* <Demo /> */}
   
    </div>
  )
}

export default App