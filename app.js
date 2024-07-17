 let tblCounties = document.getElementById("tblCountries");
let idCard = document.getElementById("idCard");
 let tableBody=`<tr>
            <th>County Name</th>
            <th>Flag</th>
      
        </tr>`;
 let details ;
 fetch(" https://restcountries.com/v3.1/all")
 .then((res)=>res.json())
 .then(data=>{
    data.forEach((element) => {
       

        tableBody+=`
                <tr>
                
                    <td><h1>${element.name.common}</h1>
                
                    <br>Capital    : ${element.capital}</br>
                    <br>Region     : ${element.region}</br>
                    <br>Population : ${element.population}</br>
                    </td>
                    <td>
                                           <div class="card" style="width: 18rem;">
                        <img src="${element.flags.png}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title font-monospace " >${element.name.official}</h5>
                            <p class="card-text">"${element.flags.alt}"</p>
                            <a href="${element.maps.googleMaps}" class="btn btn-primary">Go to Map</a>
                        </div>
                        </div>
                       
                    </td>
            
                   
                </tr>`
              


        //////////////
        

    })

    

    tblCounties.innerHTML=tableBody
    idCard.innerHTML=details
   
 })
 function searchCountry(){
    let userInput = document.getElementById("txtInput").value;

    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
            console.log(obj);
            flagImg.src=obj.flags.png
            name.innerText=obj.name.common
            officialName.innerText=obj.name.official

            region.innerText=obj.region;
            population.innerText=obj.population
        })
    })
}