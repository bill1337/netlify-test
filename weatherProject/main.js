const button = document.querySelector(".button")
const inputValue = document.querySelector(".inputValue")
const name = document.querySelector(".name")
const desc = document.querySelector(".desc")
const temp = document.querySelector(".temp")
const img = document.querySelector(".image")
const iconCode = document.querySelector(".icon");

button.addEventListener('click', function (){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&units=imperial&appid=61dcc0033e94c4172d2bb94bb607fc5d')
.then(response => response.json())
.then(data => {
    const nameValue = data['name']
    const tempValue = data['main']['temp']
    const descValue = data['weather'][0]['description']
    const img = document.querySelector(".image")
    const icon = data['weather'][0]['icon']
    console.log(data);
    const png = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

    name.innerHTML = nameValue
    temp.innerHTML = tempValue + ' degrees fahrenheit'
    desc.innerHTML = descValue
    
    img.src = png 
    if(icon == '03d'){
        document.body.style.backgroundColor = '#B0C4DE'
    }else if (icon == '01d'){
        document.body.style.backgroundColor = '#00BFFF'
    }else if (icon == '01n'){
            document.body.style.backgroundColor = '#191970'
    }else if (icon == '10d'){
        document.body.style.backgroundColor = '#C0C0C0'
    }else if (icon == '10n'){
    document.body.style.backgroundColor = '#808080'
    }else if (icon == '11d'||'11n'){
    document.body.style.backgroundColor = '#696969'
}   else{
    document.body.stylele.backgroundColor = 'white'
}
})


.catch(err => alert("Wrong City name!"))
})