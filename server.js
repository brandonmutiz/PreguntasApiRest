const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = 'https://brandonmutizapirest.herokuapp.com';
const PORT = process.env.PORT || 5000

let niveles = ['juvenil', 'profesional', 'estrella', 'leyenda'];
let estado =['1','0']
let respuestascorrectas=[


{
	tipo:'profesional',
 respuesta1: 'Roger Hunt ',
 respuesta2: 'Vittorio Pozo',
 respuesta3: 'Brasil vs Uruguay',
 respuesta4: 'Los 40',
 respuesta5: '1970'




},
{

tipo:'estrella',
 respuesta1: 'Holanda',
 respuesta2: 'Hakan Ükür',
 respuesta3: 'España1982',
 respuesta4: 'Brasil',
 respuesta5: 'Argentina78'
},

{

tipo:'leyenda',
 respuesta1: 'Jorge Batista',
 respuesta2: 'Saint Dennis',
 respuesta3: 'Marcos Coll',
 respuesta4: 'México 1970',
 respuesta5:'Manuel Rosas'
}


];

let users=[{
			id: 0,
			user:'brandon',
			password:'123'

},

			{
				id:1,
				user:'admin',
			password:'1234'
}
];

let respuestasprofesional=[{
	respuesta3:'correcta',
	respuesta3:'correcta',
	respuesta3:'correcta',
	respuesta3:'correcta'

}];


let mundiales=[

{	nom_mundi:'Mundial de Fútbol Qatar 2022',
	photo:'https://upload.wikimedia.org/wikipedia/commons/6/69/Qatar_2022_Logo.png'


},


{	nom_mundi:'Mundial de Fútbol Rusia 2018',
	photo:'https://images.vexels.com/media/users/3/143513/preview2/5974ca34f57b8dbcf2a9c79e1881eb88-emblema-de-rusia-2018.jpg'

},
{
	nom_mundi:'Mundial de Fútbol Brasil 2014',
	photo: 'http://img.fifa.com/mm/photo/tournament/competition/01/27/05/83/1270583_large-lnd.jpg'
},



{	nom_mundi:'Mundial de Fútbol Uruguay 1930',
	photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Uruguay_1930_World_Cup.jpg/200px-Uruguay_1930_World_Cup.jpg'


},

{	nom_mundi:'Mundial de Fútbol Italia 1934',
	photo:'https://vignette.wikia.nocookie.net/althistory/images/8/8a/Italia_1934_logo.jpg/revision/latest?cb=20160715160052&path-prefix=es'


},
{	nom_mundi:'Mundial de Fútbol Francia 1938',
	photo:'https://lh5.googleusercontent.com/-ORK4gCw6hdI/TYT2YLQAsfI/AAAAAAAAAfM/kkzjWZ1rkBY/s1600/Francia-1938%255B1%255D.jpg'


},

{	nom_mundi:'Mundial de Fútbol Brasil 1950',
	photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkadU6d0Nb6BV6TqztN8WGi2rT9VxF05Mb2oG36F6xGeKLQPz9'


},
{	nom_mundi:'Mundial de Fútbol Suiza 1954',
	photo:'http://laciudadrevista.com/wp-content/uploads/2016/11/mundial-de-suiza-1954-logo.jpg'


},

{	nom_mundi:'Mundial de Fútbol Suecia 1958',
	photo:'https://i.pinimg.com/originals/ca/70/ff/ca70ffe4edd3b6d0133905b37a1f9f55.jpg'

},

{	nom_mundi:'Mundial de Fútbol Chile 1962',
	photo:'http://pm1.narvii.com/6514/2294fc5330963137f3822634fbba887429e198ea_00.jpg'

}


	];

