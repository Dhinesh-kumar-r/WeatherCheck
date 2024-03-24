let photos = async () => {
    let search = document.getElementById("pic").value;
    let api = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=a23b2bbaaf05f2439d6f00ad99f9a146&units=metric");
    let res = await api.json();
    console.log(res);

    let display = document.getElementById("dis");
    let htmlContent = `
        <div>
            <h2>${res.name}</h2>
            <h3>${res.sys.country}</h3>
            <p>Temperature: ${res.main.temp} celcius</p>
            <p>Description: ${res.weather[0].description}</p>
            <p>Humidity: ${res.main.humidity}%</p>
        </div>
    `;

    display.innerHTML = htmlContent;
}

photos();
                                                                   