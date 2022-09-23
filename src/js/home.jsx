import React,{ useEffect, useState }from "react";
import Botones from "./component/Botones.jsx"
import InputButton from "./component/InputButton.jsx";
import Titulo from "./component/Titulo.jsx";

//create your first component
const Home = () => {
	
	
	return (
		<>
			<Titulo className={'text-center m-5'} name={'Spotify pirata'}/>
		<div className='container'>
			<Botones  />
		</div>
		<div className='container d-flex justify-content-center'>
			<InputButton className={' form-control border border-0 py-3 px-5'} icon1={<i className="fa-solid fa-backward"></i>} icon2={<i className="fa-solid fa-play"></i>}icon3={<i className="fa-solid fa-forward"></i>}/>
		</div>
		
		</>
	);
};

export default Home;
