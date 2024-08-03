import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import DeviceControl from './components/DeviceControl';
import UserSettings from './components/UserSettings';

const socket = io('http://localhost:5000');

function App() {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/energyData')
      .then(response => setEnergyData(response.data))
      .catch(error => console.error('Error fetching energy data:', error));

    socket.on('energyDataUpdate', (data) => {
      setEnergyData(prevData => [data, ...prevData]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="App">
      <h1>Smart Home Energy Management</h1>
      <Dashboard data={energyData} />
      <DeviceControl />
      <UserSettings />
    </div>
  );
}

export default App;
