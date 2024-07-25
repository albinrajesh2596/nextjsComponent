'use client'
import { CustomBrowse } from '@/components/form/CustomBrowse';
import Chart from '@/components/graph/Chart';
import React from 'react';

export default function Home() {

  const uiConfig = {
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
    tabledataApi: 'https://mocki.io/v1/7169d280-befc-4ff5-96f0-7262a13f6a62'
  }

  const barData = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
    { name: 'Page F', uv: 2390, pv: 3800 },
    { name: 'Page G', uv: 3490, pv: 4300 },
  ];

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const lineData = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
    { name: 'Page F', uv: 2390, pv: 3800 },
    { name: 'Page G', uv: 3490, pv: 4300 },
  ];

  const areaData = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
    { name: 'Page F', uv: 2390, pv: 3800 },
    { name: 'Page G', uv: 3490, pv: 4300 },
  ];

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <CustomBrowse uiConfig={uiConfig} />
      </div>

      <div>
        <h1>Charts Example</h1>
        <div style={{ marginBottom: '20px' }}>
          <h2>Bar Chart</h2>
          <Chart type="bar" data={barData || []} barSize={20} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h2>Pie Chart</h2>
          <Chart type="pie" data={pieData || []} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h2>Line Chart</h2>
          <Chart type="line" data={lineData || []} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h2>Area Chart</h2>
          <Chart type="area" data={areaData || []} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Area Chart</h2>
          <Chart type="sticky-bar" data={areaData || []} />
        </div>
      </div>
    </main>
  );
}
