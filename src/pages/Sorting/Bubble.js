import BarGraph from '../../components/BarGraph';
import Input from '../../components/Input';
import DisplayNumbers from '../../components/DisplayNumbers';
import React from 'react';
import { useState } from 'react';

export default function Bubble() {
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  return (
    <>
      <Input value={data} onSubmit={handleSubmit} />
      <DisplayNumbers data={data} />
      <BarGraph data={data} />
    </>
  );
}
