import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { useSelector } from 'react-redux'
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
        // gridLines: {
        //   display: false,
        // },
        ticks: {
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
    if (casesType !== "recovered") {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    } else {
      let newDataPoint = {
        x: date,
        y: data[casesType][date]
      };
      chartData.push(newDataPoint);
    }
  }
  return chartData;
};

function Chart() {
  const [data, setData] = useState({});
  const [casesType, setCasesType] = useState('cases');
  const cases = 'cases';
  const deaths = 'deaths';
  const recovered = 'recovered';
  const dataset = {
    cases: [
      {
        backgroundColor: "#d6b3b3",
        borderColor: "#e93d3d",
        data: data,
      }
    ]
    , deaths: [{
      backgroundColor: "rgba(204, 16, 52, 0.5)",
      borderColor: "#CC1034",
      data: data,
    }],
    recovered: [{
      backgroundColor: "#9dd582",
      borderColor: "#098b28",
      data: data,
    }]
  }
  const [fWeight, setFWeight] = useState(800);
  const [fWeight1, setFWeight1] = useState(600);
  const [fWeight2, setFWeight2] = useState(600);
  const L = useSelector(state => state.LanguageType);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType]);
  return (
    <div>
      <div className="change_data_chart">
        <span style={{ fontWeight: fWeight }} onClick={() => { setCasesType(cases); setFWeight(800); setFWeight1(600); setFWeight2(600); }}>{L.data.sum}</span>
        <span style={{ fontWeight: fWeight1 }} onClick={() => { setCasesType(deaths); setFWeight1(800); setFWeight(600); setFWeight2(600); }}>{L.data.deaths}</span>
        <span style={{ fontWeight: fWeight2 }} onClick={() => { setCasesType(recovered); setFWeight2(800); setFWeight(600); setFWeight1(600); }}>
          <Tooltip title={L.data.bugdata} >
            {L.data.recovered}
          </Tooltip>
        </span>
      </div>
      <div className="chartjs">
        {data?.length > 0 && (
          <Line
            data={{
              datasets: dataset[casesType]
            }}
            options={options}
          />
        )}
      </div>
    </div>
  );
}

export default Chart;
