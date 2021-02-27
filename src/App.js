import React, {useRef, useState} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import './styles/app.scss';
import data from './util';
import Library from './components/Library';
import Nav from './components/Nav';

function App() {

  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHander = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo, currentTime: current, duration})
}

  return (
    <div className="App">
     <Nav isOpen={isOpen} setIsOpen={setIsOpen}/>
     <Song currentSong={currentSong}/>
     <Player  
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}
      isPlaying={isPlaying}
      audioRef={audioRef}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      songs={songs}
      setCurrentSong={setCurrentSong}
      setSongs={setSongs}
      />
      <Library setCurrentSong={setCurrentSong} songs={songs} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} isOpen={isOpen}/>
      <audio onTimeUpdate={timeUpdateHander} onLoadMetadata={timeUpdateHander} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
