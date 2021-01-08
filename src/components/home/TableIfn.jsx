import numeral from 'numeral'
import React from 'react';
import './tableIfo.css'

export default function TableIfn({ tableData }) {
    // console.log(countries)
    return (
        <div>
            <div className="table">
                <table>
                    <thead></thead>
                    <tbody>
                        {tableData.map((country, index) => (
                            <tr key={index}>
                                <td>{index + 1}. {country.country}</td>
                                <td>
                                    <strong>{numeral(country.cases).format("0,0")}</strong>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
