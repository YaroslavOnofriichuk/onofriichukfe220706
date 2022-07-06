import { useState, useEffect } from 'react';
import './App.css';
import Title from "./Title";
import Chart from "./Chart";
import Button from "./Button";
import IData from '../types/data.interface';

function App() {
  const [data, setData] = useState<IData[]>([
    { name: "Landing Page", time: 0 },
    { name: "Configurator", time: 0 },
    { name: "Check-out", time: 0 },
    { name: "Deal", time: 0 },
  ]);

  const generateData = () => {
    setData([
      { name: "Landing Page", time: Number((Math.random() * 10).toFixed(2)) },
      { name: "Configurator", time: Number((Math.random() * 10).toFixed(2)) },
      { name: "Check-out", time: Number((Math.random() * 10).toFixed(2)) },
      { name: "Deal", time: Number((Math.random() * 10).toFixed(2)) },
    ])
  };

  useEffect(() => {
    generateData()
    const interval = setInterval(() => {
      generateData()
    }, 30000);
  
    return () => clearInterval(interval);
  }, [])
  

  const onButtonClick = () => {
    generateData()
  };

  return (
    <section className='section'>
      <Title />
      <Chart data={data}/>
      <Button onClick={onButtonClick}/>
    </section>
  );
}

export default App;
