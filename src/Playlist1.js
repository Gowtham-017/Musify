import React, { useState,useEffect,useRef } from 'react';
import './Playlist1.css';
import {  FaEllipsisV, FaPlay, FaSpotify, FaMusic } from 'react-icons/fa';
import {Link} from "react-router-dom"
import Embed from './Components/Embed'
const Playlist1 = () => {
 
  const[openedit,setOpenEdit]=useState(false);

  let editRef = useRef();
  useEffect(() => {
    let handler = (e)=>{
      if(!editRef.current.contains(e.target)){
        setOpenEdit(false);
        console.log(editRef.current);
      }      
    };
    document.addEventListener("mousedown", handler);
  });



  return (
   
    <div className="body">
    <div className='listname'>
        <h2 style={{margin:"0px",padding:"40px 0 0 20px",alignItems:"center"}}><FaSpotify /> My Playlist</h2>
        
    </div>
    <div className='playmus'>


    
    
        <div ref={editRef} className='' onClick={()=>{setOpenEdit(!openedit)}}>
            <FaPlay onClick={"handleOverlay"} size={20} style={{color:"black",padding:'5px'}} />&nbsp;
           <FaEllipsisV style={{color:'black',padding:" 9px 50px 4px 20px"}}  size={25}/>
           </div>
           <div>
           
       
        </div>
   </div>
        <div className={`edit-menu ${openedit? 'active' : 'inactive'}`} >
            <Link to="UserProfile"><EditItem  text = {"Add"}/></Link>
            <Link to="Signin"><EditItem  text = {"Remove"}/></Link>
            <Link to="UserProfile"><EditItem  text = {"Share"}/></Link>
            <Link to="Signin"><EditItem  text = {"Like"}/></Link>
        </div>
       

<div>
    {/* <div className='song2'>
    <div className=''>
      <span>SNo</span>
    </div>


    <div className=''>
      <span>Song</span>
    </div>

    <div className=''>
      <span>Album</span>
    </div>
    <div className=''>
      <span>Artist</span>
    </div>

    <div className=''>
      <span>Duration</span>
    </div>
    <div>
    </div>

    </div> */}



    {/* <div className='song1'  draggable="true" >
    <div className=''>
      <span>1</span>
    </div>

    <div className=''>
      <span><FaMusic />Song 1</span>
    </div>


    <div className=''>
      <span>Album 1</span>
    </div>
    <div className=''>
      <span>Artist 1</span>
    </div>

    <div className=''>
      <span>2:20</span>
    </div>

    </div> */}
   




    {/* <div className='song1' draggable="true" >
    <div className=''>
      <span>2</span>
    </div>

    <div className=''>
      <span><FaMusic  /> Song 2</span>
    </div>


    <div className=''>
      <span>Album 2</span>
    </div>
    <div className=''>
      <span>Artist 2 </span>
    </div>

    <div className=''>
      <span>2:20</span>
    </div>
</div> */}
    </div>
    <div className='embedd'>
    <Embed />
    </div>
 


    {/* <div className="music-player">
      <audio controls loop >
        <source src="https://gaana.com/song/ranjha-from-shershaah" type="audio/mp3" />
      </audio>
    </div>

 */}


    </div>

    
   
   
      
      );
    };

    export default Playlist1;
    function EditItem(props){
      return(
        <li className = 'dropdownItem'>
          <img src={props.img} alt='noimg'></img>
          <p> {props.text} </p>
        </li>
      );
    }