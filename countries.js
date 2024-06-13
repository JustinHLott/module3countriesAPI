const info = document.querySelector('#info');
const list = document.querySelector('#list');
const domain = document.querySelector('#domain');
const text = document.querySelector('.text');
const results = document.querySelector('.results');

const getCountries = async ()=>{
    const response = await fetch(
        //"http://api.countrylayer.com/v2/all?access_key=<YOUR_ACCESS_KEY>");
        "https://raw.githubusercontent.com/Davis-Technical-College/countries-json/master/countries.json");
    if(response.status !==200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
};

const getTheText = function(){
    const theText = text.value;
    if (!theText.length > 0){
        alert("You must enter text into the text box.")
    } else {
        return theText
    }
}

//First radio button
const addInfo=function(data){
    results.innerHTML ='';
    let theText = getTheText().toLowerCase().trim();
    console.log(theText);
    if(theText){
        console.log(data);
        data.forEach(country=>{
            if(country.name.toLowerCase().trim().includes(theText)===true){
                    results.innerHTML += `<p>About ${country.name}<br><br>
                    country: ${country.name}<br>
                    region: ${country.region}<br>
                    top level domain: ${country.topLevelDomain}</p>`;
            }
        })
    }else{
        return;
    }
};

const getRegions = function(data,theText){
    let regions=[];
    data.forEach(country=>{
        if(country.name.toLowerCase().trim().includes(theText)){
            regions=country.region;
        }
    })

    return regions;
};
//second radion button
const addList=function(data){
    results.innerHTML ='';
    let theText = getTheText().toLowerCase().trim();
    let regions = [];
    console.log(theText);
    if(theText){
        data.forEach(country=>{
            if(country.name.toLowerCase().trim().includes(theText)){
                regions = getRegions(data,theText);
                
            }
        })
        let countries = `<p>Countries in region ${regions}:<br>`
        data.forEach(country=>{
            if(country.region===regions){
                countries += `${country.name}<br>`;
            }
        })
        results.innerHTML=countries+'</p>';
    }else{
        return;
    }
};

const addDomain=function(data){
    results.innerHTML ='';
    let theText = getTheText().toLowerCase().trim();
    let domain = [];
    let countries = `<p>`
    if(theText){
        data.forEach(country=>{
            country.topLevelDomain.forEach(theDomain=>{
                if(theDomain.toLowerCase().trim().includes(theText)){
                    domain = getRegions(data,theText);
                    countries += `Top Level Domain ${country.topLevelDomain} is for ${country.name}<br><br>`;
                }
            })
            
        })
        results.innerHTML=countries+'</p>';
    }else{
        return;
    }
};

getCountries()
    .then(data=> {
        info.addEventListener('click',e=>{
            addInfo(data);
        })
        list.addEventListener('click',e=>{
            addList(data);
        })
        domain.addEventListener('click',e=>{
            addDomain(data);
        })
    })
    .catch(err => console.log('rejected:', err.message));