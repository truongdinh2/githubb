import React, { useEffect, useState } from 'react';
import { sortData } from '../api/util';
import Header from './header';
import Detail from './home/detail';
import Map from './home/map';
import Summary from './home/sumary';
import TableInfo from './home/TableIfn';
import Chart from './home/chart';
import Content from './home/content';

export default function Home() {
    const [countries, setCountries] = useState([]);
    const [mapCountries, setMapCountries] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [casesType, setCasesType] = useState("cases");

    useEffect(() => {
        const getCountriesData = async () => {
            fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => ({
                        name: country.country,
                        value: country.countryInfo.iso2,
                    }));
                    let sortedData = sortData(data);
                    setCountries(countries);
                    setMapCountries(data);
                    setTableData(sortedData);
                });
        };

        getCountriesData();
    }, []);
    return (
        <>
            <div className="page">
                <Header />
                <div className="main">
                    <div className="container">
                        <div className="map"  >
                            <Map
                                mapCountries={mapCountries}
                                casesType={casesType}
                            />
                        </div>
                        <div className="sumary" >
                            <Summary />
                        </div>
                        <div className="detail" >
                            <Detail />
                        </div>
                    </div>
                    <div className="table1">
                        <div className="chartH">
                            <Chart />
                        </div>
                        <div className="tbIf">
                            <TableInfo
                                tableData={tableData}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ct">
            <div className="ct0"><Content/></div>
            <div className="ct1">
            </div>
            </div>
            <div className="footer">
                copyright @ dinh truong
            </div>
        </>
    );
}
