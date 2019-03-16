const API_GIPHY = 'https://api.giphy.com/v1/gifs/search?api_key=tRoV6ISux00Pr8859b5RJF0p0BSACosj&q=ron+swanson&limit=50&offset=0&rating=G&lang=en'
const API_URL_SWANSON = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
const main = document.querySelector('#main')


const callAPI = async (api) => {
    try {
        const response = await fetch(api)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.log('Shit')
    }
}

const wiseRon = (data, selektor) => {
    const paraf = document.createElement('h4')

    const misao = data[0]
    paraf.textContent = misao
    selektor.appendChild(paraf)
}



callAPI(API_GIPHY)
callAPI(API_URL_SWANSON)
    .then(data => wiseRon(data, main))