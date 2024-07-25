'use client'
import './index.css'
import Header from '../Header'
import DynamicTile from '../DynamicTile'
import {Flex} from 'antd'

const Resource = ({id}) => {
  console.log(id)
  const resource = [
    {
      resourceId: 101,
      resourceName: 'Resource A',
      resourceType: 'Operator',
      oee: 80.0,
      availability: 88.0,
      performance: 92.0,
      quality: 96.0,
      isMachineAvailable: true,
    },
    {
      resourceId: 102,
      resourceName: 'Resource B',
      resourceType: 'Technician',
      oee: 82.0,
      availability: 85.0,
      performance: 90.0,
      quality: 97.0,
      isMachineAvailable: false,
    },
    {
      resourceId: 103,
      resourceName: 'Resource C',
      resourceType: 'Supervisor',
      oee: 85.0,
      availability: 90.0,
      performance: 95.0,
      quality: 98.0,
      isMachineAvailable: false,
    },
    {
      resourceId: 104,
      resourceName: 'Resource D',
      resourceType: 'Operator',
      oee: 81.0,
      availability: 89.0,
      performance: 91.0,
      quality: 97.0,
      isMachineAvailable: true,
    },

    {
      resourceId: 105,
      resourceName: 'Resource E',
      resourceType: 'Technician',
      oee: 83.0,
      availability: 87.0,
      performance: 94.0,
      quality: 95.0,
      isMachineAvailable: false,
    },
    {
      resourceId: 106,
      resourceName: 'Resource F',
      resourceType: 'Supervisor',
      oee: 84.0,
      availability: 88.0,
      performance: 90.0,
      quality: 97.0,
      isMachineAvailable: true,
    },
    ,
    {
      resourceId: 107,
      resourceName: 'Resource G',
      resourceType: 'Supervisor',
      oee: 84.0,
      availability: 88.0,
      performance: 90.0,
      quality: 97.0,
      isMachineAvailable: true,
    },
    ,
    {
      resourceId: 108,
      resourceName: 'Resource H',
      resourceType: 'Supervisor',
      oee: 84.0,
      availability: 88.0,
      performance: 90.0,
      quality: 97.0,
      isMachineAvailable: true,
    },
    ,
    {
      resourceId: 109,
      resourceName: 'Resource I',
      resourceType: 'Supervisor',
      oee: 84.0,
      availability: 88.0,
      performance: 90.0,
      quality: 97.0,
      isMachineAvailable: true,
    },
  ]
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

  const renamedResourceList = resource.map(data => ({
    ...data,
    name: data.resourceName,
    shiftName: undefined,
  }))

  const getShitName = initialShiftList.filter(
    sId => sId.shiftId == id.resourceId,
  )
  const inputJson = {
    pathName: 'chart',
  }

  return (
    <>
      <Header />
      <div className="main-container" style={{padding: '20px'}}>
        <h1 className="shift-headings">{getShitName[0].shiftName}</h1>
        <Flex gap="middle" align="start" vertical className="ant-flex-tile">
          {renamedResourceList.map(data => (
            <DynamicTile
              key={data.resourceId} jsonData={{...inputJson, tilesData: data}}
            />
          ))}
        </Flex>
      </div>
    </>
  )
}
export default Resource
