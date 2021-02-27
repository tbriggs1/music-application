import React from 'react';
import LibrarySong from './LibrarySong';
import '../styles/app.scss';

const Library = ({songs, setCurrentSong, audioRef, isPlaying}) => {
    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => 
                    <LibrarySong songs={songs} song={song} setCurrentSong={setCurrentSong} id={song.id} key={song.id} audioRef={audioRef} isPlaying={isPlaying}/>
                    )
                }
            </div>
        </div>
    )
}

export default Library;