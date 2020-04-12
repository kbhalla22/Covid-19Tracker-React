import axios from "axios";

const url = "http://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const{ data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
}
/**
 * {data}acts like an array
 */
export const fetchDailyData = async()=>{
  try{
const {data}= await axios.get(`${url}/daily`);
console.log(data);
  }catch(error){

  }
}