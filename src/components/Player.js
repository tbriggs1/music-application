import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons';
import '../styles/app.scss';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {

    //Ref
    const audioRef = useRef(null);
    //Event Handlers

    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
            setPButton(faPlay);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
            setPButton(faPause);
        }
    }

    const timeUpdateHander = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration})
    }

    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    //State
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null,
    });
    
    const [pButton, setPButton] = useState(faPlay);

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={pButton}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio onTimeUpdate={timeUpdateHander} onLoadMetadata={timeUpdateHander} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;