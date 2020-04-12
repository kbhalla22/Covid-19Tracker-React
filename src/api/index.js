import axios from 'axios';

const url= 'http://covid19.mathdro.id/api';

const fetchData=async()=>{
try{
const response=await axios.get(url);
}
catch(error){

}
}