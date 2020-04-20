console.log('this is a test script')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageText = document.querySelector('#weather-message')
const messageError = document.querySelector('#error-message')



document.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
            messageText.textContent = ''
            messageError.textContent = data.error
        }
        else{
            console.log(data.location)
            console.log(data.weather)
            messageText.innerHTML = 'location: ' + data.location + ' <br>weather: ' +data.weather
            messageError.textContent = ''
        }
    })
})
})