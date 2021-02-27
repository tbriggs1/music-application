import React from 'react';
import '../styles/app.scss';

const LibrarySong = ({currentSong}) => {
    return (
        <div className="song-container">
            <img alt={currentSong.name} src={currentSong.cover}></img>
            <h3>{currentSong.name}</h3>
            <h4>{currentSong.artist}</h4>
        </div>
    )
}

export default LibrarySong;