let preguntas=[
{
	nom_tipo:'juvenil',
	nom_pregunta:'¿En qué país se celebró la  primera edición de la Copa del Mundo de fútbol?',
	respuesta1: 'Francia' ,	
	respuesta2: 'Inglaterra', 
	respuesta3: 'Uruguay', 
	respuesta4: 'Holanda',
	correcta: '3'

},

{
	nom_tipo:'juvenil',
	nom_pregunta:'¿El mejor gol de la historia de los mundiales es una obra del jugador?',
	respuesta1: 'Terry Butcher',
	respuesta2: 'Gary Lineker',
	respuesta3: 'Diego Maradona',
	respuesta4: 'Jose Batista',
	correcta:'3'

},

{
	nom_tipo:'juvenil',
	nom_pregunta:'¿Qué selección de futbol ha participado en todos los mundiales?',
	respuesta1: 'Alemania',
	respuesta2: 'Argentina',
	respuesta3: 'Brasil',
	respuesta4: 'Italia',
	correcta:'3'


},

{
	nom_tipo:'juvenil',
	nom_pregunta:'¿Qué selección ha ganado en cinco veces esta competición?',
	respuesta1: 'Uruguay',
	respuesta2: 'Alemania',
	respuesta3: 'Brasil',
	respuesta4: 'Italia',
	correcta:'3'

	
},

{
	nom_tipo:'juvenil',
	nom_pregunta:'¿Cuál es goleador histórico de los mundiales?',
	respuesta1: 'Diego Maradona',
	respuesta2: 'Pele',
	respuesta3: 'Ronaldo',
	respuesta4: 'Messi',
	correcta: '3'

	
},

{
	nom_tipo:'profesional',
	nom_pregunta:'¿El jugador más veterano en participar en un mundial fue?',
	respuesta1: 'Eusebio',
	respuesta2: 'Helmut Haller',
	respuesta3: 'Roger Milla',
	respuesta4: 'Roger Hunt ',
	correcta:'3'

	
},

{
	nom_tipo:'profesional',
	nom_pregunta:'¿El entrenador que ha ganado dos veces seguidas el mundial?',
	respuesta1: 'Vittorio Pozo',
	respuesta2: 'Luis Parreira ',
	respuesta3: 'Helmut Schön',
	respuesta4: 'Luis Aragonés ',
	correcta:'1'

	
},

{
	nom_tipo:'profesional',
	nom_pregunta:'¿Qué selecciones se enfrentaron en el día celebre “maracanazo”?',
	respuesta1: 'Brasil vs España',
	respuesta2: 'Alemania vs Inglaterra',
	respuesta3: 'Brasil vs Argentina',
	respuesta4: 'Brasil vs Uruguay ',
	correcta:'4'

	
},
{
	nom_tipo:'profesional',
	nom_pregunta:'¿En qué década no se disputo ningún mundial?',
	respuesta1: 'Los 30',
	respuesta2: 'Los 40',
	respuesta3: 'Los 50',
	respuesta4: 'Los 60',
	correcta:'2'

	
},

{
	nom_tipo:'profesional',
	nom_pregunta:'¿En qué año disputo Colombia su primer mundial?',
	respuesta1: '1962',
	respuesta2: '1990',
	respuesta3: '1996',
	respuesta4: '1970',
	correcta:'1'

	
},

{
	nom_tipo:'estrella',
	nom_pregunta:'¿Cuál es  la selección que más finales ha jugado y que no ha ganado ninguna?',
	respuesta1: 'Belgica',
	respuesta2: 'Inglaterra',
	respuesta3: 'Alemania',
	respuesta4: 'Holanda',
	correcta:'4'

	
},

{
	nom_tipo:'estrella',
	nom_pregunta:'¿El gol más rápido que se ha registrado en la historia de los mundiales fue anotado por?',
	respuesta1: 'Hakan Ükür',
	respuesta2: 'Vaclav Masek',
	respuesta3: 'Bryan Robson',
	respuesta4: 'Celso Ayala',
	correcta:'1'
	
},



{
	nom_tipo:'estrella',
	nom_pregunta:'¿La mascota oficial apodada “naranjito” fue en el mundial de:?',
	respuesta1: 'España1982',
	respuesta2: 'Holanda1990',
	respuesta3: 'Francia1988',
	respuesta4: 'Mexico1986',
	correcta:'1'

	
},

{
	nom_tipo:'estrella',
	nom_pregunta:'¿Qué selección se Corono Campeón en el mundial EE.UU 1994?',
	respuesta1: 'Brasil',
	respuesta2: 'Italia',
	respuesta3: 'Suecia',
	respuesta4: 'Inglaterra',
	correcta:'1'
	
},

{
	nom_tipo:'estrella',
	nom_pregunta:'¿Cuándo fue la última vez que se disputo un mundial con 16 selecciones?',
	respuesta1: 'Mexico86',
	respuesta2: 'España82',
	respuesta3: 'Argentina78',
	respuesta4: 'Alemania74',
	correcta:'3'
	
},

{
	nom_tipo:'leyenda',
	nom_pregunta:'¿Cuál es el jugador con la expulsión más rápida con 52 segundos en la historia de los mundiales?',
	respuesta1: 'Jorge Batista',
	respuesta2: 'Jose Valdano',
	respuesta3: 'Enzo Scifo',
	respuesta4: 'Gary Lineker',
	correcta:'1'

	
},

{
	nom_tipo:'leyenda',
	nom_pregunta:'¿En qué estadio se disputó la final del Mundial de Francia 1998?',
	respuesta1: 'Velodrome',
	respuesta2: 'Parque de los Principes',
	respuesta3: 'Saint Dennis',
	respuesta4: 'Stade Jacques',
	correcta:'3'

	
},

{
	nom_tipo:'leyenda',
	nom_pregunta:'¿Jugador que ha marcado el único gol olímpico en la historia de los mundiales?',
	respuesta1: 'Marcos Coll',
	respuesta2: 'Cesareo Onzari',
	respuesta3: 'Lev Yashin',
	respuesta4: 'Leonel Sanchez',
	correcta:'1'
	
},

{
	nom_tipo:'leyenda',
	nom_pregunta:'¿En qué mundial se permitió por primera vez la sustitución de jugadores?',
	respuesta1: 'México 1970',
	respuesta2: 'Italia 1934',
	respuesta3: 'Brasil 1950',
	respuesta4: 'Alemania 1974',
	correcta:'1'

	
},

{
	nom_tipo:'leyenda',
	nom_pregunta:'Qué jugador marco el primer autogol de la historia?',
	respuesta1: 'Manuel Rosas',
	respuesta2: 'Djalma Santos',
	respuesta3: 'Gary Neville',
	respuesta4: 'Ivan Beck',
	correcta:'1'

	
}





];


