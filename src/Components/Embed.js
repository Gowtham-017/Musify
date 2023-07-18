import React from 'react';

const EmbedComponent = () => {
  
  const embedCode1 = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E35bRABg8mZh1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
  const embedCode2 = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E36Eun8u4gKZR?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
  const embedCode3 = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4Im4BTs2WMg?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
  return (
    <div className='code'>
    <div dangerouslySetInnerHTML={{ __html: embedCode1 }} />
    <div dangerouslySetInnerHTML={{ __html: embedCode2 }} />
    {/* <div dangerouslySetInnerHTML={{ __html: embedCode3 }} /> */}
    </div>
  );
};

export default EmbedComponent;
