const btn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

// no need to reffere it will take 'id' directly ; code is working
// const text = document.getElementById('text');
// const definition = document.getElementById('definition'); 


async function apiCall(word) {
    const options = {
        method: 'GET',
        url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
        params: {word: word},
        headers: {
          'X-RapidAPI-Key': 'a98681b022mshe045130ae3a435ep1ab093jsn91494ae077fc',
          'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
      };
    
    try {
        const response = await axios.request(options);
        console.log(response);

        text.innerHTML = response.data.word;
        definition.innerHTML = response.data.definition;
        
    } catch (error) {
        console.error(error);
    }
}

btn.addEventListener('click',(e) => {
    e.preventDefault();
    const word = searchInput.value;  
    apiCall(word);
})

  