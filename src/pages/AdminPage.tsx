import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CountryModule from "../modules/AdminModules/Countries/CountryModule";
import StateModule from "../modules/AdminModules/States/StateModule";
import styles from './css/AdminPage.module.css';
import { useContext } from 'react';
import { ThemeContext } from '..';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Countries (Страны)',
    children:<CountryModule/>,
  },
  {
    key: '2',
    label: 'State (Субъекты)',
    children: <StateModule/>,
  },
  {
    key: '3',
    label: 'Tab 3',
    // children: <StateModuleUp/>,
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