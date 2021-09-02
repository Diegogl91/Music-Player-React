import React, { useState, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
		},
		{
			id: 4,
			category: "game",
			name: "Mario Stage 1",
			url: "files/mario/songs/stage1.mp3"
		},
		{
			id: 5,
			category: "game",
			name: "Mario Stage 2",
			url: "files/mario/songs/stage2.mp3"
		},
		{
			id: 6,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/starman.mp3"
		},
		{
			id: 7,
			category: "game",
			name: "Mario Underworld",
			url: "files/mario/songs/underworld.mp3"
		},
		{
			id: 8,
			category: "game",
			name: "Mario Underwater",
			url: "files/mario/songs/underwater.mp3"
		},
		{
			id: 9,
			category: "game",
			name: "Zelda Castle",
			url: "files/videogame/songs/zelda_castle.mp3"
		},
		{
			id: 10,
			category: "game",
			name: "Zelda Outworld",
			url: "files/videogame/songs/zelda_outworld.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Titles",
			url: "files/videogame/songs/zelda_title.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Sonic Brain Zone",
			url: "files/videogame/songs/sonic_brain-zone.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Link To Past",
			url: "files/videogame/songs/zelda_link-to-past.mp3"
		},
		{
			id: 12,
			category: "game",
			name: "Dong KinKong Main",
			url: "files/other/songs/dkng-main.mp3"
		},
		{
			id: 13,
			category: "game",
			name: "Dong KinKong Other",
			url: "files/other/songs/dkng-other.mp3"
		},
		{
			id: 14,
			category: "game",
			name: "mega-man",
			url: "files/other/songs/mega-man.mp3"
		},
		{
			id: 15,
			game: "cartoon",
			name: "Flintstones",
			url: "files/cartoons/songs/flintstones.mp3"
		},
		{
			id: 16,
			game: "cartoon",
			name: "power-rangers",
			url: "files/cartoons/songs/power-rangers.mp3"
		},
		{
			id: 17,
			game: "cartoon",
			name: "simpsons",
			url: "files/cartoons/songs/simpsons.mp3"
		},
		{
			id: 18,
			game: "cartoon",
			name: "south-park",
			url: "files/cartoons/songs/south-park.mp3"
		},
		{
			id: 19,
			game: "cartoon",
			name: "thundercats",
			url: "files/cartoons/songs/thundercats.mp3"
		},
		{
			id: 20,
			game: "cartoon",
			name: "x-men",
			url: "files/cartoons/songs/x-men.mp3"
		}
	]);
	const [isPlaying, setIsPlaying] = useState(false);
	let reproductorRef = useRef();

	const playPause = () => {
		console.log(indice);
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

	const [indice, setIndice] = useState(0);

	const nextSong = () => {
		if (indice + 1 < musica.length) {
			reproductorRef.src = baseURL + musica[indice + 1].url;
			// reproductorRef.play();
			reproductorRef.play();
			setIsPlaying(true);
			setIndice(indice + 1);
			console.log(isPlaying);
		} else {
			reproductorRef.src = baseURL + musica[0].url;
			// reproductorRef.play();
			reproductorRef.play();
			setIsPlaying(true);
			setIndice(0);
			console.log(isPlaying);
		}
	};

	const prevSong = () => {
		if (indice - 1 > 0) {
			reproductorRef.src = baseURL + musica[indice - 1].url;
			// reproductorRef.play();
			reproductorRef.play();
			setIsPlaying(true);
			setIndice(indice - 1);
			console.log(isPlaying);
		} else {
			reproductorRef.src = baseURL + musica[musica.length - 1].url;
			// reproductorRef.play();
			reproductorRef.play();
			setIsPlaying(true);
			setIndice(musica.length - 1);
			console.log(isPlaying);
		}
	};
	return (
		<>
			<div className="playlist">
				<ol className="lista">
					{musica.map((song, index) => {
						return (
							<li className="fila" key={index}>
								<a
									role="button"
									onClick={() => {
										newSong(index);
									}}>
									{index + 1} - {song.name}
								</a>
							</li>
						);
					})}
				</ol>
			</div>
			<div className="barra">
				<audio ref={ele => (reproductorRef = ele)}></audio>
				<div className="botones">
					<button
						onClick={() => {
							prevSong();
						}}>
						<i className="fas fa-step-backward"></i>
					</button>
					<button
						onClick={() => {
							playPause();
						}}>
						<i className="fas fa-play-circle"></i>
					</button>
					<button
						onClick={() => {
							nextSong();
						}}>
						<i className="fas fa-step-forward"></i>
					</button>
				</div>
			</div>
		</>
	);
};

export default Player;
