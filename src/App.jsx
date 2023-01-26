import { DownloadOutlined, GlobalOutlined, LaptopOutlined, NotificationOutlined, UploadOutlined, UserOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import CodeUpload from './Components/CodeUpload';
import { ShNavbar } from './Shared/Layout/ShNavbar';

const { Content, Footer, Sider } = Layout;

const sidebar_items = [
    {
        label: 'My components',
        icon: UserOutlined,
        children: [
            {
                label: 'Sub item',
                icon: UserOutlined
            },
            {
                label: 'Sub item',
                icon: UserOutlined
            }
        ]
    },
    {
        label: 'Explore',
        icon: GlobalOutlined,
        children: [
            {
                label: 'Sub item',
                icon: UserOutlined
            },
            {
                label: 'Sub item',
                icon: UserOutlined
            }
        ]
    },
]

const sidebar_navs = sidebar_items.map((item) => {
    return {
        key: `${item.label}`,
        icon: React.createElement(item.icon),
        label: `${item.label}`,
        children: item.children.map((child) => {
            return {
                key: child.label,
                label: `${child.label}`,
            };
        }),
    };
});

const App = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(!open)
    }

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <ShNavbar />
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Component</Breadcrumb.Item>
                    <Breadcrumb.Item>Forum</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                    }}
                >
                    <Sider
                        style={{
                            background: colorBgContainer,
                        }}
                        width={200}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['My components']}
                            defaultOpenKeys={['My components']}
                            style={{
                                height: '100%',
                            }}
                            items={sidebar_navs}
                        />
                    </Sider>
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        <Button type="primary" icon={<UploadOutlined />} onClick={showDrawer}>
                            Upload code
                        </Button>
                    </Content>
                </Layout>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>

            <CodeUpload open={open} setOpen={setOpen} />
        </Layout>
    );
};
export default App;

