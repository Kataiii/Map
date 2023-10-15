import { Layout, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import MenuItem from "antd/es/menu/MenuItem";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import TextButton from "../ui/buttons/TextButton";
import Search from "../ui/Search";
import styles from './css/MainPage.module.css';
import {
    ClusterOutlined,
    StockOutlined
  } from '@ant-design/icons';
import { countryAPI } from "../services/CountriesService";
import { stateAPI } from "../services/StatesService";
import { localityAPI } from "../services/LocalitiesService";
import { departamentAPI } from "../services/DepartamentsSetvice";
import { atmAPI } from "../services/ATMsService";
import { workDayAPI } from "../services/DaysService";
import { countries, departaments, localities, states, workDays } from "../entities/Country";

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
    const [createCountry, {isLoading: isLoadingCountry}] = countryAPI.useCreateCountriesMutation();
    const [createState, {isLoading: isLoadState}] = stateAPI.useCreateStatesMutation();
    const [createLocality, {isLoading: isLoadLocality}] = localityAPI.useCreateLocalitiesMutation();
    const [createDepartament, {isLoading: isLoadDepartament}] = departamentAPI.useCreateDepartamentsMutation();
    const [createATM, {isLoading: isLoadATM}] = atmAPI.useCreateATMsMutation();
    const [createWorkDay, {isLoading: isLoadWorkDay}] = workDayAPI.useCreateWorkDayMutation();
    
    useEffect(() => {
        addData();
    }, [])

    const addData = async() => {
        await createCountry(countries);
        await createState(states);
        workDays.map(item => createWorkDay(item));
        await createLocality(localities);
        console.log(localities);
        await createDepartament(departaments);
    }

    const items: MenuItem[] = [
        getItem('База данных', '1', () => {navigate('/')},<ClusterOutlined />, ),
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