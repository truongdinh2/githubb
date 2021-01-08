import numeral from "numeral";
import React from "react";
import { Circle, Tooltip } from "react-leaflet";
import './Map.css';
const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52,0.5)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 150,}
  };
  
  export const sortData = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};
export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

const redOptions = { color: "rgb(204, 16, 52)" }
export const showDataOnMap = (data, casesType = "cases",dataLang) =>
  data.map((country,index) => (
    <Circle
      key={index}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      // fillColor="red"
      pathOptions={redOptions}
      fillOpacity={0.4}
      weight={1}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Tooltip>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            {dataLang.data.sum}: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
          {dataLang.data.recovered}: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
          {dataLang.data.deaths}: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Tooltip>
    </Circle>
  ));
