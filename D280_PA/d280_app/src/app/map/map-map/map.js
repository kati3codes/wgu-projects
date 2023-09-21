document.querySelectorAll(".allPath").forEach(worldMap => {
    worldMap.addEventListener("mouseover", function () {
      worldMap.style.fill = "pink"
    })
    worldMap.addEventListener("mouseleave", function () {
      worldMap.style.fill = "black"
       
    })

    worldMap.addEventListener("click",function(){
        async function getData(){
          let url= 'https://api.worldbank.org/V2/country/'+worldMap.id+'?format=json'
          let response = await fetch(url);
          let data = await response.json();
          let dataPath = data[1]
          let countryName = dataPath[0].name
          document.getElementById("name").innerText = countryName
          let countryCapital = dataPath[0].capitalCity
          document.getElementById("capital").innerText = countryCapital
          let countryRegion = dataPath[0].region.value
          document.getElementById("region").innerText = countryRegion
          let countryIncome = dataPath[0].incomeLevel.value
          document.getElementById("income").innerText = countryIncome
          let countryLong = dataPath[0].latitude
          document.getElementById("latitude").innerText = countryLatitude
          let countryLat = dataPath[0].longitude
          document.getElementById("Longitude").innerText = countryLongitude
          
          }
          getData()
        })


})