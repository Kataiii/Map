import { countryAPI } from "../../../services/CountriesService";
import React, { useContext, useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Form, Input, Popconfirm, Table } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { ICountry } from "../../../entities/Country";
import PrimaryButtom from "../../../ui/buttons/PrimaryButton";
import styles from '../../css/Module.module.css';
import { ThemeContext } from "../../../ThemeProvider";


const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  id: number;
  name: string;
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
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const CountryModule: React.FC = () => {
  const [name, setName] = useState<string>('');
  const {data: countries, error, isLoading} = countryAPI.useFetchAllCountriesQuery(10);
  const [createCountry, {}] = countryAPI.useCreateCountriesMutation();
  const [deleteCountry, {}] = countryAPI.useDeleteCountryMutation();
  const [updateCountry, {}] = countryAPI.useUpdateCountryMutation();

  const handleDelete = (key: React.Key) => {
    const country: ICountry | undefined = countries?.find(country => country.id == key);
    if(country !== undefined){
        deleteCountry(country.id);
    }
  };

  const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
      title: '№',
      dataIndex: 'id',
      width: '30%',
      editable: false
    },
    {
      title: 'Название',
      dataIndex: 'name',
      width: '30%',
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
      title: '',
      dataIndex: 'operation',
      width: '30%',
      //@ts-ignore
      render: (_, record: { id: number }) =>
        countries && countries.length >= 1 ? (
          <Popconfirm title="Действительно хотите удалить?" onConfirm={() => handleDelete(record.id)}>
            <a>Удалить</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleSave = (row: DataType) => {
    updateCountry(row);
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
    createCountry([{id:0, name:name}]);
    setName('');
  }

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.wrap}>
        <h1 className={[styles[theme], styles.title].join(' ')}>Страны</h1>
        <div className={styles.form_wrap}>
            <div className={[styles[`${theme}_back`], styles.input_wrap].join(' ')}>
              <input className={[styles[theme], styles.input].join(' ')} onChange={changeHandler} type={'text'} placeholder='Название страны'/>
            </div>
            <div className={styles.wrap_button}>
              <PrimaryButtom content={"ОК"} onClick={clickHandler}/>
            </div>
        </div>
        { isLoading && <h1>Идет загрузка</h1>}
        { error && <h1>Произошла ошибка при загрузке</h1>}
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={countries}
        columns={columns as ColumnTypes}
      />
    </div>
  );
};

export default CountryModule;