import React, { Fragment, useState, useEffect } from 'react';
import { Input as AntdInput, Form } from 'antd';
import axios from 'axios';
import CustomLabel from './CustomLabel';
import CustomModal from './CustomModal';
import CustomTable from './CustomTable';
import styled from 'styled-components';
import { GrChapterAdd } from "react-icons/gr";

const { Item } = Form;

const StyledItem = styled(Item)`
  > div {
    width: 100%;
    text-align: left;
  }

  border-radius: 0.4rem;
  margin-bottom: 5px !important;

  & .ant-form-item-label {
    display: block;
    width: 40%;
    text-align: center;
  }

  & .ant-form-item-label > label > span {
    font-weight: 600 !important;
    position: relative;
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 0.03em;
  }
  & .ant-row {
    flex-flow: nowrap !important;
  }
`;

const AntdInputStyle = styled(AntdInput)`
  height: ${props => (props.height ? props.height : '40px')};
  border-radius: 0.4rem;
  box-shadow: none;
  border-color: ${props => (props.error ? 'red' : '#d9d9d9')};

  ::placeholder {
    font-size: 14px !important;
    font-weight: 500 !important;
  }
  
  :focus {
    border-color: #57a8e9;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(87,168,233, .2);
    box-shadow: 0 0 0 2px rgba(87,168,233, .2);
  }

  .ant-input-affix-wrapper-focused {
    box-shadow: none;
    border-right-width: 0px !important;
  }

  &.ant-input {
    font-weight: 500 !important;
    padding: 8px 11px !important;
    color: black !important;
  }

  &.ant-input[disabled] {
    color: #545454;
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    border: 1px solid #d9d9d9;
  }
`;

export const CustomBrowse = ({ uiConfig }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (isReadOnly) {
      const timer = setTimeout(() => {
        setIsReadOnly(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isReadOnly]);

  useEffect(() => {
    if (modalOpen && uiConfig.tabledataApi) {
      axios.get(uiConfig.tabledataApi)
        .then(response => {
          const data = response.data;
          setTableData(data);
          if (data.length > 0) {
            const keys = Object.keys(data[0]);
            const newColumns = keys
              .filter(key => key !== 'id')
              .map(key => ({
                title: key.charAt(0).toUpperCase() + key.slice(1),
                dataIndex: key,
              }));
            setColumns(newColumns);
          }
        })
        .catch(error => {
          console.error('Error fetching table data:', error);
        });
    }
  }, [modalOpen, uiConfig.tabledataApi]);

  const handleOk = () => {
    if (uiConfig.okButtonVisible) {
      setIsReadOnly(true);
      setModalOpen(false);
      setInputValue(selectedValues.join(', '));
      rowSelectApiCall();
    }
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const handleRowSelectionChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys);

    const nextKey = Object.keys(selectedRows[0] || {}).find(key => key !== 'id');
    const newValues = selectedRows.map(row => row[nextKey] || '');

    setSelectedValues(newValues);
    setInputValue(newValues.join(', '));

    if (uiConfig.selectEventCall) {
      rowSelectApiCall();
      setModalOpen(false);
    }
  };

  const handleRowSelect = (id, value) => {
    const selectedRow = tableData.find(row => row.id === id);
    const nextKey = Object.keys(selectedRow || {}).find(key => key !== 'id');

    if (uiConfig.multiSelect) {
      // Multi-select logic
      const newValues = [...selectedValues];
      const valueToAdd = selectedRow[nextKey] || '';

      if (!newValues.includes(valueToAdd)) {
        newValues.push(valueToAdd);
      } else {
        // If already included, remove it
        const index = newValues.indexOf(valueToAdd);
        if (index > -1) {
          newValues.splice(index, 1);
        }
      }

      setSelectedValues(newValues);
      setInputValue(newValues.join(', '));
    } else {
      // Single-select logic
      setSelectedValues([selectedRow[nextKey] || '']);
      setInputValue(selectedRow[nextKey] || '');
    }
  };

  const rowSelectApiCall = () => {
    console.log('API called');
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: handleRowSelectionChange,
    type: uiConfig.multiSelect ? 'checkbox' : 'radio',
  };

  return (
    <StyledItem
      label={
        uiConfig?.label && (
          <Fragment>
            <CustomLabel>
              {uiConfig?.label}&nbsp;
            </CustomLabel>
          </Fragment>
        )
      }
    >
      <AntdInputStyle
        value={inputValue}
        suffix={<GrChapterAdd style={{ cursor: 'pointer' }} onClick={() => setModalOpen(true)} />}
      />

      <CustomModal
        visible={modalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={uiConfig.tableTitle}
        okButtonVisible={uiConfig.okButtonVisible}
        cancelButtonVisible={uiConfig.cancelButtonVisible}
      >
        <CustomTable
          dataSource={tableData}
          columns={columns}
          uiConfig={uiConfig}
          rowSelection={rowSelection}
          onRowSelect={handleRowSelect}
        />
      </CustomModal>
    </StyledItem>
  );
};
