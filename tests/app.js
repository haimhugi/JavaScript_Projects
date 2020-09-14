
    console.log('working');

function func(city){
let weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2f0319ba44434d6fc2224c5fef92f158&units=metric`
let gifAPI = `http://api.giphy.com/v1/gifs/search?api_key=ZwOmhpLy05IlOhWOiBTczYCChCwteT4q&q=`;
Weather(weatherAPI,gifAPI);
}

async function Weather(weatherAPI,gifAPI){
    
    let respone = await fetch(weatherAPI);
    let json = await respone.json();
    let temp =json.main.temp;
    if(temp > 29)
    {
        gifAPI += 'sun';
    }
    else if(temp<30 && temp>20)
    {
        gifAPI += 'cold';
    }
    else {
        gifAPI += 'freeze';
    }
    let respone2 = await fetch(gifAPI);
    let json2 = await respone2.json();
    console.log(json);
   
    document.getElementById("h2").innerHTML =`The degree in ${json.name} is ${temp}`; 
    
    document.getElementById("img").src = `${json2.data[Math.floor(Math.random() * 10)].images.fixed_height_downsampled.url}`; 



}
