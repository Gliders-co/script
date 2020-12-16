const { getList, getCountry} = require('./api');

function Gliders(componentId, apiKey){
 // const url = `http://ec2-3-88-66-129.compute-1.amazonaws.com:8001/api/user/${componentId}`
  const url = `http://localhost:8001/api/user/${componentId}`
  const requestUrl = "http://ip-api.com/json";
  const response=[];
  let country =   getCountry(requestUrl)
                      .then((res) => {return res.country});
  let html =  getList(url, apiKey, country)
                      .then((res) =>{
                         return res.data;
                      });
  response.push({
      html: html,
      country: country
  });
  return html;
}


module.exports = Gliders;
