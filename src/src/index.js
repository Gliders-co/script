/* const Gliders = require('./Fetch');

 const GlidersScript = { init : async function(componentId, apiKey) {

    let data = await Gliders(componentId,apiKey);
 
    const div = document.getElementById ("gliders-component");
    //const div = document.createElement('div');
        const node=    document.createRange()
        .createContextualFragment(data)

        div.insertBefore(node, div.firstChild);
  
    return div;


  }
}
  
module.exports = GlidersScript */
  //document.body.appendChild(GlidersScript.init());
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
