import { useEffect } from "react";
import axios from "axios";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CountryModule from "../modules/AdminModules/Countries/CountryModule";

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
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

const AdminPage = () => {

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/country/getCountries`).then((resp) => {
    //         const contries = resp.data;
    //         console.log(contries);
    //       });
    // }, [])

    return(
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default AdminPage;