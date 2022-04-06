async function getCountry(){
    response = await axios .get("https://geo.ipify.org/api/v2/country?apiKey=at_5DAB1aP4WTrrt42V7haIbcR1oJLo0&") 

    const tag = document.createElement("img")
    tag.setAttribute("src",`https://countryflagsapi.com/png/${response.data.location.country}`)
    flag.appendChild(tag)
    };

getCountry();


    

