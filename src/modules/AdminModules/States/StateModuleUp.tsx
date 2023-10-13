import { countryAPI } from "../../../services/CountriesService";
import React, { useContext, useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Form, Input, Popconfirm, Table } from 'antd';
import type { FormInstance } from 'antd/es/form';
import PrimaryButtom from "../../../ui/buttons/PrimaryButton";
import { IState, IStateNameCountry } from "../../../entities/State";
import { stateAPI } from "../../../services/StatesService";

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  id: number;
  name: string;
  countryId: number;
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
  countryName: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const StateModuleUp: React.FC = () => {
    const {data: states, error, isLoading: isLoandingState} = stateAPI.useFetchAllStatesQuery(10);
    const {data: countries, error: errorCountry, isLoading: isLoandingCountry} = countryAPI.useFetchAllCountriesQuery(100);

    const [name, setName] = useState<string>('');
    const [statesWithCOuntryName, setStatesWithCOuntryName] = useState<IStateNameCountry[]>([]);
    const [isLoading, setIsLoanding] = useState<boolean>(true);

    const [createState, {}] = stateAPI.useCreateStatesMutation();
    const [updateState, {}] = stateAPI.useUpdateStateMutation();
    const [deleteState, {}] = stateAPI.useDeleteStateMutation();


    useEffect(() => {
        createData();
    }, [isLoandingCountry, isLoandingState, states])

  const createData = () => {
    const result: IStateNameCountry[] | undefined = states?.map( state => ( { id: state.id, name: state.name,  countryName: countries?.find(item => item.id == state.countryId)?.name} as IStateNameCountry ) );
    console.log(result);
    if(result !== undefined){
        setStatesWithCOuntryName(result);
        setIsLoanding(false);
    }
  }

  const handleDelete = (key: React.Key) => {
    const state: IState | undefined = states?.find(state => state.id == key);
    if(state !== undefined){
        deleteState(state.id);
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
        title: 'country name',
        dataIndex: 'countryName',
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
    const id = countries?.find(country => country.name == row.countryName)?.id || 1;
    updateState({id: row.id, name: row.name, countryId: id});
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
    createState([{id:0, name:name, countryId: 1}]);
  }

  return (
    <div>
        <h1>Субъекты</h1>
        <div>
            <input onChange={changeHandler} type={'text'} placeholder='Название области'/>
            <PrimaryButtom content={"Добавить область"} onClick={clickHandler}/>
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
                dataSource={statesWithCOuntryName}
                columns={columns as ColumnTypes}
          />
          }

    </div>
  );
};

export default StateModuleUp;