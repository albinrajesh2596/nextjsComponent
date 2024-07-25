import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  PieChart,
  Pie,
  Sector,
  LineChart,
  Line,
  Legend,
  AreaChart,
  Area
} from 'recharts';
import CustomModal from '../form/CustomModal';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import styled from 'styled-components';

const StyledResizableBox = styled(ResizableBox)`
    position: relative;
    margin: 0;
    padding: 10px 10px;
`;

const ChartContainer = styled.div`
width: 100%;
height: 100%;
`;

// Suppress Recharts deprecation warnings
const suppressedWarnings = /defaultProps will be removed/;
const originalConsoleError = console.error;
console.error = function (message) {
  if (message.match(suppressedWarnings)) {
    return;
  }
  originalConsoleError.apply(console, arguments);
};

// Helper function to render the active shape in the Pie chart
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Chart = ({ type = 'bar', data = [], barSize }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chartType, setChartType] = useState(type);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalWidth, setModalWidth] = useState(700);
  const [modalHeight, setModalHeight] = useState(488);

  const handleChartClick = () => {
    setChartType(type);
    setIsModalVisible(true);
  };
  //called

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleBarMouseEnter = (_, index) => {
    setActiveIndex(index);
  };

  const handleBarMouseLeave = () => {
    setActiveIndex(-1);
  };

  const handlePieMouseEnter = (_, index) => {
    setActiveIndex(index);
  };

  const handlePieMouseLeave = () => {
    setActiveIndex(-1);
  };

  const onResize = (event, { size }) => {
    setModalWidth(size.width);
    setModalHeight(size.height);
  };

  const renderChart = (type) => {
    switch (type) {
      case 'bar':
        return (
          <BarChart data={data} barSize={barSize}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="uv"
              isAnimationActive={true}
              onMouseEnter={handleBarMouseEnter}
              onMouseLeave={handleBarMouseLeave}
            >
              <LabelList dataKey="uv" position="top" />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === activeIndex ? '#82ca9d' : '#8884d8'}
                />
              ))}
            </Bar>
          </BarChart>
        );
      case 'sticky-bar':
        return (
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        );
      case 'pie':
        return (
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={handlePieMouseEnter}
            />
          </PieChart>
        );
      case 'line':
        return (
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        );
      case 'area':
        return (
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        );
      default:
        return <div>Invalid chart type</div>;
    }
  };

  return (
    <>
      <div onClick={handleChartClick} style={{ cursor: 'pointer' }}>
        <ResponsiveContainer width="100%" height={300}>
          {renderChart(type)}
        </ResponsiveContainer>
      </div>
      <CustomModal
        cancelButtonVisible={false}
        okButtonVisible={false}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        title={`${chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart`}
        width={modalWidth}
        height={modalHeight}
      >
        <StyledResizableBox
          width={modalWidth}
          height={modalHeight}
          minConstraints={[200, 200]}
          maxConstraints={[700, 488]}
          onResize={onResize}
          resizeHandles={['se']}
        >
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              {renderChart(chartType)}
            </ResponsiveContainer>
          </ChartContainer>
        </StyledResizableBox>
      </CustomModal>
    </>
  );
};

export default Chart;


