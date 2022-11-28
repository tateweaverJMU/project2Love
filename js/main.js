
const element = document.getElementById("butt");
element.addEventListener("click", getLove);


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

function getLove() {
    const sname = document.getElementById('query1');
    const fname = document.getElementById('query2');

}





// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'love-quote.p.rapidapi.com'
// 	}
// };

// fetch('https://love-quote.p.rapidapi.com/lovequote', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));