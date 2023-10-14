import { Layout, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import MenuItem from "antd/es/menu/MenuItem";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import TextButton from "../ui/buttons/TextButton";
import Search from "../ui/Search";
import styles from './css/MainPage.module.css';
import {
    ClusterOutlined,
    StockOutlined
  } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  onClick: () => void,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    onClick,
    children,
    label
  } as MenuItem;
}

const MainPage = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const navigate = useNavigate();

    const items: MenuItem[] = [
        getItem('База данных', '1', () => {navigate('/admin')},<ClusterOutlined />, ),
        getItem('Статистика', '2',  () => {navigate('/statistic')},<StockOutlined />)
      ];

    return(
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Outlet/>
            </Layout>
        </Layout>
    )
}

export default MainPage;