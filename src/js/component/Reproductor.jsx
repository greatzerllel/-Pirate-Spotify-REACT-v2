import React, { useState, useRef } from 'react'
import Botones from './Botones';


const Reproductor = () => {
 
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