import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PageTable from '../pageTable/pageTable';
import './table.css';
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
            .then(data => { setLoading(true); setData(data);  })
            .catch(err => console.log(`Warning!!! Error fetching data!!! 
        Error ${err}`));
        return results;
    }
    const listPatent = data.dataTableCase;
    const dataRender = (params) => {
        if (params !== undefined) {
            setRowCovy(params)
        }
    }
    const daName = useSelector(state => state.LanguageType)
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
                        <table className="detailTable">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>{daName.data.patient}</th>
                                    <th>{daName.data.age}</th>
                                    <th>{daName.data.status}</th>
                                    <th>{daName.data.Position}</th>
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
                                                {(inf.status === 'Đang điều trị'? daName.data.statusDe: daName.data.cured)}
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
