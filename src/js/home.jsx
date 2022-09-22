import React,{ useEffect, useState }from "react";
import Input from "./component/Input.jsx"
import InputButton from "./component/InputButton.jsx";
import Titulo from "./component/Titulo.jsx";

//create your first component
const Home = () => {
	
	const [music, setMusic]=useState('')
	/* e.preventDefault */
	return (
		<>
			<Titulo className={'text-center'} name={'Spotify pirata'}/>
		<div className='container'>
			<Input className={'form-control '} name={'1'} url={''}onClick={() => setMusic()}/>
			<Input className={'form-control '} name={'1'}url={''}/>
			<Input className={'form-control '} name={'2'}url={''}/>
			<Input className={'form-control '} name={'3'}/>
			<Input className={'form-control '} name={'4'}/>
			<Input className={'form-control '} name={'5'}/>
		</div>
		<div className='container d-flex justify-content-center'>
			<InputButton className={' form-control border border-0 py-3 px-5'} icon1={<i className="fa-solid fa-backward"></i>} icon2={<i className="fa-solid fa-play"></i>}icon3={<i className="fa-solid fa-forward"></i>}/>
		</div>
		
		</>
	);
};

export default Home;
