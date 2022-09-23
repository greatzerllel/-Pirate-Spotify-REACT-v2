import React, { useState, useEffect } from "react";
/* import * as config from './config'; */

const Botones = () => {

  const [music, setMusic] = useState(null);
  useEffect(() => {
    //getMusic();
    getMusicAsync();
  }, [])
  const getMusicAsync = async () => {
    
    let url = "https://assets.breatheco.de/apis/sound/songs"
    let options_get = {
      method: 'GET', // GET, POST, PUT, DELETE, 
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await fetch(url, options_get);
      const data = await response.json();
      console.log(data);

      setMusic(data);

    } catch (error) {
      console.log(error);
    }
  }

 return (
    <>
      <ul className="list-group" >
        <li className="list-group-item" onClick={()=>{ music}}>1</li>
      </ul>
     <audio src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3" />  
    </>
  )

}
export default Botones