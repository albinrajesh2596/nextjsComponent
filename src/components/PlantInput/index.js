import { useState } from 'react';
import { Input, Modal, Table, Form } from 'antd';
import { ContainerOutlined } from '@ant-design/icons'; // Import the icon you want to use
import './index.css';

const MyComponent = ({initialplate}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlate, setSelectedPlate] = useState(null); // Initialize selectedPlate as null
  const [form] = Form.useForm();

  const handleInputClick = () => {
    setModalVisible(true);
  };

  const handleTableClick = (record) => {
    setSelectedPlate(record); // Update selectedPlate with the clicked record
  };

  const handleOk = () => {
    setModalVisible(false);
    if (selectedPlate) {
      form.setFieldsValue({ plateName: selectedPlate.plateId }); // Set plateName in the form
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const columns = [
    { title: 'MRF No.', dataIndex: 'plateId', key: 'plateId' },
    { title: 'Version', dataIndex: 'plateName', key: 'plateName' },
  ];

  const rowClassName = (record) => {
    return selectedPlate && record.plateId === selectedPlate.plateId ? 'selected-row' : '';
  };

  return (
    <>
      <Form form={form} layout="inline">
        <Form.Item name="plateName">
          <Input
            onClick={handleInputClick}
            placeholder="Click to select plate"
            suffix={<ContainerOutlined />} // Add icon using the suffix prop
            required
          />
        </Form.Item>
      </Form>
      <Modal
        title="Select MFR"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Table
          dataSource={initialplate}
          columns={columns}
          rowKey="plateId"
          onRow={(record) => ({
            onClick: () => handleTableClick(record),
          })}
          rowClassName={rowClassName} // Apply rowClassName to conditionally style rows
        />
      </Modal>
    </>
  );
};

export default MyComponent;