let juvenil =[

{ 	nom_tipo:'juvenil',
	nom_pregunta:'¿En qué país se celebró la  primera edición de la Copa del Mundo de fútbol?',
	respuesta1: 'Francia' ,	
	respuesta2: 'Inglaterra', 
	respuesta3: 'Uruguay', 
	respuesta4: 'Holanda',
	correcta: '3'



},



{
	nom_tipo:'juvenil',
	nom_pregunta:'¿El mejor gol de la historia de los mundiales es una obra del jugador?',
	respuesta1: 'Terry Butcher',
	respuesta2: 'Gary Lineker',
	respuesta3: 'Diego Maradona',
	respuesta4: 'Jose Batista',
	correcta:'3'

},

{
	nom_tipo:'juvenil',
	nom_pregunta:'¿Qué selección de futbol ha participado en todos los mundiales?',
	respuesta1: 'Alemania',
	respuesta2: 'Argentina',
	respuesta3: 'Brasil',
	respuesta4: 'Italia',
	correcta:'3'


},

{
	nom_tipo:'juvenil',
	nom_pregunta:'¿Qué selección ha ganado en cinco veces esta competición?',
	respuesta1: 'Uruguay',
	respuesta2: 'Alemania',
	respuesta3: 'Brasil',
	respuesta4: 'Italia',
	correcta:'3'

	
},

{
	nom_tipo:'juvenil',
	nom_pregunta:'¿Cuál es goleador histórico de los mundiales?',
	respuesta1: 'Diego Maradona',
	respuesta2: 'Pele',
	respuesta3: 'Ronaldo',
	respuesta4: 'Messi',
	correcta: '3'


}
];

let profesional=[

{nom_tipo:'profesional',
	nom_pregunta:'¿El jugador más veterano en participar en un mundial fue?',
	respuesta1: 'Eusebio',
	respuesta2: 'Helmut Haller',
	respuesta3: 'Roger Milla',
	respuesta4: 'Roger Hunt ',
	correcta:'3'

	
},

{
	nom_tipo:'profesional',
	nom_pregunta:'¿El entrenador que ha ganado dos veces seguidas el mundial?',
	respuesta1: 'Vittorio Pozo',
	respuesta2: 'Luis Parreira ',
	respuesta3: 'Helmut Schön',
	respuesta4: 'Luis Aragonés ',
	correcta:'1'

	
},

{
	nom_tipo:'profesional',
	nom_pregunta:'¿Qué selecciones se enfrentaron en el día celebre “maracanazo”?',
	respuesta1: 'Brasil vs España',
	respuesta2: 'Alemania vs Inglaterra',
	respuesta3: 'Brasil vs Argentina',
	respuesta4: 'Brasil vs Uruguay ',
	correcta:'4'

	
},
{
	nom_tipo:'profesional',
	nom_pregunta:'¿En qué década no se disputo ningún mundial?',
	respuesta1: 'Los 30',
	respuesta2: 'Los 40',
	respuesta3: 'Los 50',
	respuesta4: 'Los 60',
	correcta:'2'

	
},

{
	nom_tipo:'profesional',
	nom_pregunta:'¿En qué año disputo Colombia su primer mundial?',
	respuesta1: '1962',
	respuesta2: '1990',
	respuesta3: '1996',
	respuesta4: '1970',
	correcta:'1'

	
}


];




