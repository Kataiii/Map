import { countryAPI } from "../../../services/CountriesService";
import React, { useContext, useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Form, Input, Popconfirm, Table } from 'antd';
import type { FormInstance } from 'antd/es/form';
import PrimaryButtom from "../../../ui/buttons/PrimaryButton";
import { IState, IStateNameCountry } from "../../../entities/State";
import { stateAPI } from "../../../services/StatesService";
import styles from '../../css/Module.module.css';
import { localityAPI } from "../../../services/LocalitiesService";
import { ILocality, ILocalityNameState } from "../../../entities/Locality";

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  id: number;
  name: string;
  stateId: number;
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
  name: string;
  stateName: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const LocalityModule: React.FC = () => {

    const {data: states, error, isLoading: isLoandingState} = stateAPI.useFetchAllStatesQuery(10);
    const {data: localities, error: errorLocality, isLoading: isLoandingLocality} = localityAPI.useFetchAllLocalitiesQuery(10);

    const [name, setName] = useState<string>('');
    const [localitiesWithStateName, setLocalitiesWithStateName] = useState<ILocalityNameState[]>([]);
    const [isLoading, setIsLoanding] = useState<boolean>(true);

    const [createLocality, {}] = localityAPI.useCreateLocalitiesMutation();
    const [updateLocality, {}] = localityAPI.useUpdateLocalityMutation();
    const [deleteLocality, {}] = localityAPI.useDeleteLocalityMutation();


    useEffect(() => {
        createData();
    }, [isLoandingLocality, isLoandingState, localities])

  const createData = () => {
    const result: ILocalityNameState[] | undefined = localities?.map( locality => ( 
        {
            id: locality.id,
            name: locality.name,
            stateName: states?.find(item => item.id == locality.stateId)?.name
        } as ILocalityNameState
    ) );
    console.log(result);
    if(result !== undefined){
        console.log(localities);
        console.log(states);
        setLocalitiesWithStateName(result);
        setIsLoanding(false);
    }
  }

  const handleDelete = (key: React.Key) => {
    const locality: ILocality | undefined = localities?.find(locality => locality.id == key);
    if(locality !== undefined){
        deleteLocality(locality.id);
    }
  };

  const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
      title: '№',
      dataIndex: 'id',
      editable: false
    },
    {
      title: 'name',
      dataIndex: 'name',
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
        title: 'state name',
        dataIndex: 'stateName',
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
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      //@ts-ignore
      render: (_, record: { id: number }) =>
        states && states.length >= 1 ? (
          <Popconfirm title="Действительно хотите удалить?" onConfirm={() => handleDelete(record.id)}>
            <a>Удалить</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleSave = (row: DataType) => {
    console.log(row);
    const id = states?.find(state => state.name == row.stateName)?.id || 1;
    updateLocality({id: row.id, name: row.name, stateId: id});
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
    createLocality([{id:0, name:name, stateId: 1}]);
  }

  return (
    <div className={styles.wrap}>
        <h1>Города</h1>
        <div>
            <input onChange={changeHandler} type={'text'} placeholder='Название города'/>
            <PrimaryButtom content={"Добавить город"} onClick={clickHandler}/>
        </div>

        { error && <h1>Произошла ошибка при загрузке</h1>}
        { isLoading 
            ?
                <h1>Идет загрузка</h1>
            :
                <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={localitiesWithStateName}
                columns={columns as ColumnTypes}
          />
          }

    </div>
  );
};

export default LocalityModule;