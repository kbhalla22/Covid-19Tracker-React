import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
/**
 * Importing library for displaying charts
 */
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
/**
 * In use state hook we already have the setter method
 * Inside, we can make the function as async.
 * Await means we wait for it. It is a promise
 * fetchAPI() is like a self calling function
 * we will 2 different charts so we have to create constants for each one of them.
 * 2nd argument is empty array because it behaves like component did mount. only executes once. 
 */
const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };

    fetchAPI();
  },[]);
  /**
   * Data for line will be an object
   * if daily data is available , then we return line chart, otherwise we return null
   * in parameter()loop through daily data and destructure the date
   */
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "#red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true
          }
        ]
      }}
    />
  ) : null;
  /**
   * Barchart is equal to some jsx. If data is there then we show bar chart. else return null
   * data is coming from props
   */
  const barChart = (confirmed ? (
    <Bar
      data={
        {
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0,0,255,0.5)",
                "rgba(0,255,0,0.5)",
                "rgba(255,0,0,0.5)"
              
            
          ],
          data: [confirmed.value, recovered.value, deaths.value]
        }]
    }}
        options = {{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }
      }
    />
  ) : null
  );
  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};
export default Charts;
