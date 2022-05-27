import { Space, Typography } from 'antd'
import React from 'react'
import Logo from '../assets/images/green-logo.png'
import '../style/sass/Header.scss';

const { Title } = Typography;

const Header = () => {
    return (
        <Space className='header-space' style={{}}>
            <img width="160px" src={Logo} alt='logo'/>
            <Title level={1} className='header-text'> Staff of the Month List</Title>
        </Space>
    )
}

export default Header