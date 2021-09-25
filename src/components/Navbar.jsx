import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/coinx.png'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo-container">
            <Link to='/'>
                <img src={icon} alt='icon' height='50' />
            </Link>
                {/* <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">CoinX</Link>
                </Typography.Title> */}
                {/* <Button className="menu-control"></Button> */}
            </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/coins">Coins</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
            
        </div>
    )
}

export default Navbar
