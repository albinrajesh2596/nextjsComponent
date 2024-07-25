import React from 'react';
import { Modal, Button } from 'antd';
import styled from 'styled-components';

const StyledModal = styled(Modal)`


`

const CustomModal = ({
  visible,
  onOk,
  onCancel,
  title,
  okButtonVisible = true,
  cancelButtonVisible = true,
  children,
  width,
  height
}) => {
  return (
    <StyledModal
      open={visible}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        okButtonVisible && <Button key="ok" type="primary" onClick={onOk}>OK</Button>,
        cancelButtonVisible && <Button key="cancel" onClick={onCancel}>Cancel</Button>
      ]}
      width={width}
      style={{ height: height }}
    >
      <div style={{ width: '100%', height: '100%' }}>
        {children}
      </div>
    </StyledModal>
  );
};

export default CustomModal;

