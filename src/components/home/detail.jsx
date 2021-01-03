import React, { useEffect, useState } from 'react'
import PageTable from '../pageTable/pageTable';
import './table.css'

export default function Detail(props) {
    const [data, setData] = useState('');
    const [rowCovy, setRowCovy] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        upDate()
    }, [])
    const upDate = () => {
        const api = "https://alerthumg.tech/covid";
        const results = fetch(api)
            .then(res => res.json())
            .then(data => { setLoading(true); setData(data); alert('hj   ') })
            .catch(err => console.log(`Warning!!! Error fetching data!!! 
        Error ${err}`));
        return results;
    }
    const listPatent = data.dataTableCase;
    const dataRender = (params) => {
        console.log(params);
        if (params !== undefined) {
            setRowCovy(params)
        }
    }
    // console.log(data);
    console.log(process.env.REACT_APP_GOOGLE_KEY);
    // console.log(listPatent, 'listPatent');
    const LoaddingFun = () => {
        return (
            <div></div>
        )
    }
    return (
        <div>
            {
                loading ?
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>hi</th>
                                    <th>hi</th>
                                    <th>hi</th>
                                    <th>hi</th>
                                    <th>hi</th>
                                    {/* <th>hi</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {rowCovy.map((inf, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>
                                                {key + 1}
                                            </td>
                                            <td>
                                                {inf.patient}
                                            </td>
                                            <td>
                                                {inf.age}
                                            </td>
                                            <td>
                                                {inf.status}
                                            </td>
                                            <td>
                                                {`${inf.detectionPosition} - ${inf.nationality}`}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <PageTable
                            loading={loading}
                            dataNum={listPatent}
                            dataRender={dataRender}
                        />
                    </>
                    : LoaddingFun
            }
        </div>
    )
}
