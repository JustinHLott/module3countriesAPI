# Countries API
## How to use
1.  First you must select an option (one of the three radio buttons)
2.  Type text into the "Enter Request" textbox
3.  Press enter on your keyboard

You can access the webpage [HERE!](https://justinhlott.github.io/module3countriesAPI/)

![picture of multiple country's flags](flags.JPG)

## There are 3 options for running this webpage:
1. Get info about the country
    * Type a country name in step 2 above
    * For example "*Bermuda*"
    * Information for the country will be listed
2. List all countries in a region
    * Type a region in the text box per step 2 above
    * For example "*Americas*"
    * A list of countries for that region will be shown
3. Find country with given top level domain
    * Type a top level domain in the text box per step 2 above
    * For examble "*ly*"
    * **NOTE:** *Do not use a period before the "ly"*

# Code Tricks
### CSS font size
To make the font large in CSS I used the `font-size: large;` command and it worked really well.

### To link to the API I used this code
```js
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
```