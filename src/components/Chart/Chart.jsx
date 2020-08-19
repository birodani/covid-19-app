import React, { useEffect, useState } from 'react';
import styles from './Chart.module.css';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import fetchDailyData from '../../api/network.connector';
import { ButtonGroup, Button } from '@material-ui/core';

const ChartComponent = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
      fetchDailyData().then( data => {
        setDailyData(data); console.log(data)
      });
    console.log(dailyData)
  }, []);

  const barChart = (
    confirmed ? (
      <Doughnut
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [(confirmed.value-deaths.value-recovered.value), recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: true },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map((data) => data.reportDate),
          datasets: [{
            data: dailyData.map((data) => (data.confirmed.total)),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths.total),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default ChartComponent;