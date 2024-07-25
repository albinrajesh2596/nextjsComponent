import React from 'react';
import { Table, Input, Button } from 'antd';

const CustomTable = ({
  dataSource,
  columns,
  uiConfig,
  rowSelection,
}) => {
  const enhancedColumns = columns.map(column => ({
    ...column,
    ...(uiConfig.filtering && {
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, close }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search ${column.title}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => {
              confirm();
              close();
            }}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => {
              confirm();
              close();
            }}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
        </div>
      ),
      onFilter: (value, record) =>
        record[column.dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
    }),
    ...(uiConfig.sorting && {
      sorter: (a, b) => {
        if (typeof a[column.dataIndex] === 'string' && typeof b[column.dataIndex] === 'string') {
          return a[column.dataIndex].localeCompare(b[column.dataIndex]);
        }
        return a[column.dataIndex] - b[column.dataIndex];
      },
    }),
  }));

  return (
    <Table
      columns={enhancedColumns}
      dataSource={dataSource}
      rowSelection={rowSelection}
      rowKey={(record) => record.key}
      pagination={uiConfig.pagination}
    />
  );
};

export default CustomTable;
