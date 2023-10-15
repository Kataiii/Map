import React, { useContext, useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Form, Input, Popconfirm, Table } from 'antd';
import type { FormInstance } from 'antd/es/form';
import PrimaryButtom from "../../../ui/buttons/PrimaryButton";
import styles from '../../css/Module.module.css';
import { localityAPI } from "../../../services/LocalitiesService";
import { departamentAPI } from "../../../services/DepartamentsSetvice";
import { IDepartament, IDepartamentWithLocality } from '../../../entities/Departament';
import { ThemeContext } from '../../../ThemeProvider';
import { departaments, localities } from '../../../entities/Country';


const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  id: number;
  sale_point_name: string;
  address: string;
  localityId: number;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
  id: number;
  sale_point_name: string;
  address: string;
  localityName: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const DepartamentModule: React.FC = () => {

    // const {data: departaments, error, isLoading: isLoandingDepartament} = departamentAPI.useFetchAllDepartaQuery(20);
    // const {data: localities, error: errorLocality, isLoading: isLoandingLocality} = localityAPI.useFetchAllLocalitiesQuery(10);

    const [name, setName] = useState<string>('');
    const [departamentsWithLocalityName, setDepartamentsWithLocalityName] = useState<IDepartamentWithLocality[]>([]);
    const [isLoading, setIsLoanding] = useState<boolean>(true);

    const [createDepartament, {}] = departamentAPI.useCreateDepartamentsMutation();
    const [updateDepartament, {}] = departamentAPI.useUpdateDepartamentMutation();
    const [deleteDepartament, {}] = departamentAPI.useDeleteDepartamentMutation();


    useEffect(() => {
        createData();
    }, [])

  const createData = () => {
    const result: IDepartamentWithLocality[] | undefined = departaments.map( departament => ( 
        {
            id: departament.id,
            sale_point_name: departament.sale_point_format,
            address: departament.address,
            localityName: localities.find(item => item.id == departament.localityId)?.name
            // localityName: departament.localityId?.toString()
        } as IDepartamentWithLocality
    ) );
    console.log('departaments');
    console.log(result);
    if(result !== undefined){
        console.log(localities);
        setDepartamentsWithLocalityName(result);
        setIsLoanding(false);
    }
  }

  const handleDelete = (key: React.Key) => {
    const departament: IDepartament | undefined = departaments?.find(departament => departament.id == key);
    if(departament !== undefined){
        deleteDepartament(departament.id);
    }
  };

  const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
      title: '№',
      dataIndex: 'id',
      editable: false
    },
    {
      title: 'Название',
      dataIndex: 'sale_point_name',
      editable: true,
      sorter: (a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      },
      sortDirections: ['descend', 'ascend']
    },
    {
        title: 'Адрес',
        dataIndex: 'address',
        editable: true,
        sorter: (a, b) => {
            if (a.address.toLowerCase() < b.address.toLowerCase()) {
              return -1;
            }
            if (a.address.toLowerCase() > b.address.toLowerCase()) {
              return 1;
            }
            return 0;
          },
    },
    {
        title: 'Название города',
        dataIndex: 'localityName',
        editable: true,
        sorter: (a, b) => {
            if (a.localityName.toLowerCase() < b.localityName.toLowerCase()) {
              return -1;
            }
            if (a.localityName.toLowerCase() > b.localityName.toLowerCase()) {
              return 1;
            }
            return 0;
          },
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      //@ts-ignore
      render: (_, record: { id: number }) =>
        departaments && departaments.length >= 1 ? (
          <Popconfirm title="Действительно хотите удалить?" onConfirm={() => handleDelete(record.id)}>
            <a>Удалить</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleSave = (row: DataType) => {
    console.log(row);
    const departament = departaments?.find(departament => departament.id === row.id)
    const id = localities?.find(locality => locality.name == row.localityName)?.id || 1;
    updateDepartament(
        {
            id: row.id, 
            workDaysUrId: departament?.workDaysUrId,
            workDaysFizId: departament?.workDaysUrId,
            address: departament?.address,
            coord_x: departament?.coord_x,
            coord_y: departament?.coord_y,
            postcode: departament?.postcode,
            description: departament?.description,
            phone: departament?.phone,
            office_type: departament?.office_type,
            sale_point_format: departament?.sale_point_format,
            suo_availability: departament?.suo_availability,
            has_ramp: departament?.has_ramp,
            kep: departament?.kep,
            myBranch: departament?.myBranch,
            localityId: id
        });
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const clickHandler = () => {
    //TODO create
    // createDepartament([
    //     {
    //         id: row.id, 
    //         name: departament?.name,
    //         work_days_ur_id: departament?.work_days_ur_id,
    //         work_days_fiz_id: departament?.work_days_fiz_id,
    //         address: departament?.address,
    //         coord_x: departament?.coord_x,
    //         coord_y: departament?.coord_y,
    //         postcode: departament?.postcode,
    //         description: departament?.description,
    //         phone: departament?.phone,
    //         office_type: departament?.office_type,
    //         sale_point_format: departament?.sale_point_format,
    //         suo_availability: departament?.suo_availability,
    //         has_ramp: departament?.has_ramp,
    //         kep: departament?.kep,
    //         myBranch: departament?.myBranch,
    //         locality_id: id
    //     }
    // ]);
  }

  const clickOpenHandler = () => {
    setVisible(true);
  }

  const clickHide = () => {
    setVisible(false);
  }

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className={styles.wrap}>
        <h1 className={[styles[theme], styles.title].join(' ')}>Офисы</h1>
        <div className={styles.form_wrap}>
            <PrimaryButtom content={"Добавить департамент"} onClick={clickOpenHandler}/>
        </div>

        {
            visible
            ?
                <div className={styles.wrap_form_big} onClick={clickHide}>
                    <div className={styles.form}>
                        <h1 className={[styles[theme], styles.title].join(' ')}>Добавить офис</h1>
                        <input onChange={changeHandler} type={'text'} placeholder='Название города'/>
                    </div>
                </div>
            :
                null
        }

        {/* { <h1>Произошла ошибка при загрузке</h1>} */}
        { isLoading 
            ?
                <h1>Идет загрузка</h1>
            :
                <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={departamentsWithLocalityName}
                columns={columns as ColumnTypes}
          />
          }

    </div>
  );
};

export default DepartamentModule;