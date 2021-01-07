import React, { useCallback, useEffect, useState } from 'react'
import './summary.css'
export default function Summary() {
    const [covidSummary, setCovidSummary] = useState([]);
    const [loading, setLoading] = useState(false)
    const lastLenCovidSum = covidSummary.length;
    useEffect(() => {
        GetData()
    }, [])
    const GetData = useCallback(
        () => {
            const api = "https://disease.sh/v3/covid-19/all";
            const dataCovid = fetch(api)
                .then(res => res.json())
                .then(data => { setCovidSummary([data]); setLoading(true); })
                .catch(err => console.log(`bug is: ${err}`))
            return dataCovid;
        },
        [],
    )
    console.log(lastLenCovidSum, covidSummary, loading);
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <>
            {
                loading ? <div>
                    <div className="flbox_2sum">
                        <div className="flitem_2sum">
                            <div>
                                {formatNumber(covidSummary[0].population)}
                            </div>
                            <span>
                                dan so
                            </span>
                        </div>
                        <div className="flitem_2sum" style={{color:' rgb(150, 0, 0)'}}>
                            <div style={{ fontWeight: 600 }}>{formatNumber(covidSummary[0].cases)}</div>
                            <span>sum</span>
                        </div>
                        <div className="flitem_2sum" style={{ color: 'red' }}>
                            <div>
                                {formatNumber(covidSummary[0].deaths)}
                            </div>
                            <span>
                                deaths
                            </span>
                        </div>
                        <div className="flitem_2sum" style={{ color: 'green' }} >
                            <div>
                                {formatNumber(covidSummary[0].recovered)}
                            </div>
                            <span>
                                hoi phuc
                            </span>
                        </div>
                        <div className="flitem_2sum" style={{color:'yellowgreen'}}>
                            <div>
                                {formatNumber(covidSummary[0].critical)}
                            </div>
                            <span>
                                nguy kich
                            </span>
                        </div>
                    </div>
                    <div className="flbox_2sum">
                        <div className="flitem_2sum">
                            <div>
                                {formatNumber(covidSummary[0].tests)}
                            </div>
                            <span>
                                dang xet nghiem
                            </span>
                        </div>
                        <div className="flitem_2sum" style={{color:' rgb(150, 0, 0)'}}> 
                            <div>
                                + {formatNumber(covidSummary[0].todayCases)}
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOlwtwIwoMxSJY_yZvw7oMROFi478RCeFjw&usqp=CAU" alt="icon" />
                            </div>
                            <span>todayCases</span>
                        </div>
                        <div className="flitem_2sum"style={{ color: 'red' }}>
                            <div>
                                + {formatNumber(covidSummary[0].todayDeaths)}
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOlwtwIwoMxSJY_yZvw7oMROFi478RCeFjw&usqp=CAU" alt="icon" />
                            </div>
                            <span>
                                todayDeaths
                            </span>
                        </div>
                        <div className="flitem_2sum"style={{ color: 'green' }}>
                            <div>
                                + {formatNumber(covidSummary[0].todayRecovered)}
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOlwtwIwoMxSJY_yZvw7oMROFi478RCeFjw&usqp=CAU" alt="icon" />
                            </div>
                            <span>
                                todayRecovered
                            </span>
                        </div>
                        <div className="flitem_2sum">
                            <div>
                                {formatNumber(covidSummary[0].active)}
                            </div>
                            <span>
                                dang chua
                            </span>
                        </div>
                    </div>

                </div>
                    : ''
            }
        </>
    )
}
