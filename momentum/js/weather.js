const API_KEY="6fdc37fdc7a871df51df85cf8bf48e7d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
}

function onGeoError(){
    alert("Can't find you. No Weather for you!")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
