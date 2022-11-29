



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6de12a74a5mshe9e3ca19c9b329dp1b5d75jsnfb6a3f4ebfd6',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

function getLove() {
    
    const sname = document.getElementById('query1');
    const fname = document.getElementById('query2');
    console.log(sname.value)
    console.log(fname.value)

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname.value}&fname=${fname.value}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



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