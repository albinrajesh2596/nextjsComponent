'use client'
import React, {useState, useEffect} from 'react'
import {Flex, Spin} from 'antd'
import {LoadingOutlined} from '@ant-design/icons'
import Header from '../Header'
import PlantInputForm from '../PlantInputForm'
import DynamicTile from '../DynamicTile'
import './index.css'

const ShiftList = () => {
  const [dataGet, setData] = useState(null)
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      const response = await fetch(
        'https://mocki.io/v1/2ed53e7f-f217-4a9c-94d2-619878fbd426',
      ) 
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const result = await response.json()
      console.log(result.data)
      setData(result) // Update state with the fetched data
    }

    fetchData() // Call the fetch function
  }, [])

  const handleSubmitForm = (startDate, endDate) => {
    // Filter the initialShiftList based on startDate and endDate
    const filteredList = dataGet.filter(shift => {
      return (
        shift.startDate >= startDate.format('YYYY-MM-DD') &&
        shift.endDate <= endDate.format('YYYY-MM-DD')
      )
    })

    setFilteredShiftList(filteredList)
  }

  const data = dataGet?.data || []
  const updatedData = data.map(each => ({
    id: each.id,
    Name: each.shiftName,
    Oee: each.oee,
    Availability: each.availability,
    Performance: each.performance,
    Quality: each.quality,
  }))

  return (
    <>
      <Header />
      <div className='shift-data-container' style={{padding: '20px'}}>
        {/* <PlantInputForm onSubmit={handleSubmitForm} /> */}
        <Flex gap='middle' align='start' vertical className='ant-flex-tile'>
          {updatedData.map(datas => (
            <DynamicTile
              key={datas.id}
              jsonDatas={{...dataGet, tilesData: datas}}
            />
          ))}
        </Flex>
      </div>
    </>
  )
}

export default ShiftList
