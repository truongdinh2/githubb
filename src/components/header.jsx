import { Select } from 'antd';
import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {LanguageVi,LanguageEn} from './../action/actiontypes' 
const { Option } = Select;
export default function Header() {
    const dispatch = useDispatch();
    const [language, setLanguage] = useState('vi');
    function handleChange(value) {
        setLanguage(value);
        if(value==='vi'){
            dispatch(LanguageVi(value))
        }else{
            dispatch(LanguageEn(value))
        }
    }
const LanguageType = useSelector(state => state.LanguageType);
    return (
        <>
            <div className="logo">
                <div>Tclearning</div>
                <div>
                    <Select defaultValue="Tiếng việt"
                        style={{ width: 120 }}
                        value={language}
                        onChange={handleChange}>
                        <Option value="vi">Tiếng việt</Option>
                        <Option value="en">English</Option>
                    </Select>
                </div>
            </div>
            <div className="title">
                <h2>{LanguageType.data.title.toUpperCase()}</h2>
            </div>
        </>
    );
}
