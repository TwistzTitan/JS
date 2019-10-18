const request = require('request')
const tokenClima="e6b3b28cf7cb9daeb167e12c94dc2c20"
let lat ='-22.9031252'
let long ='-43.1802837'
const url = "https://api.darksky.net/forecast/"+tokenClima+"/"+lat+","+long;


request({ 'url':url, 'json':true},(err,resp)=>{
    let temp = resp.body.currently.temperature; 
    let probPrecip = resp.body.currently.precipProbability; 

console.log("\n\tTemperature: "+temp+" F\n\tPrecipitation Probability: "+probPrecip+" %\n");
})
