const axios = require('axios');

//Get all the pages
const getList =async(url, token, country) => {
    let response= await axios.post(url , {country},{ headers: { Authorization: token} });
    console.log(response)
    if(response.status === 400 || response.status === 500)
    return response.data.message;

    return  response.data;
}

const getCountry = async( url) =>{
    let count = await axios.get(url);
    let data= count.data;

    if(count.status === 400 || count.status === 500)
    return count.data;

    return data.country
}

export { getList, getCountry }