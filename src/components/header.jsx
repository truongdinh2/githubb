import { Select } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;
export default function Header() {
    const [language, setLanguege] = useState('vi')
    function handleChange(value) {
        setLanguege(value)
    }
    console.log(language)
    return (
        <>
            <div className="logo">
                <div>Tclearning</div>
                <div>
                    <Select defaultValue="Tiếng việt"
                        style={{ width: 120 }}
                        onChange={handleChange}>
                        <Option value="vi">Tiếng việt</Option>
                        <Option value="en">English</Option>
                        <Option value="nihongo">Nihongo</Option>
                    </Select>
                </div>
            </div>
            <div className="title">
                <h2>title</h2>
            </div>
        </>
    );
}
