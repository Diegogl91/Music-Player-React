import React, { useState, useRef } from "react";

//include images into your bundle
const Player = () => {
	const baseURL = "https://assets.breatheco.de/apis/sound/";

	const [musica, setMusica] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		}
	]);
	const [isPlaying, setIsPlaying] = useState(false);
	let reproductorRef = useRef();

	const playPause = () => {
		if (!reproductorRef.src) {
			reproductorRef.src = baseURL + musica[0].url;
		}
		if (isPlaying) {
			reproductorRef.pause();
			setIsPlaying(false);
			console.log(isPlaying);
		} else {
			reproductorRef.play();
			setIsPlaying(true);
			console.log(isPlaying);
		}
	};

	const newSong = index => {
		setIndice(index);
		reproductorRef.src = baseURL + musica[index].url;
		reproductorRef.play();
		setIsPlaying(true);
	};

	const [indice, setIndice] = useState(1);

	const nextSong = () => {
		if (indice + 1 >= musica.length) {
			setIndice(0);
			console.log(indice);
		} else {
			setIndice(indice + 1);
		}
		reproductorRef.src = baseURL + musica[indice].url;
		reproductorRef.play();
	};

	const prevSong = () => {
		if (indice - 1 <= 0) {
			setIndice(musica.length + 1);
		} else {
			setIndice(indice - 1);
		}
		reproductorRef.src = baseURL + musica[indice].url;
		reproductorRef.play();
	};

	return (
		<>
			<div className="playlist">
				<ul>
					{musica.map((song, index) => {
						return (
							<li key={index}>
								<a
									role="button"
									onClick={() => {
										newSong(index);
									}}>
									{song.name}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<audio ref={ele => (reproductorRef = ele)}></audio>
				<button
					onClick={() => {
						prevSong();
					}}>
					Atras
				</button>
				<button
					onClick={() => {
						playPause();
					}}>
					Play
				</button>
				<button
					onClick={() => {
						nextSong();
					}}>
					Adelante
				</button>
			</div>
		</>
	);
};

export default Player;
