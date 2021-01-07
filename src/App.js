import './App.css';
import Home from './components/home';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { sortData } from './api/util';
function App() {
  // const [country, setInputCountry] = useState("worldwide");
  // const [countryInfo, setCountryInfo] = useState({});
  
  return (
    <div >
      <Home />
    </div>
  );
}

export default App;
