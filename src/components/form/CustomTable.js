import React from 'react';
import { Table, Input } from 'antd';

const CustomTable = ({
  dataSource,
  columns,
  rowSelection,
  onRowSelect,
  uiConfig
}) => {
  const handleRowClick = (record) => {
    const { selectedRowKeys, onChange } = rowSelection;
    const isSelected = selectedRowKeys.includes(record.id);

    if (uiConfig.multiSelect) {
      // Multi-select logic
      const newSelectedRowKeys = isSelected
        ? selectedRowKeys.filter(key => key !== record.id)
        : [...selectedRowKeys, record.id];

      const newSelectedRows = dataSource.filter(row => newSelectedRowKeys.includes(row.id));
      onChange(newSelectedRowKeys, newSelectedRows);

      const nextKey = Object.keys(record).find(key => key !== 'id');
      const newValues = newSelectedRows.map(row => row[nextKey] || '');
      onRowSelect(record.id, newValues.join(', '));
    } else {
      // Single-select logic
      const newSelectedRowKeys = isSelected
        ? []
        : [record.id];
      
      const newSelectedRows = isSelected
        ? []
        : [record];

      onChange(newSelectedRowKeys, newSelectedRows);
      onRowSelect(newSelectedRowKeys[0], newSelectedRows.length > 0 ? newSelectedRows[0] : null);
    }
  };

  const enhancedColumns = columns.reduce((acc, col) => {
    if (col.dataIndex === 'id') {
      acc.push(col);
      const nextKey = columns.find(column => column.dataIndex !== 'id')?.dataIndex;
      if (nextKey) {
        acc.push({
          title: 'Value',
          dataIndex: nextKey,
          render: (text, record) => (
            <Input
              defaultValue={record[nextKey]}
              onChange={(e) => onRowSelect(record.id, e.target.value)}
            />
          ),
        });
      }
    } else {
      acc.push(col);
    }
    return acc;
  }, []);

  return (
    <Table
      columns={enhancedColumns}
      dataSource={dataSource}
      rowSelection={{ type: uiConfig.multiSelect ? 'checkbox' : 'radio', ...rowSelection }}
      rowKey={(record) => record.id}
      pagination={uiConfig.pagination}
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
    />
  );
};

export default CustomTable;

