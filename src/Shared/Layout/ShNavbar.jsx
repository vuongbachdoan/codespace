import { AppstoreFilled, CloudFilled, HomeFilled, MessageFilled } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import AppLogo from '../../Assets/images/app_logo.svg';
import { Icons } from '../../Assets/images/icon';
const { Header } = Layout;

const nav_items = [
    {
        label: 'Forum',
        icon: <MessageFilled />
    },
    {
        label: 'Components',
        icon: <AppstoreFilled />
    },
    {
        label: 'Upload',
        icon: <CloudFilled />
    },
    {
        label: 'Home',
        icon: <HomeFilled />
    }
]

const items = nav_items.map((item) => ({
    key: item.label,
    icon: item.icon,
    label: `${item.label}`,
}));

export const ShNavbar = () => {
    return (
        <Header className="header">
            <div className="logo-wrapper">
                <img className='logo' src={AppLogo} alt="app logo" />
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Home']} items={items} />
        </Header>
    );
}