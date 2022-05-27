import { Space, Typography } from 'antd'
import React from 'react'
import Logo from '../assets/images/green-logo.png'

const { Title } = Typography;

const Header = () => {
    return (
        <Space style={{ height: '80px', backgroundColor: '#2CC44D', boxShadow: '3px 3px 3px 3px gray', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img width="160px" src={Logo} />
            <Title level={1} style={{color:'white', margin:'5px'}}> Staff of the Month List</Title>
        </Space>
    )
}

export default Header