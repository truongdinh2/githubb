import React from 'react';
import Header from './header';
import Detail from './home/detail';
import Map from './home/map';

export default function Home() {
    return (
        <>
            <div className="page">
                <Header />
                <div className="container">
                    <div className="map"  >
                        <Map/>
                    </div>
                    <div className="sumary" >summary</div>
                    <div className="detail" >
                        <Detail/>
                    </div>
                    <div className="end" >end</div>
                </div>
            </div>
            <div className="footer">
                copyright @ dinh truong
            </div>
        </>
    );
}
