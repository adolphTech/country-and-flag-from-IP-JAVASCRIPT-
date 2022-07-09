async function getCountry(){
    // In response, we are getting all the structured data from the geo-location api and store it in a variable called response.
    response = await axios .get("https://geo.ipify.org/api/v2/country?apiKey=at_5DAB1aP4WTrrt42V7haIbcR1oJLo0&") 

    const tag = document.createElement("img")
    // Here we are setting the src link of the img element we just created through dom.
    tag.setAttribute("src",`https://countryflagsapi.com/png/${response.data.location.country}`)
    flag.appendChild(tag)
    };
// Here we are just declaring that function. It's ready to use anywhere.
getCountry();


    

