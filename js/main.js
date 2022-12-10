const resultsDiv = document.getElementById("resultsBox")
const quotesDiv = document.getElementById("quotesBox")


let quotesArray = [];



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
        'X-RapidAPI-Key': '1e37376500mshba77545fa443fe8p19c17fjsn36ed24b7d481',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
    // method: 'GET',
    // headers: {
    //     'X-RapidAPI-Key': '6de12a74a5mshe9e3ca19c9b329dp1b5d75jsnfb6a3f4ebfd6',
    //     'X-RapidAPI-Host': 'love-quote.p.rapidapi.com'
    // }
};

async function getLove() {
    
    quotesArray = [];
    resultsDiv.innerHTML = "";
    quotesDiv.innerHTML = "";

    
    
    
    
    const sname = document.getElementById('query1');
    const fname = document.getElementById('query2');

    const loveResultsResp = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname.value}&fname=${fname.value}`, options)

    const loveResults = await loveResultsResp.json();
    resultsDiv.innerHTML += `${loveResults.percentage}%`



    for (let i = 0; i < 5; i++) {
    
        const RandomquotesResp = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options2);
        const quote = await RandomquotesResp.json()
        quotesArray[i] = quote
        // console.log(quote)
        // console.log(quote.originator.name)

        //const loveQuoteResp = await fetch('https://love-quote.p.rapidapi.com/lovequote', options2)
        //const loveQuote = await loveQuoteResp.json()
        // if (!loveQuote.title) {
        //     quotesArray[i] = loveQuote
        // }

    }

    writeCards(0);
}


function writeCards(sort) {
    // for (let i = 0; i < 5; i++)
    // {
    //     //
    //     let q = "";
    //     if (!arr[i].title) {
    //         q = arr[i].quote;
    //     }
    //     else {
    //         q = arr[i].title;
    //     }
    // }


    if (quotesArray.length === 0) {
        return;

    }
    quotesDiv.innerHTML = 
    `<button class="sort" type="button" onclick="writeCards(1)">Sort A-Z</button>
    <button class="sort" type="button" onclick="writeCards(2)">Sort Length</button>
    <button class="sort" type="button" onclick="writeCards(0)">Reset</button>
    <input type="text" name="search" id="searchResults" value="Search...">
    <button class="sort" type="button" onclick="writeCards(3)">Search</button>`;

    let arr = []

    if (sort === 0) {
        arr = quotesArray;
    }

    if (sort === 1) {
        arr = [...quotesArray]
        arr.sort(compareAlpha);

    }

    if (sort === 2) {
        arr = [...quotesArray]
        arr.sort((a,b) => (a.quote).length - (b.quote).length)
    }

    if (sort === 3) {
        let PATTERN = document.getElementById("searchResults").value
        arr = [...quotesArray]
        filtered = arr.filter(function (str) { return str.indexOf(PATTERN) === -1; });
    }

        
        
        // for (let i = 0; i < 5; i++)
        // {
        //     let q = "";
        //     if (!arr[i].title) {
        //         q = arr[i].quote;
        //     }
        //     else {
        //         q = arr[i].title;
        //     }

        //     quotesDiv.innerHTML += 
        //     `<div id="quotesCard" class="card">
        //     <div class="card-body">
        //     <h5 class="card-title">${arr[i].author}</h5>
        //     <p class="card-text">${q}</p>
        //     </div>
        //     </div>`
        // }
        console.log(arr.length)
        for (let i = 0; i < 5; i++)
        {
            // let q = "";
            // if (!arr[i].title) {
            //     q = arr[i].quote;
            // }
            // else {
            //     q = arr[i].title;
            // }

            quotesDiv.innerHTML += 
            `<div id="quotesCard" class="card">
            <div class="card-body">
            <h5 class="card-title">${arr[i].content}</h5>
            <p class="card-text">${arr[i].originator.name}</p>
            </div>
            </div>`
        }




}

function compareAlpha( a, b ) {
    if ( a.originator.name[0] < b.originator.name[0] ){
      return -1;
    }
    if ( a.originator.name[0] > b.originator.name[0] ){
      return 1;
    }
    return 0;
}