'use client'

import { CustomBrowse } from "@/components/form/CustomBrowse"
import { CustomButton } from "@/components/form/CustomButton"
import Chart from "@/components/graph/Chart"
import { GraphHeader } from "@/layout"
import { Col, Row } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Page() {

  const [btnData, setBtnData] = useState([]);

  // const handleButtonClick = (event) => {
  //   // External onClick logic
  //   console.log('Button clicked');
  // };

  const btnValue = {
    type: 'primary',
    loading: false,
    block: true,
    postApi: 'https://mocki.io/v1/a47e1890-b936-4b2e-b937-3ddf1b809354',
    children: 'Button',
    btnData: setBtnData,
  };

  const uiConfigMaterial = {
    pagination: false,
    filtering: false, 
    sorting: false,
    multiSelect: true,
    label: 'Material',
    tableTitle: 'Materials',
    okButtonVisible: true,
    cancelButtonVisible: true,
    selectEventCall: false,
    selectEventApi: 'api/rits/retrive',
    tabledataApi: 'https://mocki.io/v1/457495cd-dde0-4ea8-9a5e-84234ce81183'
  }

  const [data, setData] = useState()

useEffect(() => {
  setData(btnData)
}, [btnData])

console.log(data,'hhhh');


  const graphDataUrl = 'https://mocki.io/v1/a47e1890-b936-4b2e-b937-3ddf1b809354'
  
  const getGraphData = () => {
    axios.get(graphDataUrl)
      .then(response => {
        console.log(response.data);
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
         {/* <CustomBrowse uiConfig={uiConfigOperation} />*/}
        {/* <CustomButton style={{ marginTop: '4px' }} type="primary" onClick={getGraphData}>Button</CustomButton> */}
        <CustomButton btnValue={btnValue} style={{ marginTop: '4px' }} />
      </div> 
      <Row style={{width:'100%'}} gutter={[24, 24]}>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={data?.barData || []} barSize={15} label={'Bar Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="line" data={data?.barData || []} label={'Line Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="line" data={data?.barData || []} label={'Line Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={data?.barData || []} barSize={5} label={'Bar Chart'}/>
        </Col>

        <Col span={6} md={6} sm={6}>
          <Chart type="pie" data={data?.pieData || []} barSize={10} label={'Pie Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="sticky-bar" data={data?.barData || []} barSize={10} label={'Sticky Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={data?.barData || []} barSize={5} label={'Bar Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={data?.barData || []} barSize={5} label={'Bar Chart'}/>
        </Col>

        <Col span={6} md={6} sm={6}>
          <Chart type="line" data={data?.barData || []} barSize={10} label={'Line Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={data?.barData || []} barSize={5} label={'Bar Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="bar" data={data?.barData || []} barSize={5} label={'Bar Chart'}/>
        </Col>
        <Col span={6} md={6} sm={6}>
          <Chart type="composed" data={data?.barData || []} barSize={10} label={'Line Chart'}/>
        </Col>
      </Row>
    </main>
  )
}

