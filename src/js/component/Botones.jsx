import React, { useState, useEffect, useRef } from "react";
import * as config from './config';

const Botones = () => {
  let audioRef = useRef(null);
  const [music, setMusic] = useState([]);
  const[isPlaying, setIsPlaying] = useState(false);
  
  const setMusicNow = (url) => { 
    const songURL = "https://assets.breatheco.de/apis/sound/";
    audioRef.current.src = songURL + url
  }


  const [trackIndex, setTrackIndex] = useState(0);

  useEffect(() => {
    
    getMusicAsync();
  }, [])
  const getMusicAsync = async () => {


    let options_get = {
      method: 'GET', // GET, POST, PUT, DELETE, 
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await fetch(config.URL_SONGS, options_get);
      const data = await response.json();
      console.log(data);

      setMusic(data);

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>

      <ul className="list-group" >{
        !!music && // Validar que exista la variable o datos
        music.length > 0 &&
        music.map((music, index) => {
          return (
            <li className="list-group-item" type='button' key={index} onClick={() => { setMusicNow(music.url) }}>
              {music.id} <b>{music.name.toUpperCase()}</b>
            </li>
          )
        })
      }
      </ul>

      <audio ref={audioRef}  />

      <div className="btn-group mt-3 d-flex justify-content-center" role="group" aria-label="Basic example">
        <button type="button" className='form-control border border-0 py-3 px-5' onClick={() => { alert('soy el boton de retroceder') }} ><i className="fa-solid fa-backward " /></button>

        <button type="button" className=' form-control border border-0 py-3 mx-2 ' onClick={() => {


          isPlaying ? ( audioRef.current.pause(), setIsPlaying(!isPlaying)) : (audioRef.current.play(), setIsPlaying(!isPlaying));

          console.log(audioRef)
        }}>
          <i className={"fa-solid " + (isPlaying? 'fa-pause' : 'fa-play')} /></button>

        <button type="button" className='form-control border border-0 py-3 px-5' onClick={() => { alert('soy el boton de retroceder') }}><i className="fa-solid fa-forward " /></button>
      </div>

    </>
  )

}
export default Botones