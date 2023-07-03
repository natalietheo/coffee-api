const url = 'https://coffee.alexflipnote.dev/random'

const fetchNasaPic = async () => {
    try {
        const response = await fetch(`${url}`)
        const data = await response.json()
        console.log('coffee pic', data)
    }   catch (error) {
        console.log(error)
    }
}

fetchCoffeePic()

const displayCoffeePic = data => {
    document.getElementById('picture').src = 
}