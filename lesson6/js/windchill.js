





function getWindchill(windSpeed, temp){

//let windChill = document.getElementById('windChill');

let wc = 35.74 + 06215 * temp -35.75 * Math.pow(speed, 0.16) + 0.4275 * Math.pow(speed, 0.16);
console.log(wc);

wc= Math.floor(wc);

wc= (wc > temp) ? temp : wc;

console.log(wc);

//wc = 'Feels like '+wc+'F';
//getWindchill.innerHTML = wc;
return wc;

}