import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import {useSelector} from 'react-redux'
import { Tooltip } from "antd";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data[casesType]) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

function Chart() {
  const [data, setData] = useState({});
  const [casesType, setCasesType] = useState('cases');
  const cases = 'cases';
  const deaths = 'deaths';
  const recovered = 'recovered';
  const dataset = [
    {
      backgroundColor: "rgba(204, 16, 52, 0.5)",
      borderColor: "#CC1034",
      data: data,
    },
  ]
  const L = useSelector(state => state.LanguageType);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data, casesType);
          // console.log(chartData);
          setData(chartData);
          // buildChart(chartData);
        });
    };

    fetchData();
  }, [casesType]);
  console.log(data, casesType);
  return (
    <div>
      <div className="change_data_chart">
        <span onClick={() => setCasesType(cases)}>cases</span>
        <span onClick={() => setCasesType(deaths)}>deaths</span>
        <span onClick={() => setCasesType(recovered)}>
          <Tooltip title={L.data.bugdata}>
            recovered
          </Tooltip>
        </span>
      </div>
      <div>
        {data?.length > 0 && (
          <Line
            data={{
              datasets: dataset
            }}
            options={options}
          />
        )}
      </div>
    </div>
  );
}

export default Chart;
