import React, { useEffect, useState } from 'react';
import './pageTable.css';

const PageTable = (props) => {
    const [pagePerNum, setPagePerNum] = useState (3);
    const [dataNum, setDataNum] = useState([]);
    const dataNum1 = props.dataNum;
    useEffect(() => {
        if(dataNum1 !== undefined){
            setDataNum(dataNum1)
        }
    },[dataNum1])
    const dataNumLen = dataNum.length;
    const pageNumAll = Math.ceil(dataNumLen / pagePerNum);
    const [pageCurr, setPageCurr] = useState ('1');
    const lastIndexPerP = pageCurr * pagePerNum;
    const firstIndexPerp = lastIndexPerP - pagePerNum;
    const dataDisplay = dataNum.slice(firstIndexPerp, lastIndexPerP);
    const pageCrrUp = pageCurr - -1;
    const PageCrrDown = pageCurr - 1;
    useEffect(() => {
        props.dataRender(dataDisplay)
    }, [pageCurr, pagePerNum, dataNum])
    console.log(dataDisplay);
    console.log(dataNum);
    return (
        <>
            <div className="divPageNum">
                <span
                    className='allPage '
                >
                    All page: {dataNumLen}
                </span>
                <span
                    className='allPage '
                >
                    <label >number per pages: </label>
                    <select onChange={
                        (e) => { setPagePerNum(e.target.value); setPageCurr('1') }
                    }>
                        <option value={3} >3</option>
                        <option value={5} >5</option>
                        <option value={10} >10</option>
                        <option value={15} >15</option>
                    </select>
                </span>
                <span
                >
                    <input
                        type="button"
                        disabled={pageCurr <= 1}
                        onClick={() => { setPageCurr(pageCurr - 1) }}
                        value="privous"
                    ></input>
                </span>
                {PageCrrDown === 0 ? '' : <span
                    className={'pageNum'}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setPageCurr(pageCurr - 1)}
                    id={PageCrrDown}
                >
                    {PageCrrDown}
                </span>}
                <span
                    className='pageNum pageCrr'
                    style={{ cursor: 'pointer ' }}
                    // onClick={handlePageChange}
                    id={pageCurr}
                >
                    {pageCurr}
                </span>
                {
                    (pageNumAll < pageCrrUp) ? '' :
                        <span
                            className='pageNum'
                            style={{ cursor: 'pointer' }}
                            onClick={() => { setPageCurr(pageCurr - -1) }}
                            id={pageCrrUp}
                        >
                            {pageCrrUp}
                        </span>
                }
                <span
                >
                    <input
                        type="button"
                        disabled={pageNumAll <= pageCurr}
                        // disabled={isNext || numberCurrent >= pageNumber}
                        onClick={() => { setPageCurr(pageCurr - -1) }}
                        value="next"
                    ></input>
                </span>
            </div>
        </>
    );
}
export default PageTable;