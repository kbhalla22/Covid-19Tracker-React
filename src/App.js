import React,{ Component} from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';


class App extends Component{

    state={
        data:{},
    }
    async componentDidMount(){
        const fetchdata =await fetchData();
        this.setState({data: fetchData});
    }
    render(){
        //take data outside. Data is a named constant
        const {data}=this.state;

//pass data as props to card component
        return (
            <div className={styles.ccontainer}>
            
              <Cards data={data}/>
              <CountryPicker/>
              <Chart/>
            
            </div>
        )
    }
}
export default App;