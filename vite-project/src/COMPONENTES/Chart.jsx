import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const InsightsChart = () => {
  // Step 1: Create dynamic state for chart data
  const [data, setData] = useState([
    { name: 'Men', views: 120 },
    { name: 'Women', views: 200 },
    { name: 'Kids', views: 90 },
    { name: 'Beauty', views: 150 },
    { name: 'Studio', views: 70 },
  ]);

  // Step 2: Simulate data update (e.g., fetch new data, user interaction, etc.)
  const updateData = () => {
    const newData = [
      { name: 'Men', views: Math.floor(Math.random() * 300) },
      { name: 'Women', views: Math.floor(Math.random() * 300) },
      { name: 'Kids', views: Math.floor(Math.random() * 300) },
      { name: 'Beauty', views: Math.floor(Math.random() * 300) },
      { name: 'Studio', views: Math.floor(Math.random() * 300) },
    ];
    setData(newData); // Step 3: Update state to re-render chart with new data
  };

  return (
    <div style={{ width: '100%', height: '400px', margin: '20px 0' }}>
      <h3 style={{ textAlign: 'center' }}>Top Viewed Categories</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="views" fill="#ff3f6c" />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* Step 4: Button to trigger data update */}
        <button onClick={updateData} style={{ padding: '10px 20px', backgroundColor: '#ff3f6c', color: 'white', border: 'none', cursor: 'pointer' }}>
          Update Data
        </button>
      </div>
    </div>
  );
};

export default InsightsChart;
