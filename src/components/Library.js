import React from 'react';
import LibrarySong from './LibrarySong';
import '../styles/app.scss';

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, isOpen}) => {
    return(
        <div className={`library ${isOpen ? "active-library" : "" }`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => 
                    <LibrarySong songs={songs} song={song} setCurrentSong={setCurrentSong} id={song.id} key={song.id} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}/>
                    )
                }
            </div>
        </div>
    )
}

export default Library;