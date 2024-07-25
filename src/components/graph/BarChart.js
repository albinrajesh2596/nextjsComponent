// We can this way to use this components


// 'use client'
// import React, { useEffect, useState } from 'react';
// import { JsonData } from '@/dummydata/jsonData';
// import { BarCharts } from '@/components/graph/BarChart';

// export default function Home() {

//   const [seriesData, setSeriesData] = useState([]);

//   useEffect(() => {
//     const oeeData = JsonData?.oee_dashboard?.metrics?.oee?.data || [];
//     const formattedData = oeeData.map((item, index) => ({
//       name: item?.datetime,
//       uv: item?.value,
//       pv: 2400, 
//       amt: 2400 
//     }));
//     setSeriesData(formattedData);
//   }, []);
    

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <BarCharts seriesData={seriesData}/>
//     </main>
//   );
// }





'use client'
import React, { useState } from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';

export const BarCharts = ({ seriesData }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleMouseEnter = (_, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(-1);
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={seriesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="uv"
          isAnimationActive={true}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <LabelList dataKey="uv" position="top" />
          {seriesData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === activeIndex ? '#82ca9d' : '#8884d8'}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};