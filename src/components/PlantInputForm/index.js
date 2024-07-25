// PlantInputForm.js

import React, { useState } from 'react';
import DynamicButton from '../DynamicButton'
import PlantInput from '../PlantInput';
import DynamicRangePicker from '../DynamicRangePicker'; // Import the new component
import './index.css';
import Label from './styleComponent.js';
import DynamicInput from '../DynamicInput'

const PlantInputForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = dates => {
    if (dates) {
      setStartDate(dates[0]);
      setEndDate(dates[1]);
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };

  const handleSubmit = () => {
    if (startDate && endDate) {
      onSubmit(startDate, endDate);
    } else {
      // Handle case where dates are not selected
    }
  };
  
  const initialValue = [
    { plateId: 'MFR36', plateName: 1 },
    { plateId: 'MFR37', plateName: 2 },
    { plateId: 'MFR38', plateName: 3 },
    { plateId: 'MFR39', plateName: 4 },
  ];
  return (
    <div className='form-div'>
      <DynamicInput
        placeholder="Enter the value..."
        disabled={false} />
      <PlantInput initialplate= {initialValue} />
      <DynamicRangePicker required onChange={handleDateChange} /> {/* Use DynamicRangePicker */}
      <DynamicButton
        type='primary'
        text='Retrieve'
        onClick={handleSubmit}
        style={{ marginLeft: '10px' }}
      />
        
      
    </div>
  );
};

export default PlantInputForm;
