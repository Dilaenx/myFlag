 let tblCounties = document.getElementById("tblCounties");

 let tableBody=`<tr>
            <th>County Name</th>
            <th>Flag</th>
        </tr>`;
 
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
                    <a class="btn btn-primary" href="${element.maps.googleMaps}">Go To Maps</a>
                    </td>
                    <td><img src="${element.flags.png}"></td>
                </tr>`
    })

    tblCounties.innerHTML=tableBody
 })
 