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
                    <td>${element.name.common}</td>
                    <td>${element.flag}</td>
                </tr>`
    })

    tblCounties.innerHTML=tableBody
 })
 