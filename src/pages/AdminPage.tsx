import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CountryModule from "../modules/AdminModules/Countries/CountryModule";
import StateModule from "../modules/AdminModules/States/StateModule";
import styles from './css/AdminPage.module.css';
import { useContext } from 'react';
import { ThemeContext } from '..';
import LocalityModule from '../modules/AdminModules/Localities/LocalityModule';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Страны',
    children:<CountryModule/>,
  },
  {
    key: '2',
    label: 'Субъекты',
    children: <StateModule/>,
  },
  {
    key: '3',
    label: 'Города',
    children: <LocalityModule/>,
  },
];

const AdminPage = () => {
  const theme = useContext(ThemeContext);

    return(
        <div className={[styles[theme], styles.wrap_main].join(' ')}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default AdminPage;