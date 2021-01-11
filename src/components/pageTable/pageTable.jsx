import React, { useEffect, useState } from 'react';
import './pageTable.css';
import { RightOutlined, LeftOutlined,DoubleRightOutlined,DoubleLeftOutlined } from '@ant-design/icons';
const PageTable = (props) => {
    const [pagePerNum, setPagePerNum] = useState(5);
    const [dataNum, setDataNum] = useState([]);
    const dataNum1 = props.dataNum;
    const dataNumLen = dataNum.length;
    const pageNumAll = Math.ceil(dataNumLen / pagePerNum);
    const [pageCurr, setPageCurr] = useState('1');
    const lastIndexPerP = pageCurr * pagePerNum;
    const firstIndexPerp = lastIndexPerP - pagePerNum;
    const dataDisplay = dataNum.slice(firstIndexPerp, lastIndexPerP);
    const pageCrrUp = pageCurr - -1;
    const PageCrrDown = pageCurr - 1;
    useEffect(() => {
        if (dataNum1 !== undefined) {
            setDataNum(dataNum1)
        }
    }, [dataNum1])
    useEffect(() => {
        const sendData = () => {
            props.dataRender(dataDisplay)
        }
        sendData();
    }, [pageCurr, pagePerNum, dataNum])
    return (
        <>
            <div className="divPageNum">
                <div className="divPageNum1">
                    <span
                        className='allPage '
                    >
                        All pages: {dataNumLen}
                    </span>
                    <span
                        className='allPage '
                    >
                        <label >number: </label>
                        <select onChange={
                            (e) => { setPagePerNum(e.target.value); setPageCurr('1') }
                        }>
                            <option value={5} >5</option>
                            <option value={10} >10</option>
                            <option value={15} >15</option>
                            <option value={25} >25</option>
                        </select>
                    </span>
                </div>
                <div className="divPageNum2">
                    <span
                    >
                        <button
                            onClick={() => { setPageCurr(1) }}
                            disabled={pageCurr <= 1}
                        >
                            <DoubleLeftOutlined  style={{ color: 'red' }} />
                        </button>
                    </span>
                    <span
                    >
                        <button
                            onClick={() => { setPageCurr(pageCurr - 1) }}
                            disabled={pageCurr <= 1}
                        >
                            <LeftOutlined style={{ color: 'red' }} />
                        </button>
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
                        <button
                            disabled={pageNumAll <= pageCurr}
                            onClick={() => { setPageCurr(pageCurr - -1) }}
                        >
                            <RightOutlined style={{ color: 'red' }} />
                        </button>
                    </span>
                    <span
                    >
                        <button
                            onClick={() => { setPageCurr(pageNumAll) }}
                            disabled={pageNumAll <= pageCurr}
                        >
                            <DoubleRightOutlined  style={{color:'red'}}/>
                        </button>
                    </span>
                </div>
            </div>
        </>
    );
}
export default PageTable;