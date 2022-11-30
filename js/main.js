const resultsDiv = document.getElementById("resultsBox")
const quotesDiv = document.getElementById("quotesBox")


const quotesArray = [];



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6de12a74a5mshe9e3ca19c9b329dp1b5d75jsnfb6a3f4ebfd6',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

const options2 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6de12a74a5mshe9e3ca19c9b329dp1b5d75jsnfb6a3f4ebfd6',
        'X-RapidAPI-Host': 'love-quote.p.rapidapi.com'
    }
};

async function getLove() {
    
    resultsDiv.innerHTML = "";
    quotesDiv.innerHTML = "";

    
    
    
    
    const sname = document.getElementById('query1');
    const fname = document.getElementById('query2');

    const loveResultsResp = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname.value}&fname=${fname.value}`, options)

    const loveResults = await loveResultsResp.json();
    resultsDiv.innerHTML += `${loveResults.percentage}%`



    for (let i = 0; i < 5; i++) {
    
    const loveQuoteResp = await fetch('https://love-quote.p.rapidapi.com/lovequote', options2)
    const loveQuote = await loveQuoteResp.json()
    quotesArray[i] = loveQuote

    }

    writeCards(0);
}


function writeCards(sort) {
    quotesDiv.innerHTML = "";

    let arr = quotesArray;

    if (sort === 1) {

        arr = quotesArray.sort(compare);

    }
        for (let i = 0; i < 5; i++)
        {
            let q = "";
            if (!arr[i].title) {
                q = arr[i].quote;
            }
            else {
                q = arr[i].title;
            }

            quotesDiv.innerHTML += 
            `<div id="quotesCard" class="card">
            <div class="card-body">
            <h5 class="card-title">${arr[i].author}</h5>
            <p class="card-text">${q}</p>
            </div>
            </div>`
        }




}

function compare( a, b ) {
    if ( a.author[0] < b.author[0] ){
      return -1;
    }
    if ( a.author[0] > b.author[0] ){
      return 1;
    }
    return 0;
  }