'use client'

import { CustomBrowse } from "@/components/form/CustomBrowse"
import CustomButton from "@/components/form/CustomButton"
import Chart from "@/components/graph/Chart"
import { GraphHeader } from "@/layout"
import { Col, Row } from "antd"
import axios from "axios"
import { useState } from "react"

export default function Page() {

  const barData = [
    {
      "key":"1",
      "oee" : '30',
      "date" : '24-07-24'
    },
    {
      "key":"2",
      "oee" : '40',
      "date" : '25-07-24'
    },
    {
      "key":"3",
      "oee" : '50',
      "date" : '26-07-24'
    }
  ]

  const uiConfigMaterial = {
    pagination: false,
    filtering: false,
    sorting: false,
    multiSelect: false,
    label: 'Material',
    tableTitle: 'Materials',
    okButtonVisible: true,
    cancelButtonVisible: true,
    selectEventCall: false,
    selectEventApi: 'api/rits/retrive',
    // tabledataApi: 'https://mocki.io/v1/98215bbe-c0d0-42b9-8ee7-5c8992dc9cb3'
    // tabledataApi: 'https://mocki.io/v1/cf838ced-12e1-41f7-8ee6-4ff4140e641c'
    tabledataApi: 'https://mocki.io/v1/8080e4a9-a1c6-4f67-b12a-c17fd033adbc'
    // tabledataApi: barData
  }

  const uiConfigOperation = {
    pagination: false,
    filtering: false,
    sorting: false,
    multiSelect: true,
    label: 'Operation',
    tableTitle: 'Operations',
    okButtonVisible: true,
    cancelButtonVisible: true,
    selectEventCall: false,
    selectEventApi: 'api/rits/retrive',
    tabledataApi: 'https://mocki.io/v1/cf838ced-12e1-41f7-8ee6-4ff4140e641c'
  }

  const [data, setData] = useState({})



  const graphDataUrl = 'https://mocki.io/v1/a47e1890-b936-4b2e-b937-3ddf1b809354'
  
  const getGraphData = () => {
    axios.get(graphDataUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching graph data:', error);
      });
  }

  return (
    <main className='min-h-screen'>
      {/* <GraphHeader /> */}
     <div className="flex justify-center gap-10 p-5">
        <CustomBrowse uiConfig={uiConfigMaterial} />
         {/* <CustomBrowse uiConfig={uiConfigOperation} />
        <CustomButton style={{ marginTop: '4px' }} type="primary" onClick={getGraphData}>Retrieve</CustomButton>*/}
      </div> 
      <Row style={{width:'100%'}} gutter={[12, 12]}>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={barData || []} barSize={15} label={'Bar Chart'}/>
        </Col>
        {/* <Col span={6} md={6} sm={6}>
          <Chart type="line" data={data.barData || []} label={'Line Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="line" data={data.barData || []} label={'Line Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={data.barData || []} barSize={5} label={'Bar Chart'}/>
        </Col>

        <Col span={6} md={6} sm={6}>
          <Chart type="pie" data={data.pieData || []} barSize={10} label={'Pie Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={data.barData || []} barSize={5} label={'Bar Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="sticky-bar" data={data.barData || []} barSize={10} label={'Sticky Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={data.barData || []} barSize={5} label={'Bar Chart'}/>
        </Col>

        <Col span={6} md={6} sm={6}>
          <Chart type="line" data={data.barData || []} barSize={10} label={'Line Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={data.barData || []} barSize={5} label={'Bar Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={data.barData || []} barSize={5} label={'Bar Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="line" data={data.barData || []} barSize={10} label={'Line Chart'}/>
        </Col> */}
      </Row>
    </main>
  )
}