let estrella=[
{
	nom_tipo:'estrella',
	nom_pregunta:'¿Cuál es  la selección que más finales ha jugado y que no ha ganado ninguna?',
	respuesta1: 'Belgica',
	respuesta2: 'Inglaterra',
	respuesta3: 'Alemania',
	respuesta4: 'Holanda',
	correcta:'4'

	
},

{
	nom_tipo:'estrella',
	nom_pregunta:'¿El gol más rápido que se ha registrado en la historia de los mundiales fue anotado por?',
	respuesta1: 'Hakan Ükür',
	respuesta2: 'Vaclav Masek',
	respuesta3: 'Bryan Robson',
	respuesta4: 'Celso Ayala',
	correcta:'1'
	
},



{
	nom_tipo:'estrella',
	nom_pregunta:'¿La mascota oficial apodada “naranjito” fue en el mundial de:?',
	respuesta1: 'España1982',
	respuesta2: 'Holanda1990',
	respuesta3: 'Francia1988',
	respuesta4: 'Mexico1986',
	correcta:'1'

	
},

{
	nom_tipo:'estrella',
	nom_pregunta:'¿Qué selección se Corono Campeón en el mundial EE.UU 1994?',
	respuesta1: 'Brasil',
	respuesta2: 'Italia',
	respuesta3: 'Suecia',
	respuesta4: 'Inglaterra',
	correcta:'1'
	
},

{
	nom_tipo:'estrella',
	nom_pregunta:'¿Cuándo fue la última vez que se disputo un mundial con 16 selecciones?',
	respuesta1: 'Mexico86',
	respuesta2: 'España82',
	respuesta3: 'Argentina78',
	respuesta4: 'Alemania74',
	correcta:'3'
	
}
	
];

let leyenda=[

{
	nom_tipo:'leyenda',
	nom_pregunta:'¿Cuál es el jugador con la expulsión más rápida en la historia de los mundiales?',
	respuesta1: 'Jorge Batista',
	respuesta2: 'Jose Valdano',
	respuesta3: 'Enzo Scifo',
	respuesta4: 'Gary Lineker',
	correcta:'1'

	
},

{
	nom_tipo:'leyenda',
	nom_pregunta:'¿En qué estadio se disputó la final del Mundial de Francia 1998?',
	respuesta1: 'Velodrome',
	respuesta2: 'Parque de los Principes',
	respuesta3: 'Saint Dennis',
	respuesta4: 'Stade Jacques',
	correcta:'3'

	
},

{
	nom_tipo:'leyenda',
	nom_pregunta:'¿Jugador que ha marcado el único gol olímpico en la historia de los mundiales?',
	respuesta1: 'Marcos Coll',
	respuesta2: 'Cesareo Onzari',
	respuesta3: 'Lev Yashin',
	respuesta4: 'Leonel Sanchez',
	correcta:'1'
	
},

{
	nom_tipo:'leyenda',
	nom_pregunta:'¿En qué mundial se permitió por primera vez la sustitución de jugadores?',
	respuesta1: 'México 1970',
	respuesta2: 'Italia 1934',
	respuesta3: 'Brasil 1950',
	respuesta4: 'Alemania 1974',
	correcta:'1'

	
},

{
	nom_tipo:'leyenda',
	nom_pregunta:'Qué jugador marco el primer autogol de la historia?',
	respuesta1: 'Manuel Rosas',
	respuesta2: 'Djalma Santos',
	respuesta3: 'Gary Neville',
	respuesta4: 'Ivan Beck',
	correcta:'1'

	
}





];



