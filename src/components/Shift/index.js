'use client'
import React, {useState} from 'react'
import {Flex, Spin} from 'antd'
import {LoadingOutlined} from '@ant-design/icons'
import Header from '../Header'
import PlantInputForm from '../PlantInputForm'
import DynamicTile from '../DynamicTile'
import './index.css'

const initialShiftList = [
  {
    shiftId: 1,
    shiftName: 'Morning Shift',
    startDate: '2024-07-12',
    endDate: '2024-08-12',
    oee: 85.0,
    availability: 90.0,
    performance: 95.0,
    quality: 98.0,
  },
  {
    shiftId: 2,
    shiftName: 'Morning Shift',
    startDate: '2024-07-13',
    endDate: '2024-08-12',
    oee: 83.0,
    availability: 87.0,
    performance: 93.0,
    quality: 99.0,
  },
  {
    shiftId: 3,
    shiftName: 'Evening Shift',
    startDate: '2024-07-14',
    endDate: '2024-08-12',
    oee: 83.0,
    availability: 87.0,
    performance: 93.0,
    quality: 99.0,
  },
  {
    shiftId: 4,
    shiftName: 'Night Shift',
    startDate: '2024-07-12',
    endDate: '2024-08-12',
    oee: 84.0,
    availability: 86.0,
    performance: 92.0,
    quality: 96.0,
  },
  {
    shiftId: 5,
    shiftName: 'Night Shift',
    startDate: '2024-07-12',
    endDate: '2024-08-12',
    oee: 86.0,
    availability: 76.0,
    performance: 89.0,
    quality: 90.0,
  },
  {
    shiftId: 6,
    shiftName: 'Night Shift',
    startDate: '2024-07-13',
    endDate: '2024-08-12',
    oee: 86.0,
    availability: 76.0,
    performance: 89.0,
    quality: 90.0,
  },
]



const dataFetchStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

const ShiftList = () => {
  const [filteredShiftList, setFilteredShiftList] = useState(initialShiftList)
  const [profileLoadingStatus, setProfileLoadingStatus] = useState(
    dataFetchStatusConstants.initial,
  )

  const handleSubmitForm = (startDate, endDate) => {
    // Filter the initialShiftList based on startDate and endDate
    setProfileLoadingStatus(dataFetchStatusConstants.loading)
    const filteredList = initialShiftList.filter(shift => {
      return (
        shift.startDate >= startDate.format('YYYY-MM-DD') &&
        shift.endDate <= endDate.format('YYYY-MM-DD')
      )
    })

    setFilteredShiftList(filteredList)
    setProfileLoadingStatus(dataFetchStatusConstants.success)
  }

  const renamedShiftList = filteredShiftList.map(shift => ({
    ...shift,
    name: shift.shiftName,
    shiftName: undefined, 
    id: shift.shiftId,
    shiftId: undefined,// Optionally, remove the old property (set to undefined)
  }))

  const inputJson = {
    pathName: 'resource',
    icon: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
  }

  const renderProfileDetails = () => {
    switch (profileLoadingStatus) {
      case dataFetchStatusConstants.loading:
        return (
          <div className="loader-container" testid="loader">
            <Spin indicator={<LoadingOutlined spin />} size="large" />
          </div>
        )

      case dataFetchStatusConstants.success:
        return (
          <Flex gap="middle" align="start" vertical className="ant-flex-tile">
            {renamedShiftList.map(data => (
              <DynamicTile key={data.id} jsonData={{...inputJson, tilesData: data}} />
            ))}
          </Flex>
        )
      case dataFetchStatusConstants.initial:
        return (
          <Flex gap="middle" align="start" vertical className="ant-flex-tile">
            {renamedShiftList.map(data => (
              <DynamicTile key={data.id} jsonData={{...inputJson, tilesData: data}} />
            ))}
          </Flex>
        )

      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <div className="shift-data-container" style={{padding: '20px'}}>
        <PlantInputForm onSubmit={handleSubmitForm} />
        {/* <Row className='row-tiles' gutter={16}>
          {renamedShiftList.map(data => (
            <Tiles tilesData={data} key={data.shiftId} pathName='resource' />
          ))}
        </Row> */}
        {renderProfileDetails()}
      </div>
    </>
  )
}

export default ShiftList
