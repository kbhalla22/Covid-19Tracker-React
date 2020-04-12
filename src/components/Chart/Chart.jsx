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
 */
const Charts = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };

    fetchAPI();
  });
  /**
   * Data for line will be an object
   * if daily data is available , then we return line chart, otherwise we return null
   * in parameter()loop through daily data and destructure the date
   */
  const lineChart = (dailyData.length ? (
    <Line
      data={{
        labels: dailyData(({ date }) => date),
        datasets: [
          {
            data: dailyData(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true
          },
          {
            data: dailyData(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "#red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true
          }
        ]
      }}
    />
  ) : null);
  return <div className={styles.container}>{lineChart}</div>;
};
export default Charts;
