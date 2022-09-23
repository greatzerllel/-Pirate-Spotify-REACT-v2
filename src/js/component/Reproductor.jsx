import React, { useState, useRef } from 'react'
import Botones from './Botones';


const Reproductor = () => {
    const [music] = useState([
        "files/mario/songs/castle.mp3",
        "files/mario/songs/hurry-starman.mp3",
        "files/mario/songs/overworld.mp3"
    ]);
    
    return (
        <>
            <div>
                {
                    music.map((source, index) => <Botones source={source} key={index} setMusicSource={setMusicSource.play()} />)
                }
            </div>
        </>
    )
}
export default Reproductor