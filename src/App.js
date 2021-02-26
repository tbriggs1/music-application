import React, {useState} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import './styles/app.scss';
import data from './util';

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
     <Song currentSong={currentSong}/>
     <Player  
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}
      isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;
