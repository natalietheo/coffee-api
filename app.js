const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchNASAData = async () => {
    try {
        const response = await fetch(`${url}${api_key}`)
        const data = await response.json()
        console.log('NASA APID data', data)
        displayData(data)
    }   catch (error) {
        console.log(error)
    }
}

fetchNASAData()

const displayData = data => {
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('image').src = data.hdurl
    document.getElementById('explanation').textContent = data.explanation

}