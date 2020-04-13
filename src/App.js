import React,{ Component} from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

/**
 * Need to have country in the state of app.js because it is the parent component of all the components.
 */
class App extends Component{

    state={
        data:{},
        country:'',
    }
    async componentDidMount(){
        const fetchdata =await fetchData();
        this.setState({data: fetchdata});
    }
    /**
     * State to change the country
     * Pass this method as a prop to country picker in this file only
     */
    handleCountryChange=async(country)=>{
        //fetch data
        const fetchdata =await fetchData(country);
        this.setState({data: fetchdata,country:country});

        //set data
    }
    render(){
        //take data outside. Data is a named constant
        const {data,country}=this.state;

//pass data as props to card component
        return (
            <div className={styles.ccontainer}>
            
              <Cards data={data}/>
              <CountryPicker handleCountryChange={this.handleCountryChange}/>
              <Chart data={data} country={country}/>
            
            </div>
        )
    }
}
export default App;