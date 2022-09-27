import React, { useState, useEffect, useRef } from "react";
import * as config from './config';

const Controls = () => {

  /* Variables, y Hooks */
  const [musicList, setMusic] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  let songNow = null
  let audioRef = useRef(null);
  const songURL = "https://assets.breatheco.de/apis/sound/";

  const setMusicNow = (url) => {
    audioRef.current.src = songURL + url
  }

  /* Siguiente next song */
  const NextSong = (i, song) => {
    i++;
    songNow = song[i].url
    audioRef.current.src = songURL + songNow
    setTrackIndex(i)
  }
  /* previus song */
  const prevSong = (i, song) => {
    i--;
    songNow = song[i].url
    audioRef.current.src = songURL + songNow
    setTrackIndex(i)
  }

  useEffect(() => {
    getMusicAsync();
  }, [])

  /* Api get json musicList */
  const getMusicAsync = async () => {

    let options_get = {
      method: 'GET', // GET, POST, PUT, DELETE, 
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await fetch(config.urlSongs, options_get);
      const data = await response.json();
      console.log(data);

      setMusic(data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ul className="list-group shadow" >{
        !!musicList && // Validar que exista la variable o datos
        musicList.length > 0 &&
        musicList.map((musicList, index) => {
          return (
            <li className="list-group-item" type='button' key={index} onClick={() => { setMusicNow(musicList.url), setTrackIndex(index), audioRef.current.play(), setIsPlaying(!isPlaying) }} >
              <b>{musicList.id}</b> {musicList.name.toUpperCase()}
            </li>
          )
        })
      }
      </ul>

      <audio ref={audioRef} />

      <div className="btn-group mt-1 d-flex justify-content-center" role="group" aria-label="Basic example">
        <button type="button" className='form-control border border-0 py-3 px-1 shadow' onClick={() => { prevSong(trackIndex, musicList), audioRef.current.play() }} ><i className="fa-solid fa-backward " /></button>
        <button type="button" className=' form-control border border-0 py-3 mx-2 shadow' onClick={() => {
          isPlaying ? (audioRef.current.pause(), setIsPlaying(!isPlaying)) : (audioRef.current.play(), setIsPlaying(!isPlaying));
          console.log(audioRef)
        }}>
          <i className={"fa-solid " + (isPlaying ? 'fa-pause' : 'fa-play')} /></button>

        <button type="button" className='form-control border border-0 py-3 px-1 shadow' onClick={
          () => { NextSong(trackIndex, musicList), audioRef.current.play() }}>
          <i className="fa-solid fa-forward" />
        </button>
      </div>

    </>
  )

}
export default Controls