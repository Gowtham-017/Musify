import React, { useState } from 'react';


const EditPlayList = () => {
  const [newsplaylist, setNewsPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    setNewsPlaylist([...newsplaylist, song]);
  };

  const SongItem = ({ song }) => {
    return (
      <div className="song-item">
        <h3>{song.title}</h3>
        <button onClick={() => addToPlaylist(song)}>Add</button>
      </div>
    );
  };

  const songs = [
    { id: 1, title: 'Song 1' },
    { id: 2, title: 'Song 2' },
    { id: 3, title: 'Song 3' },
    // Add more songs as needed
  ];

  return (
    <div>
      {songs.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </div>
  );
};

export default EditPlayList;