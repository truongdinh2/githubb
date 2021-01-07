import  numeral  from 'numeral'
import React from 'react';
import './tableIfo.css'

export default function TableIfn({tableData}) {
    // console.log(countries)
    return (
        <div>
            <div className="table">
                {tableData.map((country,index) => (
                    <tr key={index}>
                        <td>{country.country}</td>
                        <td>
                            <strong>{numeral(country.cases).format("0,0")}</strong>
                        </td>
                    </tr>
                ))}
            </div>
        </div>
    )
}
