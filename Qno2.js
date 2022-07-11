var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){

    var countrydata = JSON.parse(this.responseText)
    for (let i of countrydata)
     {console.log(i.name)
     console.log(i.region)
     console.log(i.subregion)
     console.log(i.population)
     console.log(" ")
    }
// all countries flags 
   for (let i of countrydata)
    {console.log(i.flags)
        console.log(' ')//just printing all the countryname.
        
   }
}
