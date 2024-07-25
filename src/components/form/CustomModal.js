import React from 'react';
import { Modal, Button } from 'antd';

const CustomModal = ({
  visible,
  onOk,
  onCancel,
  title,
  okButtonVisible = true,
  cancelButtonVisible = true,
  children,
}) => {
  return (
    <Modal
      open={visible}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        okButtonVisible && <Button key="ok" type="primary" onClick={onOk}>OK</Button>,
        cancelButtonVisible && <Button key="cancel" onClick={onCancel}>Cancel</Button>
      ]}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;