let mundialitoscore= [
	{
		id:1,
		nivel: 'juvenil',
		preguntas:[
		{			

			id : 1, 
			nom_preg:'¿En qué país se celebró la  primera edición de la Copa del Mundo de fútbol?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Francia',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Inglaterra',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Uruguay',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Holanda',
			estado:'0'
			}
																																
		]

			},

			{			

			id : 2, 
			nom_preg:'¿El mejor gol de la historia de los mundiales es una obra del jugador?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Terry Butcher',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Gary Lineker',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Diego Maradona',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Jose Batista',
			estado:'0'
			}

																															
		]

			},

			{			

			id : 3, 
			nom_preg:'¿Qué selección de futbol ha participado en todos los mundiales?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Alemania',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Argentina',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Brasil',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Francia',
			estado:'0'
			}

																														
		]

			},

				{			

			id : 4, 
			nom_preg:'¿Qué selección ha ganado en cinco veces esta competición?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Uruguay',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Alemania',
					estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Brasil',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Italia',
			estado:'0'
			}

																														
		]

			},

			{			

			id : 5, 
			nom_preg:'¿Cuál es goleador histórico de los mundiales?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Diego Maradona',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Pele',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Ronaldo',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Messi',
			estado:'0'
			}

																																
		]
			}
																											
									
									
			 ]													 
														 
														 
		},	

		{

		id:2,
		nivel: 'profesional',
		preguntas:[
		{			

			id : 1, 
			nom_preg:'¿El jugador más veterano en participar en un mundial fue?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Eusebio',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Helmut Haller',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Roger Milla',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Roger Hunt',
			estado:'0'
			}
																																
		]

		},
			{			

			id : 2, 
			nom_preg:'¿El entrenador que ha ganado dos veces seguidas el mundial?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Vittorio Pozo',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Luis Parreira',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Helmut Schön',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Luis Aragonés',
			estado:'0'
			}
																																
		]

			},

			{			

			id : 3, 
			nom_preg:'¿Qué selecciones se enfrentaron en el día celebre “maracanazo”?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Brasil vs España',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Alemania vs Inglaterra',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Brasil vs Argentina',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Brasil vs Uruguay',
			estado:'1'
			}
																																
		]

			},

			{			

			id : 4, 
			nom_preg:'¿En qué década no se disputo ningún mundial?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Los 30',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Los 40',
				estado:'1'
			},
			{
				id: 3 ,
				titulo_resp:'Los 50',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Los 60',
			estado:'0'
			}
																																
		]

			},
			{			

			id : 5, 
			nom_preg:'¿En qué año disputo Colombia su primer mundial?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'1962',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'1990',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'1996',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'1970',
			estado:'0'
			}
																																
		]

			}

											
			  ]
														 
														 
														 
		},	
		{

		id:3,
		nivel: 'estrella',
		preguntas:[
		{			

			id : 1, 
			nom_preg:'¿Cuál es  la selección que más finales ha jugado y que no ha ganado ninguna?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Belgica',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Inglaterra',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Alemania',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Holanda',
			estado:'1'
			}
																																
		]

			},
			{			

			id : 2, 
			nom_preg:'¿El gol más rápido que se ha registrado en la historia de los mundiales fue anotado por?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Hakan Ükür',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Vaclav Masek',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Bryan Robson',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Celso Ayala',
			estado:'0'
			}
																																
		]

			},
			{			

			id : 3, 
			nom_preg:'¿La mascota oficial apodada “naranjito” fue en el mundial de?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'España1982',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Holanda1990',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Francia 1988',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Mexico1986',
			estado:'0'
			}
																																
		]

			},
			{			

			id : 4, 
			nom_preg:'¿Qué selección se Corono Campeón en el mundial EE.UU 1994?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Brasil',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Italia',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Suecia',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Inglaterra',
			estado:'0'
			}
																																
		]

			},
			{			

			id : 5, 
			nom_preg:'¿Cuándo fue la última vez que se disputo un mundial con 16 selecciones?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Mexico86',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'España82',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Argentina78',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Alemania74',
			estado:'0'
			}
																																
		]

			}
																								
									
									
			 ]
														 
														 
														 
			},
		{


		id:4,
		nivel: 'leyenda',
		preguntas:[
		{			

			id : 1, 
			nom_preg:'¿Cuál es el jugador con la expulsión más rápida con 52 segundos en la historia de los mundiales?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'José Batista',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Jorge Valdano',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Enzo Scifo',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Gary Lineker',
			estado:'0'
			}

																																
		]

			},

			{			

			id : 2, 
			nom_preg:'¿En qué estadio se disputó la final del Mundial de Francia 1998?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Velodrome',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Parque de los Principes',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Saint Dennis',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Stade Jacques',
			estado:'0'
			}

																																
		]

			},
			{			

			id : 3, 
			nom_preg:'¿Jugador que ha marcado el único gol olímpico en la historia de los mundiales?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Marcos Coll',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Cesareo Onzari',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Lev Yashin',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Leonel Sanchez',
			estado:'0'
			}

																																
		]

			},
			{			

			id : 4, 
			nom_preg:'¿En qué mundial se permitió por primera vez la sustitución de jugadores?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'México 1970',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Italia 1934',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Brasil 1950',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Alemania 1974',
			estado:'0'
			}

																																
		]

			},
			{			

			id : 5, 
			nom_preg:'¿Qué jugador marco el primer autogol de la historia?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Manuel Rosas',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Djalma Santos',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Gary Neville',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Ivan Beck',
			estado:'0'
			}

																																
		]

			}
																							
				
			 ]
														 
														 
														 
			}

						
        ];



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ********************************************************************
// ******************************************************************

