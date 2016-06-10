var $ = window.jQuery;
// Con esto mandamos pedir la informacion al API aqui se muestra el query que se le hace y la API key
var url = 'http://gateway.marvel.com:80/v1/public/series?title=avengers&apikey=ef4f7c47dbd78ba247dc132938e4c30a';
var key = 'apikey=ef4f7c47dbd78ba247dc132938e4c30a';

// pasamos como variable la url de la consulta
Promise.resolve($.get(url))
// entonces
.then(function (results) {
	// Guardamos en characters la lista de los personajes
	var characters = results.data.results[0].characters.items;
	var promises = [];
	// guardamos en esta variable la url del personaje concatenando la key del api
	// regresamos el promise con la URL character
	for (var i in character) {
		var character = character[i];
		var characterUrl = character.resourceURI + '?' + key;
		promises.push(Promise.resolve($.get(characterUrl)));
	}

	return Promise.all(promises);
}).then(function (characters) {
	characters = Array[20];
	console.log(characters);
}).catch(function (err) {
	debugger;
	console.error(err);
});