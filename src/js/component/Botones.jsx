import React, { useState, useEffect } from "react";
import * as config from './config';

const Botones = () => {
  const [musicNow, setMusicNow] = useState('');
  const [music, setMusic] = useState([]);
  let playMusic = null;
  
  
 /*  let playBack= null;
  let playNext= null */

  useEffect(() => {
    //getMusic();
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
  /*   let musicNow= null;
    const handleClick = () => {
      musicNow=songURL + music.url;
      console.log(musicNow)
  } */
  const songURL = "https://assets.breatheco.de/apis/sound/";

  return (
    <>

      <ul className="list-group" >{
        !!music && // Validar que exista la variable o datos
        music.length > 0 &&
        music.map((music, index) => {
          return (
            <li className="list-group-item" type='button' key={index} onClick={() => {setMusicNow(music.url)}}>
              {music.id} {music.name}
            </li>
          )
        })
      }
      </ul>

      <audio src={songURL + musicNow} />

      <div className="btn-group mt-3 d-flex justify-content-center" role="group" aria-label="Basic example">
        <button type="button" className='form-control border border-0 py-3 px-5' ><i className="fa-solid fa-backward " /></button>
        <button type="button" className=' form-control border border-0 py-3 mx-2 ' onClick={()=>{ 
          playMusic=songURL + musicNow;  
          let song = new Audio(playMusic);
           song.play();

           console.log(playMusic)
          }}>
  <i className="fa-solid fa-play " /></button>
        <button type="button" className='form-control border border-0 py-3 px-5'><i className="fa-solid fa-forward " /></button>
      </div>

    </>
  )

}
export default Botones