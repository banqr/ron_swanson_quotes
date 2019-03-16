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

const wiseRon = (data, selektor, broj) => {
    const paraf = document.createElement('h4')
    
    const misao = data[broj]
    paraf.textContent = misao
    selektor.appendChild(paraf)
}

const ronGif = (data, selektor, broj) => {
    const image = document.createElement('img')
    
    image.src = data.data[broj].images.original.webp
    selektor.appendChild(image)
}

callAPI(API_URL_SWANSON)
    .then(data => wiseRon(data, main, 0))
callAPI(API_GIPHY)
    .then(data => ronGif(data, main, 3))
