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
 * loop over data array and show only the relevant one.We can map over it
 */
export const fetchDailyData = async()=>{
  try{
const {data}= await axios.get(`${url}/daily`);
const modifiedData =data.map((dailyData)=>({
  confirmed: dailyData.confirmed.total,
  deaths: dailyData.deaths.total,
  dailyData: dailyData.reportDate,
}));
return modifiedData;
  }catch(error){

  }
}