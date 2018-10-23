/*jshint esversion: 6 */ 
import axios from 'axios';

const API_KEY = '4eefda510f4ba87030418495ce1f207f';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
		const url = `${ROOT_URL}&q=${city},nz`;
		const request = axios.get(url);

console.log('Request:', request);

	 return {
	 	type: FETCH_WEATHER,
	 	payload: request
	 };
}

// Performing a GET request

// Make a request for a user with a given ID

// axios.get('user?ID=12345')
// 	.then(function (response) {
// 		console.log(response);
// 	});



// 	.catch (function(response){
// 		console.log(response);

// 	});