// URL raiz de la api
// http://127.0.0.1:5000
app.get('/', (req, res) => {
    res.status(200).send("BIENVENDO A MUNDIALITO SCORE")
})


// URL para listar todos los mundialitos
// http://127.0.0.1:5000/mundialitoscore
app.get('/mundialitoscore', (req, res) => {
    res.send(mundialitoscore)
})

// URL para listar todos los niveles
// http://127.0.0.1:5000/niveles
app.get('/registro', (req, res) => {
    res.send(registro)
})

// URL para listar todos los niveles
// http://127.0.0.1:5000/niveles
app.get('/respuestasprofesional', (req, res) => {
    res.send(respuestasprofesional)
})

// URL para listar todos los niveles
// http://127.0.0.1:5000/niveles
app.get('/niveles', (req, res) => {
    res.send(niveles)
})

// URL para listar todos los niveles
// http://127.0.0.1:5000/niveles
app.get('/preguntas', (req, res) => {
    res.send(preguntas)
})

// URL para listar todos los niveles
// http://127.0.0.1:5000/niveles
app.get('/mundiales', (req, res) => {
    res.send(mundiales)
})

// URL para listar todos los usuarios
// http://127.0.0.1:5000/users
app.get('/users', (req, res) => {
    res.send(users)
})

// URL para listar todos los usuarios
// http://127.0.0.1:5000/users
app.get('/respuestascorrectas', (req, res) => {
    res.send(respuestascorrectas)
})

// URL para listar todos los estados
// http://127.0.0.1:5000/estados
app.get('/estado', (req, res) => {
    res.send(estado)
})


// URL para listar todos las preguntas juvenil
// http://127.0.0.1:5000/juvenil
app.get('/juvenil', (req, res) => {
    res.send(juvenil)
})


// URL para listar todos las preguntas profesional
// http://127.0.0.1:5000/profesional
app.get('/profesional', (req, res) => {
    res.send(profesional)
})



    // URL para listar todos las preguntas leyenda
// http://127.0.0.1:5000/estrella
app.get('/estrella', (req, res) => {
    res.send(estrella)
})

    // URL para listar todos las preguntas leyenda
// http://127.0.0.1:5000/estrella
app.get('/leyenda', (req, res) => {
    res.send(leyenda)
})
// URL para añadir un usuario
// http://127.0.0.1:5000/users

app.post('/users', (req, res) => {
    let data = req.query;
    users.push(data.user_name)
    res.send("New user add")
})

// URL para actualizar un usuario
// http://127.0.0.1:5000/users/1
app.patch('/users/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    users[params.id] = data.user_name
    res.send("User update")
})

// URL para eliminar un usuario
// http://127.0.0.1:5000/users/1
app.delete('/users/:id',(req, res) => {
    let params = req.params;
    users.splice(params.id, 1);
    res.send('User delete')
})
app.post('/signup', (req, res) => {
    let data = req.body;
    let consecutive = users.length;
     let itemUser = {
         id: consecutive,
         user: data.user,
         password: data.pass
    };
    users.push(itemUser)
   // res.send(itemUser)
     res.send("usuario creado correctamente")
})
app.post('/login', (req, res) => {
    let data = req.body;
    let login = [{searchUser: false,id: '0',user: '',password: ''}];

    users.some(function (value, index, _arr) {
        if( (value.user == data.user) && (value.password == data.pass) ){
            login[0]['searchUser'] = true;
            login[0]['id'] = value.id;
            login[0]['user'] = value.user;
            login[0]['password'] = value.password;
            return true;
        }else{
            return false;
        }
    });

    res.send(login)
})

// ********************************************************************
// ********************************************************************

// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})