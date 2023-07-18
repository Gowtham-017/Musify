import React from 'react';
import './Embed2.css'
const Embed2 = () => {
  
  
 
  const playlistcode = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4wC9fYTDBk0TwNAiDvDyDL?utm_source=generator&theme=0" width="100%" height="100%" backgroundcolor="white" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;  fullscreen; picture-in-picture" loading="lazy"></iframe>';
  return (
   
 <div>
  
   
    <div className='body' dangerouslySetInnerHTML={{ __html: playlistcode }} />
    </div>
    
  );
};

export default Embed2;
